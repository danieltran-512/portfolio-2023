import { gsap } from "gsap-trial";
import ScrollTrigger from "gsap-trial/dist/ScrollTrigger";
import ScrollSmoother from "gsap-trial/dist/ScrollSmoother";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const SmoothScroll = (props: Props) => {
  const { children } = props;
  const el = React.useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  React.useLayoutEffect(() => {
    let smoother = ScrollSmoother.create({
      smooth: 1.5, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
    });
    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <div className="App" ref={el} id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
};

export default SmoothScroll;
