import styles from "./skillsDesc.module.css";

const SkillsDesc = ({ skills }) => {
  let title = "Skills";
  let content =
    "Experience in full-stack web development, native app development, Machine Learning, and UML modeling.";

  if (skills[0] != undefined) {
    title = skills[0]["title"]["rendered"];
    content = skills[0]["acf"]["raw_description"];
  }

  return (
    <div className={styles.skillsContainer}>
      <h1 className="subHeading">{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default SkillsDesc;
