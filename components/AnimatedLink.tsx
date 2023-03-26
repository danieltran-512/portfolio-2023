import { gsap } from "gsap";
import React from "react";

interface Props {
  label: string;
  href?: string;
}

function AnimatedLink(props: Props) {
  const { label, href } = props;
  const linkRef = React.useRef<HTMLAnchorElement>(null);

  React.useEffect(() => {
    const link = linkRef.current;

    if (!link?.children) return;

    const underline = link.children[1];

    link.addEventListener("mouseenter", () => {
      gsap
        .timeline({
          defaults: {
            duration: 0.6,
            ease: "expo",
          },
        })
        .addLabel("start", 0)
        .set(underline, { width: "0%" }, "start")
        .to(
          underline,
          {
            width: "100%",
          },
          "start"
        );
    });

    link.addEventListener("mouseleave", () => {
      gsap
        .timeline({
          defaults: {
            duration: 0.6,
            ease: "expo",
          },
        })
        .addLabel("start", 0)
        .set(underline, { width: "100%" }, "start")
        .to(
          underline,
          {
            width: "0%",
          },
          "start"
        );
    });
  }, []);

  return (
    <a
      href={href}
      className="link-wrapper"
      ref={linkRef}
      target="_blank"
      rel="noreferrer"
    >
      <span>{label}</span>
      <span className="underline" />
    </a>
  );
}

export default AnimatedLink;
