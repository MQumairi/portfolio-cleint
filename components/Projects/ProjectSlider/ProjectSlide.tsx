import styles from "./projectslider.module.css";
import Link from "next/link";
import "./projectslider.module.css";
import { useEffect } from "react";

const ProjectSlide = ({ project }) => {
  if (project == undefined) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    );
  }

  const title = project["title"]["rendered"];
  const content = project["acf"]["raw_description"];
  const liveLink = project["acf"]["live_link"];
  const gitLink = project["acf"]["github_link"];
  const screenshot = project["acf"]["screenshot"];

  let gitStyle: any = {
    backgroundImage: "url('/gitlink.png')",
    marginLeft: "20px",
  };

  if (gitLink == "") {
    gitStyle.opacity = "0.3";
    gitStyle.cursor = "default";
  }

  const screenStyle = {
    backgroundImage: `url('${screenshot}')`,
  };

  return (
    <div>
      <div className={styles.slideContainer}>
        <div className="row">
          <div className="col-sm">
            <h2 className="subHeading">{title}</h2>
            <p style={{ paddingRight: "50px" }} className={styles.slideContent}>
              {content}
            </p>
            <div className={styles.shareBar}>
              <a href={liveLink} target="_blank">
                <div
                  className={styles.linkButton}
                  style={{ backgroundImage: "url('/livelink.png')" }}
                >
                  Live
                </div>
              </a>
              {gitLink != "" && (
                <a href={gitLink} target="_blank">
                  <div className={styles.linkButton} style={gitStyle}>
                    Git
                  </div>
                </a>
              )}
              {gitLink == "" && (
                <div className={styles.linkButton} style={gitStyle}>
                  Git
                </div>
              )}
            </div>
          </div>
          <div className="col-sm">
            <div className={styles.projectScreenshot} style={screenStyle}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
