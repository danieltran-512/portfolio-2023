import { useEffect, useLayoutEffect, useRef, useState } from "react";
import IntroPage from "../components/pages/IntroPage";
import LandingPage from "../components/pages/LandingPage";
import { gsap } from "gsap";

export default function Home() {
  const firstUpdate = useRef(true);
  const [enterSite, setEnterSite] = useState<boolean>(false);

  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const overlayPath = useRef(null);

  useEffect(() => {
    if (enterSite === true) {
      setIsAnimating(true);
    }
  }, []);

  useLayoutEffect(() => {
    if (isAnimating) return;
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      gsap
        .timeline({
          onComplete: () => setIsAnimating(false),
        })
        .set(overlayPath.current, {
          attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
        })
        .to(
          overlayPath.current,
          {
            duration: 0.8,
            ease: "power4.in",
            attr: { d: "M 0 100 V 50 Q 50 0 100 50 V 100 z" },
          },
          0
        )
        .to(overlayPath.current, {
          duration: 0.3,
          ease: "power2",
          attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
        })
        .set(overlayPath.current, {
          attr: { d: "M 0 0 V 100 Q 50 100 100 100 V 0 z" },
        })
        .to(overlayPath.current, {
          duration: 0.3,
          ease: "power2.in",
          attr: { d: "M 0 0 V 50 Q 50 0 100 50 V 0 z" },
        })
        .to(overlayPath.current, {
          duration: 0.8,
          ease: "power4",
          attr: { d: "M 0 0 V 0 Q 50 0 100 0 V 0 z" },
        });
    }
  });

  return (
    <>
      <svg
        className="overlay"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          fill="var(--black)"
          className="overlay__path"
          ref={overlayPath}
          vectorEffect="non-scaling-stroke"
          d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
        />
      </svg>
      {!enterSite && <IntroPage setEnterSite={setEnterSite} />}
      {enterSite && <LandingPage />}
    </>
  );
}
