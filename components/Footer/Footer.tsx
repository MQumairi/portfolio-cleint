import styles from "./footer.module.css";

const Footer = () => {
  const clipStyle = {
    clipPath: "url(#waveF)",
  };

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContainerContent}>
        <p>Copyright © 2020 Mohammed Alqumairi.</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
