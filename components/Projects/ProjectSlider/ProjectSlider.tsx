import React, { useState } from "react";
import ProjectSlide from "./ProjectSlide";
import styles from "./projectslider.module.css";
import "./projectslider.module.css";

const ProjectSlider = ({ projects }) => {
  if (!projects[0]) {
    projects = [
      {
        title: { rendered: "Ticket System" },
        acf: {
          priority: 1,
          raw_description:
            "Full stack ticket system, built with .NET Core 3.1 in the backend, and React with Hooks in the frontend. Published on Azure.",
          live_link: "https://mqumairi-tickets.azurewebsites.net/",
          github_link: "https://github.com/MQumairi/ticket-system-server",
          screenshot: "/tickets.jpg",
        },
      },
      {
        title: { rendered: "Invexel" },
        acf: {
          priority: 2,
          raw_description:
            "Real estate investment platform built using Php. Mobile responsive, and with functionality to subscribe users to email lists.",
          live_link: "https://invexel.com/",
          github_link: "",
          screenshot: "/invexel.jpg",
        },
      },
      {
        title: { rendered: "Budget Buddies" },
        acf: {
          priority: 3,
          raw_description:
            "Led a team of developers in the 48in48 hackathon to develop a custom theme for the non-profit, Budget Buddies.",
          live_link: "https://budgetbuddies.org/",
          github_link: "",
          screenshot: "/budgetbuddies.jpg",
        },
      },
      {
        title: { rendered: "Haskell LinReg" },
        acf: {
          priority: 4,
          raw_description:
            "A tool for solving regression problems, using linear regression and gradient descent. Includes a file parser, and feature scaling.",
          live_link: "",
          github_link: "https://github.com/MQumairi/Haskell-LinReg",
          screenshot: "/linreg.jpg",
        },
      },
      {
        title: { rendered: "Numpy NN" },
        acf: {
          priority: 5,
          raw_description:
            "Using just the Numpy library, developed a fully functioning neural network, able to classify the MNIST dataset with 91% accuracy.",
          live_link: "",
          github_link: "https://github.com/MQumairi/numpy-neural-network",
          screenshot: "/numpynn.jpg",
        },
      },
    ];
  }
  //A function that takes a priority, and returns a Project
  const getProject = (priortiy: number) => {
    const foundProject = projects.find(
      (project) => project["acf"]["priority"] == priortiy
    );

    return foundProject;
  };

  //States
  const [activeProject, setActiveProject] = useState(getProject(1));

  //change slide
  const changeSlide = (decrement: boolean) => {
    if (!activeProject) {
      return;
    }

    let currentPriority = activeProject["acf"]["priority"];

    if (currentPriority < projects.length && !decrement) {
      setActiveProject(getProject(parseInt(currentPriority) + 1));
    }

    if (currentPriority > 1 && decrement) {
      setActiveProject(getProject(parseInt(currentPriority) - 1));
    }
  };

  return (
    <div>
      <ProjectSlide project={activeProject} />

      <ul className={"pagination " + styles.paginationBar}>
        {/* <li className="page-item">
          <a
            className={styles.pageLink}
            onClick={() => changeSlide(true)}
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li> */}
        {projects.map((project: any, i: number) => {
          let activeStlye = "";

          if (activeProject["acf"]["priority"] == i + 1) {
            activeStlye = styles.activeItem;
          }

          return (
            <li key={i} className={activeStlye}>
              <a
                className={styles.pageLink}
                onClick={() => setActiveProject(getProject(i + 1))}
              >
                {i + 1}
              </a>
            </li>
          );
        })}

        {/* <li className="page-item">
          <a
            className={styles.pageLink}
            onClick={() => changeSlide(false)}
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default ProjectSlider;
