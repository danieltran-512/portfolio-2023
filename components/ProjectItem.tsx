import React from "react";
import Arrow from "../assets/icons/Arrow.svg";
import styles from "../styles/Work.module.css";
import getProjects from "../utils/getProjects";

interface Props {
  currentView: number;
}

function ProjectItem(props: Props) {
  const { currentView } = props;
  const projects = getProjects();

  const contentOverlayInnerRef = React.useRef<HTMLDivElement>(null);
  const detailProjectRef = React.useRef<HTMLDivElement>(null);
  const detailProjectWrapperRef = React.useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = React.useState(false);

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
          <div className={styles.arrowBackDetail} onClick={goBack}>
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
