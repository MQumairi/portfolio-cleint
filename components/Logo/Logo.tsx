import styles from "./logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <span className={styles.logoTag}>{">"}</span>
      <span className="logoTag">mqumairi </span>
    </div>
  );
};

export default Logo;
