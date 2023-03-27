import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface Props {
  text: string;
}

function AnimatedFlyInText(props: Props) {
  const { text } = props;
  const letters = text.split("");

  const letterRefs = React.useRef<HTMLSpanElement[]>([]);

  gsap.registerPlugin(ScrollTrigger);

  React.useEffect(() => {
    const letters = letterRefs.current;
    letters.map((char) => gsap.set(char.parentNode, { perspective: 1000 }));

    gsap.fromTo(
      letters,
      {
        "will-change": "opacity, transform",
        opacity: 0,
        rotateX: () => gsap.utils.random(-120, 120),
        z: () => gsap.utils.random(-200, 200),
      },
      {
        ease: "none",
        opacity: 1,
        rotateX: 0,
        z: 0,
        stagger: 0.02,
        scrollTrigger: {
          trigger: letters,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <span>
      {letters.map((letter, index) => (
        <span
          key={index}
          ref={(ref) => {
            if (ref) {
              letterRefs.current[index] = ref;
            }
          }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
}

export default AnimatedFlyInText;
