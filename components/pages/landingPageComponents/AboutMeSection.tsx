import styles from "../../../styles/AboutMeSection.module.css";
import ParallaxImage from "../../Parallax/HorizontalParallaxContainer";
import SkewedParallax from "../../Parallax/SkewedParallax";
import Image from "next/image";
import JigglyBodyText from "../../Parallax/JigglyBodyText";

function AboutMe() {
  const src =
    "https://blog.hootsuite.com/wp-content/uploads/2021/07/free-stock-photos-03-scaled.jpeg";
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
              width={500}
              height={300}
            />
          </ParallaxImage>
        </div>

        <JigglyBodyText>
          <p style={{ zIndex: 5 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </JigglyBodyText>
      </div>
    </div>
  );
}

export default AboutMe;
