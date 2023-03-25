import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React from "react";
import styles from "../../../styles/Work.module.css";
import getProjects from "../../../utils/getProjects";
import Arrow from "../../../assets/icons/Arrow.svg";

interface Props {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function Work(props: Props) {
  const { onMouseEnter, onMouseLeave } = props;
  const projects = getProjects();

  const projectRefs = React.useRef<HTMLDivElement[]>([]);

  const contentOverlayInnerRef = React.useRef<HTMLDivElement>(null);

  const [currentView, setCurentView] = React.useState(0);
  const detailProjectRef = React.useRef<HTMLDivElement>(null);
  const detailProjectWrapperRef = React.useRef<HTMLDivElement>(null);

  const [isAnimating, setIsAnimating] = React.useState(false);

  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    gsap.set(contentOverlayInnerRef.current, {
      xPercent: -100,
    });
  }, []);

  const viewProject = (index: number) => {
    setIsAnimating(true);
    console.log("lick");
    setCurentView(index);
    const contentOverlayInner = contentOverlayInnerRef.current;
    const projectItem = detailProjectRef.current;

    console.log(projectItem);
    console.log(projectItem?.children);

    if (!projectItem?.children) return;

    const projectImageWrapper = projectItem.children[4];
    const projectImage = projectImageWrapper.children[0].children[1];
    const projectImageOverlay = projectImageWrapper.children[0].children[0];

    console.log(projectImage, "keke", projectImageOverlay);
    const slideTexts = [projectItem.children[1], projectItem.children[3]];
    const projectDescription = projectItem.children[0];
    const projectArrowBack = projectItem.children[2];

    gsap
      .timeline({
        defaults: {
          duration: 1.1,
          ease: "expo",
        },
        onStart: () => {
          gsap.set(detailProjectWrapperRef.current, { pointerEvents: "auto" });
          gsap.set(projectImage, { xPercent: 100 });
          gsap.set(projectImageWrapper, { xPercent: -102, opacity: 0 });
          gsap.set(slideTexts, { yPercent: 100 });
          gsap.set(projectDescription, { yPercent: 15, opacity: 0 });
          gsap.set(projectArrowBack, { x: "+=15%", opacity: 0 });
        },
        onComplete: () => setIsAnimating(false),
      })
      .addLabel("start", 0)
      .addLabel("preview", "start+=0.3")
      .to(projectItem, { opacity: 1 })
      .to(
        contentOverlayInner,
        {
          ease: "power2",
          startAt: { xPercent: -175 },
          xPercent: 0,
        },
        "start"
      )
      .to(
        [projectImage, projectImageWrapper, projectImageOverlay],
        {
          xPercent: 0,
        },
        "preview"
      )
      .to(
        projectImageWrapper,
        {
          opacity: 1,
        },
        "preview"
      )
      .to(
        slideTexts,
        {
          opacity: 1,
          yPercent: 0,
          stagger: 0.05,
        },
        "preview"
      )
      .to(
        projectDescription,
        {
          ease: "power2",
          opacity: 1,
          stagger: 0.05,
        },
        "preview"
      )
      .to(
        projectDescription,
        {
          yPercent: 0,
          stagger: 0.05,
        },
        "preview"
      )
      .to(
        projectArrowBack,
        {
          ease: "power2",
          opacity: 1,
          x: "-=15%",
        },
        "preview"
      );
  };

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

  const goBack = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const contentOverlayInner = contentOverlayInnerRef.current;
    const projectItem = detailProjectRef.current;

    console.log(projectItem);
    console.log(projectItem?.children);

    if (!projectItem?.children) return;

    const projectImageWrapper = projectItem.children[4];
    const projectImage = projectImageWrapper.children[0].children[1];
    const projectImageOverlay = projectImageWrapper.children[0].children[0];
    const slideTexts = [projectItem.children[1], projectItem.children[3]];
    const projectDescription = projectItem.children[0];
    const projectArrowBack = projectItem.children[2];

    gsap
      .timeline({
        defaults: {
          duration: 1,
          ease: "power4",
        },
        onComplete: () => {
          gsap.set(detailProjectWrapperRef.current, { pointerEvents: "none" });

          setIsAnimating(false);
        },
      })
      .addLabel("start", 0)
      .to(
        projectArrowBack,
        {
          ease: "power2",
          opacity: 0,
        },
        "start"
      )
      .to(
        projectDescription,
        {
          ease: "power2",
          opacity: 0,
        },
        "start"
      )
      .to(
        projectDescription,
        {
          yPercent: 15,
        },
        "start"
      )
      .to(
        slideTexts,
        {
          yPercent: 100,
          opacity: 0,
        },
        "start"
      )
      .to(
        [projectImage, projectImageOverlay],
        {
          xPercent: -100,
        },
        "start"
      )
      .to(
        projectImageWrapper,
        {
          xPercent: 100,
          opacity: 1,
        },
        "start"
      )
      .to(
        contentOverlayInner,
        {
          ease: "power4",
          xPercent: 150,
          duration: 2,
        },
        "start"
      )
      .to(projectItem, { opacity: 0 });
  };
  return (
    <div className={styles.container}>
      <section className={styles.headingText}>
        <h3>Subtitle</h3>
        <h1>Projects</h1>
      </section>

      <div className={styles.contentOverlay} ref={contentOverlayInnerRef}>
        <div className={styles.contentOverlayInner} />
      </div>

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
                viewProject(index);
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

      <section
        className={styles.projectsInnerDisplay}
        ref={detailProjectWrapperRef}
      >
        <div className={styles.detailedContentDetail} ref={detailProjectRef}>
          <div className={styles.projectTitleDetail}>
            <h3>{projects[currentView].title}</h3>
            <p className={styles.projectLinkDetail}>
              <a
                className={styles.projectLink}
                href={projects[currentView].github}
              >
                Github
              </a>
              <a
                className={styles.projectLink}
                href={projects[currentView].liveDemo}
              >
                Live site
              </a>
            </p>
          </div>
          <div className={styles.projectDescriptionDetail}>
            <h3>Description</h3>
            <p>{projects[currentView].description}</p>
          </div>
          <div
            className={styles.arrowBackDetail}
            onClick={goBack}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Arrow />
          </div>
          <div className={styles.projectTechnologyDetail}>
            <h3>Technology used</h3>
            <p>{projects[currentView].techUsed}</p>
          </div>

          <div className={styles.projectImageWrapperOuterDetail}>
            <div className={styles.projectImageWrapperDetail}>
              <div className={styles.imageOverlayDetail} />
              <div
                className={styles.projectImageDetail}
                style={{
                  backgroundImage: `url(${projects[currentView].image})`,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work;
