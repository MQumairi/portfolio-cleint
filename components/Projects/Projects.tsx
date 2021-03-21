import styles from "./projects.module.css";
import ProjectSlider from "./ProjectSlider/ProjectSlider";

const Projects = ({ projects }) => {
  const clipStyle = {
    clipPath: "url(#waveG)",
  };

  // console.log(projects.length);

  return (
    <div id={styles.projectssWave}>
      <div className={styles.projectsContainerContent}>
        <h1 className="subHeading" style={{ marginLeft: "0px" }}>
          Projects
        </h1>
        <ProjectSlider projects={projects} />
      </div>
    </div>
  );
};

export default Projects;
