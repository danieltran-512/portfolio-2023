import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import React from "react";

interface Props {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function Logo(props: Props) {
  const { onMouseEnter, onMouseLeave } = props;
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const rotateVelocity = useSpring(scrollVelocity, {
    stiffness: 40,
    damping: 30,
  });

  const rotateVelocityFactor = useTransform(
    rotateVelocity,
    [-2000, 2000],
    [-500, 500]
  );
  return (
    <motion.div
      className="logo-container"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{ delay: 0.8, duration: 0.8 }}
    >
      <motion.svg
        className="logo"
        style={{ rotate: rotateVelocityFactor, cursor: "default" }}
        viewBox="0 0 100 100"
        width="100"
        height="100"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <defs>
          <path
            id="circle"
            d="
                M 50, 50
                m -37, 0
                a 37,37 0 1,1 74,0
                a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text font-size="14">
          <textPath fill="var(--lavender-haze)" xlinkHref="#circle">
            daniel tran
          </textPath>
        </text>
      </motion.svg>
    </motion.div>
  );
}

export default Logo;
