import styles from "../../../styles/ContactSection.module.css";
import AnimatedLink from "../../AnimatedLink";

function ContactSection() {
  return (
    <div className={styles.container}>
      <h4 className={styles.subtitle}>Stay connected</h4>
      <h2 className={styles.title}>Keep in touch</h2>
      <div className={styles.links}>
        <AnimatedLink href="#" label="LinkedIn" />
        <AnimatedLink href="#" label="Github" />
        <AnimatedLink href="#" label="Email" />
      </div>
      <p className={styles.copyRight}>Built by Daniel Tran, 2023</p>
    </div>
  );
}

export default ContactSection;
