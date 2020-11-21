import styles from "./skillsDesc.module.css";

const SkillsDesc = ({ skills }) => {
  const title = skills[0]["title"]["rendered"];
  const content = skills[0]["acf"]["raw_description"];
  return (
    <div className={styles.skillsContainer}>
      <h1 className="subHeading">{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default SkillsDesc;
