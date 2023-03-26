import styles from "../../../styles/ContactSection.module.css";

function ContactSection() {
  return (
    <div className={styles.container}>
      <h4 className={styles.subtitle}>Stay connected</h4>
      <h2 className={styles.title}>Keep in touch</h2>
      <div className={styles.links}>
        <a>LinkedIn</a>
        <a>Github</a>
        <a>Email</a>
      </div>
      <p className={styles.copyRight}>Built by Daniel Tran, 2023</p>
    </div>
  );
}

export default ContactSection;
