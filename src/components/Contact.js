import React, { useState } from "react";
import emailjs from "emailjs-com";

export const Contact = ({ contactRef }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const [addClass, setAddClass] = useState(false);

  const handleClick = () => {
    setAddClass(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_0fune2l";
    const templateId = "template_rmalzrj";
    const publicKey = "-mCzh2K-LSJII0RZ-";

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setStatus("success");
      })
      .catch((error) => {
        console.error("Email failed to send:", error);
        setStatus("error");
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      {status === "success" ? (
        <div className="success">
          <h3>Success!</h3>
          <p>Thank you for your interest!</p>
        </div> 
      ) : (
        <div className="contact-container">
          <form className="contact-form" ref={contactRef} onSubmit={handleSubmit}>
            <h1>Contact Me</h1>
            <input
              onClick={handleClick}
              className="form-item"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              onClick={handleClick}
              className="form-item"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              className="form-item"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            {status === "error" && <p>Error sending email. Please try again later.</p>}
            <button className="form-item" type="submit">Send Email</button>
          </form>
        </div>
      )}
    </>
  );
 }


