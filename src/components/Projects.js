import React, { useState, useEffect } from "react";

export const Projects = ({ projectsRef }) => {
  const [projectOne, setProjectOne] = useState(false);
  const [projectTwo, setProjectTwo] = useState(false);
  const [projectThree, setProjectThree] = useState(false);
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension(){
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
  }

  useEffect(() => {
    const updateDimension = () => {
        setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);


    return(() => {
        window.removeEventListener('resize', updateDimension);
    })
}, [screenSize])

  const handleProjectOneEnter = () => {
    if (window.innerWidth <= 1100 && window.innerWidth >= 575) {
      setProjectOne(true);
    }
  };

  const handleProjectOneLeave = () => {
    if (window.innerWidth <= 1100 && window.innerWidth >= 575) {
      setProjectOne(false);
    }
  };

  const handleProjectTwoEnter = () => {
    if (window.innerWidth <= 1100 && window.innerWidth >= 575) {
      setProjectTwo(true);
    }
  };

  const handleProjectTwoLeave = () => {
    if (window.innerWidth <= 1100 && window.innerWidth >= 575) {
      setProjectTwo(false);
    }
  };

  const handleProjectThreeEnter = () => {
    if (window.innerWidth <= 1100 && window.innerWidth >= 575) {
      setProjectThree(true);
    }
  };

  const handleProjectThreeLeave = () => {
    if (window.innerWidth <= 1100 && window.innerWidth >= 575) {
      setProjectThree(false);
    }
  };
  

  const projectOneDesc = (
    <div className="project-desc">
      <h3>Weather App</h3>
      <p>
          The Weather App is a responsive web application built with React that provides real-time weather information for any location. It allows users to search for a specific location and displays current weather conditions, temperature, humidity, wind speed, and a 5-day forecast.
      </p>
      <p>
          The app fetches weather data from a third-party API and dynamically updates the UI based on the user's search. It features a clean and intuitive user interface, with visually appealing icons and a modern design.
      </p>
      <h3>Technologies</h3>
      <div className="icon-container">
        <img src="./images/react.png" alt="React"/>
        <img src="./images/api.png" alt="API"/>
        <button
          className="code-btn"
          onClick={() => (window.location.href = "https://github.com/Crowbr1995/Weather-App")}
        >
        Code
      </button>
      </div>
    </div>
  )

  const projectTwoDesc = (            
    <div className="project-desc">
    <h3>Todo List</h3>
    <p>
      A feature-rich Todo List application built using React. It provides a user-friendly interface to manage your tasks effectively. You can add new tasks, edit existing tasks, and delete tasks when they are no longer needed. The application offers a responsive layout, ensuring a seamless experience across different devices.
    </p>
    <h3>Technologies</h3>
    <div className="icon-container-2">
      <img src="./images/react.png" alt="React"/>
      <button
        className="code-btn-2"
        onClick={() => (window.location.href = "https://github.com/Crowbr1995/react-todo-lis")}
      >
        Code
      </button>
    </div>
  </div>  
  )

  const projectThreeDesc = (            
    <div className="project-desc">
      <h3>Tik Tak Toe</h3>
      <p>
          A simple Tik Tak Toe game features made from HTML, CSS and JavaScript that features a simple and intuitive user interface, with a responsive layout that works well on both desktop and mobile devices. It keeps track of the current player's turn, displays a message when the game ends in a win or a draw, and allows players to reset the game and start a new round.
      </p>
      <h3>Technologies</h3>
      <div className="icon-container">
        <img src="./images/html.png" alt="HTML"/>
        <img src="./images/css.png" alt="CSS"/>
        <img src="./images/js.png" alt="JavaScript"/>
        <button
            className="code-btn"
            onClick={() => (window.location.href = "https://github.com/Crowbr1995/JS-Tic-Tac-Toe")}
          >
        Code
      </button>
      </div>
    </div>
  )
  

  return (
    <>
      <div ref={projectsRef} className="project-container">
        <h1>Projects</h1>
        <div
          className={`project project-1 ${screenSize.width <= 1100 && screenSize.width >= 575 ? 'hovered' : ''}`}
          onMouseEnter={handleProjectOneEnter}
          onMouseLeave={handleProjectOneLeave}>
            <div className="img-container">
                <img src="./images/wa.png"/>
                {projectOne && projectOneDesc}
            </div>
            {screenSize.width >= 1100 || screenSize.width <= 575 ? projectOneDesc : ''}
        </div> 
       
        <div
          className={`project project-2 ${screenSize.width <= 1100 && screenSize.width >= 575 ? 'hovered' : ''}`}
          onMouseEnter={handleProjectTwoEnter}
          onMouseLeave={handleProjectTwoLeave}>
            {screenSize.width >= 1100 && projectTwoDesc}
            <div className="img-container">
              {projectTwo && projectTwoDesc}
                <img src="./images/tdl.png"/>     
            </div>
            {screenSize.width <= 575 ? projectTwoDesc : ''}
        </div>

        <div
          className={`project project-1 ${screenSize.width <= 1100 && screenSize.width >= 575 ? 'hovered' : ''}`}
          onMouseEnter={handleProjectThreeEnter}
          onMouseLeave={handleProjectThreeLeave}>
            <div className="img-container">
                <img src="./images/ttt.png"/>
                {projectThree && projectThreeDesc}
            </div>
            {screenSize.width >= 1100 || screenSize.width <= 575 ? projectThreeDesc : ''}
        </div> 

      </div>
    </>
  );
};
