import styles from "../../../styles/ContactSection.module.css";
import AnimatedLink from "../../AnimatedLink";
import JigglyBodyText from "../../Parallax/JigglyBodyText";
import SkewedParallax from "../../Parallax/SkewedParallax";

function ContactSection() {
  return (
    <div className={styles.container}>
      <h4 className={styles.subtitle}>Stay connected</h4>

      <SkewedParallax baseVelocity={4}>
        <h2 className={styles.title}>Keep in touch &nbsp;</h2>
      </SkewedParallax>
      <div className={styles.links}>
        <AnimatedLink
          href="https://www.linkedin.com/in/daniel-kien-tran/"
          label="LinkedIn"
        />
        <AnimatedLink href="https://github.com/danieltran-512" label="Github" />
        <AnimatedLink href="mailto:danieltran512000@gmail.com" label="Email" />
      </div>
      <p className={styles.copyRight}>Built by Daniel Tran, 2023</p>
    </div>
  );
}

export default ContactSection;
