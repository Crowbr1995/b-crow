import React from "react";

export const Skills = () => {

    return (
        <>
        <div className="skill-container">
            <div className="skill-badge">
                <img src="./images/phone.png" alt="icon"/>
                <h2>Responsive Design</h2>
                <p>With expertise in responsive design, I ensure that your website looks stunning and functions seamlessly across all devices and screen sizes. By employing fluid grids, flexible images, and media queries, I create an optimal user experience that adapts to different platforms.</p>
            </div>
            <div className="skill-badge">
                <img src="./images/ui.png" alt="icon"/>
                <h2>Design Fundamentals</h2>
                <p>I possess a strong grasp of design fundamentals, including color theory, typography, layout, and composition. By leveraging these principles, I create visually captivating designs that effectively communicate your brand's message and captivate your target audience.</p>
            </div>
        </div>

      <div className="about-me">
        <h1>About Me</h1>
        <img className="prof-img" src="./images/prof-pic.jpeg" alt="Profile Pic"/>
        <p>
            Hi there! I'm Bryan, a passionate front-end developer with a love for creating beautifully crafted websites. I specialize in responsive design, ensuring that websites adapt seamlessly to different devices and screen sizes. With a strong foundation in design fundamentals, including color theory, typography, layout, and composition, I strive to create visually appealing and engaging user experiences.
        </p>
      </div>
      </>
    )
}