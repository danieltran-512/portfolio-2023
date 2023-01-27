import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
  offset: number;
}

function ParallaxImage(props: Props) {
  const { children, offset } = props;

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, offset]);
  const physics = { damping: 15, mass: 0.17, stiffness: 25 };
  const spring = useSpring(x, physics);

  return <motion.div style={{ x: spring }}>{children}</motion.div>;
}

export default ParallaxImage;
