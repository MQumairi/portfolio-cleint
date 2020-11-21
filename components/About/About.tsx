import styles from "./about.module.css";
import Link from "next/link";

const About = ({ data }) => {
  const title = data[0]["title"]["rendered"];
  const content = data[0]["acf"]["raw_description"];

  return (
    <>
      <div id={styles.about}>
        <h1 className={styles.aboutTitle}>{title}</h1>
        <p>{content}</p>
        <Link href="mailto:moh.alqumairi@gmail.com">
          <div className={styles.aboutButton}>Contact</div>
        </Link>
      </div>
    </>
  );
};

export default About;
