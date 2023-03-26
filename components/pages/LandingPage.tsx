import React, { useEffect, useState } from "react";
import SmoothScroll from "../Animations/SmoothScroll";
import Cursor from "../Cursor/Cursor";
import Logo from "../Logo";
import ProjectItem from "../ProjectItem";
import AboutMe from "./landingPageComponents/AboutMeSection";
import ContactSection from "./landingPageComponents/ContactSection";
import WelcomeSection from "./landingPageComponents/WelcomeSection";
import Work from "./landingPageComponents/Work";

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
      border: "1px solid var(--lavender-haze)",
      backgroundColor: "transparent",
    },
    button: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      scale: 1.5,
      border: "2px solid var(--lavender-haze)",
      backgroundColor: "var(--lavender-haze)",
    },
  };

  const textEnter = () => setCursorVariant("button");
  const textLeave = () => setCursorVariant("default");

  const [currentView, setCurrentView] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Logo onMouseEnter={textEnter} onMouseLeave={textLeave} />
      <Cursor variants={variants} animate={cursorVariant} />
      <SmoothScroll>
        <WelcomeSection />
        <AboutMe />
        <Work
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          currentView={currentView}
          setCurrentView={setCurrentView}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <ContactSection />
      </SmoothScroll>
      {isOpen && (
        <ProjectItem
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          currentView={currentView}
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        />
      )}
    </>
  );
}

export default LandingPage;
