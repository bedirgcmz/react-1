import styles from "./About.module.css";
import { getImageURL } from "../../utils/functions";

const About = ({ pageTitle }) => {
  return (
    <div className={styles.aboutContainer}>
      <h1>{pageTitle}</h1>
      <img className={styles.aboutImg} src={getImageURL("aboutImg.jpeg")} alt="About" />
      <h2>Bedir Gocmez</h2>
      <h3>Frontend Developer</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dicta doloribus veniam
        quo ab odit voluptatum suscipit aliquam omnis mollitia modi nam molestiae magnam fugit natus
        corporis, sapiente asperiores maxime.
      </p>
    </div>
  );
};

export default About;
