import styles from "./projects.module.css";
import ProjectSlider from "./ProjectSlider/ProjectSlider";

const Projects = ({ projects }) => {
  const clipStyle = {
    clipPath: "url(#waveG)",
  };

  // console.log(projects.length);

  return (
    <>
      <svg viewBox="100% 100% 100% 100%" preserveAspectRatio="xMinYMin slice">
        <clipPath
          id="waveG"
          clipPathUnits="objectBoundingBox"
          style={{ width: "50%" }}
        >
          <path
            x="0"
            y="0"
            width="200px"
            d="M0,0.0765779117 C0,0.0765779117 0.24576,-0.0957223897 0.6,0.0765779117 C0.87047,0.208134779 1,0.0765779117 1,0.0765779117 L1,1 L0,1 L0,0.0765779117 Z"
          />
        </clipPath>
      </svg>

      <div className={styles.projectsContainer} style={clipStyle}>
        <div className={styles.projectsContainerContent}>
          <div className="container">
            <h1 className="subHeading">Projects</h1>
            <ProjectSlider projects={projects} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
