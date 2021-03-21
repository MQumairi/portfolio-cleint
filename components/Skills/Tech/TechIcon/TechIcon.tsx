import styles from "./techIcon.module.css";

interface IProps {
  name: string;
  image: string;
}

const TechIcon: React.FC<IProps> = ({ name, image }) => {
  return (
    <div className={styles.techIconBox}>
      <div className="row">
        <div className="col-4">
          <div
            className={styles.techIconImage}
            style={{ backgroundImage: `url('${image}')` }}
          />
        </div>
        <div className="col-8">
          <div className={styles.techIconText}>{name}</div>
        </div>
      </div>
    </div>
  );
};

export default TechIcon;
