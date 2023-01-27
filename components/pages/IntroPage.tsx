import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "../../styles/IntroPage.module.css";

interface Props {
  setEnterSite: (enterSite: boolean) => void;
}

function IntroPage(props: Props) {
  const { setEnterSite } = props;
  const enterCtrl = useRef<HTMLButtonElement>(null);
  const enterBackground = useRef<HTMLInputElement>(null);
  const enterText = useRef<HTMLTextAreaElement>(null);

  const circleText1 = useRef<SVGTextElement>(null);
  const circleText2 = useRef<SVGTextElement>(null);
  const circleText3 = useRef<SVGTextElement>(null);
  const circleText4 = useRef<SVGTextElement>(null);

  const circleTextLength = 4;

  useLayoutEffect(() => {
    console.log("hi", circleText1.current);

    const circleText = [
      circleText1.current,
      circleText2.current,
      circleText3.current,
      circleText4.current,
    ];

    const circleTexts2 = [
      circleText1.current,
      circleText2.current,
      circleText3.current,
    ];
    // need to set the transform origin in the center
    gsap.set(circleText, { transformOrigin: "50% 50%" });

    gsap.set([circleText, enterCtrl.current], { opacity: 0 });

    // don't allow to hover
    gsap.set(enterCtrl.current, {
      pointerEvents: "none",
    });

    // click and hover events for the "enter" button:
    const enterMouseEnterEv = () => {
      gsap.killTweensOf([enterBackground.current, circleText]);

      gsap.to(enterBackground.current, {
        duration: 0.8,
        ease: "power4",
        scale: 1.2,
        opacity: 1,
      });

      gsap.to(circleTexts2, {
        duration: 4,
        ease: "power4",
        rotate: "+=180",
        stagger: {
          amount: -0.3,
        },
      });
    };

    const enterMouseLeaveEv = () => {
      //gsap.killTweensOf(DOM.enterBackground);
      gsap.to(enterBackground.current, {
        duration: 0.8,
        ease: "power4",
        scale: 1,
      });
    };

    if (enterCtrl.current) {
      enterCtrl.current.addEventListener("mouseenter", enterMouseEnterEv);
      enterCtrl.current.addEventListener("mouseleave", enterMouseLeaveEv);
    }

    gsap
      .timeline()
      .addLabel("start", 0)
      // scale in the texts & enter button and fade them in
      .to(
        [circleText, enterCtrl.current],
        {
          duration: 2.5,
          ease: "expo",
          startAt: { opacity: 0, scale: 0.3 },
          scale: 1,
          opacity: 1,
          stagger: {
            amount: 0.5,
          },
        },
        "start"
      )
      // at start+1 allow the hover over the enter ctrl
      .add(gsap.set(enterCtrl.current, { pointerEvents: "auto" }), "start+=1");
  });

  const handleEnter = () => {
    const circleText = [
      circleText1.current,
      circleText2.current,
      circleText3.current,
    ];

    gsap.set(enterCtrl.current, { pointerEvents: "none" });

    // start the animation
    gsap
      .timeline()
      .addLabel("start", 0)
      .to(enterText.current, {
        duration: 0.5,
        opacity: 0,
      })
      .to(
        enterCtrl.current,
        {
          duration: 1.5,
          ease: "expo.inOut",
          scale: 100,
          opacity: 0,
        },
        "start"
      )
      .to(
        circleText,
        {
          duration: 1.5,
          ease: "expo.inOut",
          scale: (i) => 1.5 + (circleTextLength - i) * 0.3,
          opacity: 0,
          stagger: {
            amount: 0.2,
          },
        },
        "start"
      )
      .to(
        circleText4.current,
        {
          duration: 1.5,
          ease: "expo.inOut",
          opacity: 0,
        },
        "start"
      );

    // after the animation is done, set the state to true
    setTimeout(() => {
      setEnterSite(true);
    }, 1500);
  };

  return (
    <>
      <svg
        className={styles.circles}
        width="100%"
        height="100%"
        viewBox="0 0 1400 1400"
      >
        <dfn>
          <path
            id="circle-1"
            d="M250,700.5A450.5,450.5 0 1 11151,700.5A450.5,450.5 0 1 1250,700.5"
          />
          <path
            id="circle-2"
            d="M382,700.5A318.5,318.5 0 1 11019,700.5A318.5,318.5 0 1 1382,700.5"
          />
          <path
            id="circle-3"
            d="M487,700.5A213.5,213.5 0 1 1914,700.5A213.5,213.5 0 1 1487,700.5"
          />
          <path
            id="circle-4"
            d="M567.5,700.5A133,133 0 1 1833.5,700.5A133,133 0 1 1567.5,700.5"
          />
        </dfn>
        <text
          className={`${styles.circlesText} ${styles.circlesText1}`}
          ref={circleText1}
        >
          <textPath
            className="circles__text-path"
            xlinkHref="#circle-1"
            aria-label=""
            textLength="2830"
          >
            Graduate Software Developer
          </textPath>
        </text>
        <text
          className={`${styles.circlesText} ${styles.circlesText2}`}
          ref={circleText2}
        >
          <textPath
            className="circles__text-path"
            xlinkHref="#circle-2"
            aria-label=""
            textLength="2001"
          >
            Daniel Tran Portfolio
          </textPath>
        </text>
        <text
          className={`${styles.circlesText} ${styles.circlesText3}`}
          ref={circleText3}
        >
          <textPath
            className="circles__text-path"
            xlinkHref="#circle-3"
            aria-label=""
            textLength="1341"
          >
            Front End Developer
          </textPath>
        </text>
        <text
          className={`${styles.circlesText} ${styles.circlesText4}`}
          ref={circleText4}
        >
          <textPath
            className="circles__text-path"
            xlinkHref="#circle-4"
            aria-label=""
            textLength="1023"
          >
            Daniel Tran Portfolio
          </textPath>
        </text>
      </svg>
      <button className={styles.enter} ref={enterCtrl} onClick={handleEnter}>
        <div className={styles.enterBg} ref={enterBackground}></div>
        <span className={styles.enterText} ref={enterText}>
          enter
        </span>
      </button>
    </>
  );
}

export default IntroPage;
