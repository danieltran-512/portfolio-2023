import React from "react";
import Arrow from "../assets/icons/Arrow.svg";
import styles from "../styles/Work.module.css";
import getProjects from "../utils/getProjects";
import { gsap } from "gsap";
import AnimatedLink from "./AnimatedLink";

interface Props {
  currentView: number;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;

  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function ProjectItem(props: Props) {
  const { currentView, isOpen, setIsOpen, onMouseEnter, onMouseLeave } = props;
  const projects = getProjects();

  const contentOverlayInnerRef = React.useRef<HTMLDivElement>(null);
  const detailProjectRef = React.useRef<HTMLDivElement>(null);
  const detailProjectWrapperRef = React.useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => {
    gsap.set(contentOverlayInnerRef.current, {
      xPercent: -100,
    });
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      console.log("lick");
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
            gsap.set(detailProjectWrapperRef.current, {
              pointerEvents: "auto",
            });
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
    }
  }, [isOpen]);

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
          setIsOpen(false);
          setIsAnimating(false);
        },
      })
      .addLabel("start", 0)
      .to(detailProjectWrapperRef.current, { pointerEvents: "none" })
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
        },
        "start"
      )
      .to(projectItem, { opacity: 0 });
  };

  return (
    <div>
      <div className={styles.contentOverlay} ref={contentOverlayInnerRef}>
        <div className={styles.contentOverlayInner} />
      </div>
      <section
        className={styles.projectsInnerDisplay}
        ref={detailProjectWrapperRef}
      >
        <div className={styles.detailedContentDetail} ref={detailProjectRef}>
          <div className={styles.projectTitleDetail}>
            <h3>{projects[currentView].title}</h3>
            <p className={styles.projectLinkDetail}>
              <div className={styles.projectLink}>
                <AnimatedLink
                  href={projects[currentView].github}
                  label="Github"
                />
              </div>
              <div className={styles.projectLink}>
                <AnimatedLink
                  href={projects[currentView].liveDemo}
                  label="Live Site"
                />
              </div>
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

export default ProjectItem;
