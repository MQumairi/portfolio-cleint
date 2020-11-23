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
    <>
      <svg viewBox="0 0 0 0" preserveAspectRatio="xMinYMin slice">
        <clipPath
          id="wave"
          clipPathUnits="objectBoundingBox"
          style={{ width: "50%" }}
        >
          <path
            x="0"
            y="0"
            width="200px"
            d="M0.99929003,0.0373517241 L0.99929003,0.999718621 L4.30513595e-05,0.999718621 L4.30513595e-05,0.00109793103 C4.30513595e-05,0.00109793103 0.191320242,0.0788041379 0.399589879,0.0954606897 C0.613833082,0.112595862 0.779063444,-0.0635517241 0.99929003,0.0373517241 Z"
          />
        </clipPath>
      </svg>

      <div className={styles.skillsContainer} style={clipStyle}>
        <div className={styles.skillsContainerContent}>
          <div className="container">
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
      </div>
    </>
  );
};

export default Skills;
