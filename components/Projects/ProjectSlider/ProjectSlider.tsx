import React, { useState } from "react";
import ProjectSlide from "./ProjectSlide";
import styles from "./projectslider.module.css";
import "./projectslider.module.css";

const ProjectSlider = ({ projects }) => {
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

      <ul className="pagination" style={{ marginLeft: "20px" }}>
        <li className="page-item">
          <a
            className={styles.pageLink}
            onClick={() => changeSlide(true)}
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li>
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

        <li className="page-item">
          <a
            className={styles.pageLink}
            onClick={() => changeSlide(false)}
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProjectSlider;
