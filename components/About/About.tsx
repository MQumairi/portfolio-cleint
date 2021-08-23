import styles from "./about.module.css";
import Link from "next/link";

const About = ({ data }) => {
  let title = "Mohammed Alqumairi";
  let content = "BSc Computer Science, software engineer, based in London";

  if (data[0] != undefined) {
    title = data[0]["title"]["rendered"];
    content = data[0]["acf"]["raw_description"];
  }

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
