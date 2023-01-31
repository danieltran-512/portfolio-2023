import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../../../styles/WelcomeSection.module.css";
import AnimatedHeading from "../../animation/AnimatedHeading";
import ParallaxImage from "../../Parallax/HorizontalParallaxContainer";

function WelcomeSection() {
  const welcomeText = "Welcome";
  const src =
    "https://blog.hootsuite.com/wp-content/uploads/2021/07/free-stock-photos-03-scaled.jpeg";

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: "0" }}
      transition={{ delay: 0.8, duration: 0.8, staggerChildren: 2 }}
    >
      <AnimatedHeading text={welcomeText} />
      <AnimatedHeading text={welcomeText} color="var(--white)" />
      <AnimatedHeading text={welcomeText} zIndex={2} />

      <div className={styles.heroImage}>
        <ParallaxImage offset={-50}>
          <Image
            loader={() => src}
            src={src}
            alt="123"
            width={500}
            height={300}
          />
        </ParallaxImage>
      </div>
      <motion.p
        className={styles.introText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        style={{ position: "absolute", bottom: "0" }}
      >
        Continue scrolling to get to know more about me
      </motion.p>
    </motion.div>
  );
}

export default WelcomeSection;
