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

  let liveStyle: any = {
    backgroundImage: "url('/livelink.png')",
  };

  if (gitLink == "") {
    gitStyle.opacity = "0.3";
    gitStyle.cursor = "default";
  }

  if (liveLink == "") {
    liveStyle.opacity = "0.3";
    liveStyle.cursor = "default";
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
            <p className={styles.slideContent}>{content}</p>
            <div className={styles.shareBar}>
              {/* If life link is not empty... */}
              {liveLink != "" && (
                <a href={liveLink} target="_blank">
                  <div className={styles.linkButton} style={liveStyle}>
                    Live
                  </div>
                </a>
              )}
              {/*If live link is empty... */}
              {liveLink == "" && (
                <div className={styles.linkButton} style={liveStyle}>
                  Live
                </div>
              )}
              {/*If git link is not empty... */}
              {gitLink != "" && (
                <a href={gitLink} target="_blank">
                  <div className={styles.linkButton} style={gitStyle}>
                    Git
                  </div>
                </a>
              )}
              {/*If git link is empty... */}
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
