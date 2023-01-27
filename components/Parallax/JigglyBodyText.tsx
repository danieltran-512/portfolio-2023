import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

interface ParallaxProps {
  children: any;
}

function JigglyBodyText({ children }: ParallaxProps) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const skewVelocity = useSpring(scrollVelocity, {
    stiffness: 40,
    damping: 30,
  });

  const skewVelocityFactor = useTransform(
    skewVelocity,
    [-2000, 2000],
    [-10, 10]
  );

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div>
      <motion.div style={{ skew: skewVelocityFactor }}>{children}</motion.div>
    </div>
  );
}

export default JigglyBodyText;
