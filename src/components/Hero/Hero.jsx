import styles from "./Hero.module.css";
import { getImageUrl } from "../../util";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am khushboo shivhare</h1>
        <p className={styles.description}>
          I am full-stack developer ,With a focus on simplicity and aesthetics,
          I design and code websites that are both visually appealing and
          functional
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <br></br>
        <a href="https://pdflink.to/khushboo/" className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
