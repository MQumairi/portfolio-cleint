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
    gitStyle.opacity = "0.5";
  }

  return (
    <div>
      <div className={styles.slideContainer}>
        <div className="row">
          <div className="col-sm">
            <h2 className="subHeading">{title}</h2>
            <p className={styles.slideContent}>{content}</p>
            <div className={styles.shareBar}>
              <Link href={liveLink}>
                <div
                  className={styles.linkButton}
                  style={{ backgroundImage: "url('/livelink.png')" }}
                >
                  Live
                </div>
              </Link>
              {gitLink != "" && (
                <Link href={gitLink}>
                  <div className={styles.linkButton} style={gitStyle}>
                    Git
                  </div>
                </Link>
              )}
              {gitLink == "" && (
                <div className={styles.linkButton} style={gitStyle}>
                  Git
                </div>
              )}
            </div>
          </div>
          <div className="col-sm">
            <div className="projectScreenshot">{screenshot}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
