import { useEffect, useLayoutEffect, useRef, useState } from "react";
import IntroPage from "../components/pages/IntroPage";
import LandingPage from "../components/pages/LandingPage";
import { gsap } from "gsap";
import Head from "next/head";

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
      <Head>
        <title>daniel tran</title>
        <meta property="og:title" content="daniel tran" key="title" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <svg
        className="overlay"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          fill="var(--lavender-haze)"
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
