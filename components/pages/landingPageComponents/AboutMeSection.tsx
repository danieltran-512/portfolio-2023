import styles from "../../../styles/AboutMeSection.module.css";
import ParallaxImage from "../../Parallax/HorizontalParallaxContainer";
import SkewedParallax from "../../Parallax/SkewedParallax";
import Image from "next/image";
import JigglyBodyText from "../../Parallax/JigglyBodyText";

function AboutMe() {
  const src = "https://i.imgur.com/5FxAQVU.jpeg";
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <SkewedParallax baseVelocity={5}>
          <h1>About me</h1>
        </SkewedParallax>
      </div>
      <div className={styles.heading}>
        <SkewedParallax baseVelocity={-5}>
          <h1>About me</h1>
        </SkewedParallax>
      </div>

      <div className={styles.sectionContainer}>
        <div className={styles.heroImage}>
          <ParallaxImage offset={300}>
            <Image
              loader={() => src}
              src={src}
              alt="123"
              width={600}
              height={400}
            />
          </ParallaxImage>
        </div>
        <div style={{ zIndex: 10 }}>
          <JigglyBodyText>
            <h5>
              As a software developer with a Bachelor of Computer & Information
              Sciences degree from AUT University, I have a strong foundation in
              the technical skills needed to create and maintain complex
              software systems. With a minor in Digital Communication, I have an
              understanding of how to effectively communicate and collaborate
              with other professionals in the field. My keen interest in
              exploring various features of websites demonstrates my curiosity
              and willingness to learn and grow as a developer. My general
              aesthetic of minimalism and sophistication shows my attention to
              detail and ability to create user-friendly designs. Have a look
              through at my previous work to get to know more about me.
            </h5>
          </JigglyBodyText>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
