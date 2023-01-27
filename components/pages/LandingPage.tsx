import React, { useEffect, useState } from "react";
import styles from "../../styles/LandingPage.module.css";
import SmoothScroll from "../animation/SmoothScroll";
import Button from "../Button";
import Cursor from "../cursor";
import AboutMe from "./landingPageComponents/AboutMeSection";
import WelcomeSection from "./landingPageComponents/WelcomeSection";

function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      border: "1px solid var(--orange)",
    },
    button: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      scale: 1.5,
      border: "2px solid var(--green)",
    },
  };

  const textEnter = () => setCursorVariant("button");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      <Cursor variants={variants} animate={cursorVariant} />
      <SmoothScroll>
        <WelcomeSection />
        <AboutMe />
        <div className={styles.container}>
          <Button
            label="Fuck you"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
          />
        </div>
      </SmoothScroll>
    </>
  );
}

export default LandingPage;
