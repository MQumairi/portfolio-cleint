import styles from "./footer.module.css";

const Footer = () => {
  const clipStyle = {
    clipPath: "url(#waveF)",
  };

  return (
    <>
      <svg viewBox="100% 100% 100% 100%" preserveAspectRatio="xMinYMin slice">
        <clipPath
          id="waveF"
          clipPathUnits="objectBoundingBox"
          style={{ width: "50%" }}
        >
          <path
            x="0"
            y="0"
            width="200px"
            d="M0,1 L0,0 C0,0 0.06215,0.66517 0.43003,0.18209 C0.68044,-0.14674 0.94167,0.0873 1,0.22802 L1,1 L0,1 Z"
          />
        </clipPath>
      </svg>

      <div className={styles.footerContainer} style={clipStyle}>
        <div className={styles.footerContainerContent}>
          <p>Copyright © 2020 Mohammed Alqumairi.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
