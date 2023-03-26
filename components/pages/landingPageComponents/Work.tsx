import { gsap } from "gsap";
import React from "react";
import styles from "../../../styles/Work.module.css";
import getProjects from "../../../utils/getProjects";

interface Props {
  onMouseEnter: () => void;
  onMouseLeave: () => void;

  currentView: number;
  setCurrentView: (v: number) => void;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

function Work(props: Props) {
  const { onMouseEnter, onMouseLeave, currentView, setCurrentView, setIsOpen } =
    props;
  const projects = getProjects();

  const projectRefs = React.useRef<HTMLDivElement[]>([]);

  React.useEffect(() => {
    projectRefs.current.map((e) => {
      const title = e.children[0];
      const imgWrap = e.children[1];

      imgWrap.addEventListener("mouseenter", () => {
        gsap
          .timeline({
            defaults: {
              duration: 0.6,
              ease: "expo",
            },
          })
          .addLabel("start", 0)
          .set(title, { transformOrigin: "0% 50%" }, "start")
          .to(
            title,
            {
              startAt: { filter: "blur(0px)" },
              duration: 0.3,
              ease: "power1.in",
              yPercent: -100,
              rotation: -4,
              filter: "blur(6px)",
            },
            "start"
          )
          .to(
            title,
            {
              startAt: { yPercent: 100, rotation: 4, filter: "blur(6px)" },
              yPercent: 0,
              rotation: 0,
              filter: "blur(0px)",
            },
            "start+=0.2"
          )
          .to(
            imgWrap,
            {
              scale: 0.95,
            },
            "start"
          )
          .to(
            imgWrap.children[0],
            {
              scale: 1.2,
            },
            "start"
          );
      });

      imgWrap.addEventListener("mouseleave", () => {
        gsap
          .timeline({
            defaults: {
              duration: 0.8,
              ease: "power4",
            },
          })
          .addLabel("start", 0)
          .to(
            [imgWrap, imgWrap.children[0]],
            {
              scale: 1,
              rotation: 0,
            },
            "start"
          );
      });
    });
  }, [projectRefs]);

  return (
    <div className={styles.container}>
      <section className={styles.headingText}>
        <h3>Explore some of my best works</h3>
        <h1>Projects</h1>
      </section>

      <section className={styles.projectsDisplay}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={
              index % 2 === 0 ? styles.containerLeft : styles.containerRight
            }
            ref={(ref) => {
              if (ref) {
                projectRefs.current[index] = ref;
              }
            }}
          >
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <div
              className={styles.projectImageWrapper}
              onClick={() => {
                setCurrentView(index);
                setIsOpen(true);
              }}
            >
              <div
                className={styles.projectImage}
                style={{ backgroundImage: `url(${project.image})` }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              />
            </div>
            <p className={styles.projectSubtitle}>{project.subtitle}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Work;
