import styles from "./projects.module.css";

const Projects = () => {
  const clipStyle = {
    clipPath: "url(#waveG)",
  };

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
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
            corporis fuga eaque, veritatis magnam dolor ratione repellendus
            aliquid, sed quis eligendi deserunt, in quo. Dolores labore ullam
            aliquid facere minus!
          </p>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
            corporis fuga eaque, veritatis magnam dolor ratione repellendus
            aliquid, sed quis eligendi deserunt, in quo. Dolores labore ullam
            aliquid facere minus!
          </p>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
            corporis fuga eaque, veritatis magnam dolor ratione repellendus
            aliquid, sed quis eligendi deserunt, in quo. Dolores labore ullam
            aliquid facere minus!
          </p>
        </div>
      </div>
    </>
  );
};

export default Projects;
