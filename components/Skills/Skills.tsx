import styles from "./skills.module.css";
import SkillsDesc from "./SkillsDesc/SkillsDesc";
import Tech from "./Tech/Tech";

interface IProps {
  skill: any;
  tech: any;
}

const Skills: React.FC<IProps> = ({ skill, tech }) => {
  const clipStyle = {
    clipPath: "url(#wave)",
  };

  return (
    <div id={styles.skillsWave}>
      <div className={styles.skillsContainerContent}>
        <div className="row">
          <div className="col-md">
            <SkillsDesc skills={skill} />
          </div>
          <div className="col-md">
            <Tech tech={tech} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
