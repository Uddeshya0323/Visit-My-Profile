import React from "react";
import "./ProjectCard.css";
import Project1 from "../../assets/ProjectOne.png";
import Project2 from "../../assets/ExpenseTracker.png";
import Project3 from "../../assets/TodoApp.png";
import { FaGithub } from "react-icons/fa"; // For GitHub icon
import { BsBoxArrowUpRight } from "react-icons/bs"; // For Live Demo icon

const ProjectCard = ({ offer, onClick }) => {
  
  // Function to handle button click with dynamic URL
  const handleButtonClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const detailsArray = [
    {
      imgUrl: Project1,
      name: "Personal Portfolio",
      liveDemoLink: "https://uddeshya-personal-portfolio.vercel.app/",
      githubLink: "https://github.com/Uddeshya0323/Uddeshya-Personal-Portfolio" // Add GitHub link if available
    },
    {
      imgUrl: Project2,
      name: "Expense Tracker",
      liveDemoLink: "https://react-expense-tracker-app-ud.vercel.app/",
      githubLink: "https://github.com/Uddeshya0323/React-Expense-Tracker-App-Ud" // Add GitHub link if available
    },
    {
      imgUrl: Project3,
      name: "Todo App",
      liveDemoLink: "https://mern-todo-app-ud-ui.vercel.app/",
      githubLink: "https://github.com/Uddeshya0323/Mern-Todo-App-Ud"
    },
  ];

  return (
    <>
      {detailsArray.map((dets, index) => (
        <div
          key={index}
          className="project-card bg-white shadow-lg hover:shadow-green-950 hover:border-green-900"
          onClick={() => onClick(index)}
          style={{ cursor: "pointer" }}
        >
          <div className="project-card-logo border border-black">
            <img src={dets.imgUrl} alt={dets.name} />
          </div>
          <div className="project-card-content">
            <div className="project-card-title">{dets.name}</div>
            <div className="project-card-footer">
              <div className="project-card-footer-left w-full flex justify-between">
                <button 
                  onClick={() => handleButtonClick(dets.liveDemoLink)}
                  className="project-card-button"
                  disabled={!dets.liveDemoLink} // Disable button if no link
                >
                  <BsBoxArrowUpRight /> Live Demo
                </button>
                {dets.githubLink && (
                  <a href={dets.githubLink} className="project-card-github" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                )}
              </div>
              <div className="project-card-timer">
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
