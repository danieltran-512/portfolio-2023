import { motion } from "framer-motion";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
  zIndex?: number;
  color?: string;
}

function AnimatedHeading(props: Props) {
  const { text, zIndex, color } = props;

  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        delayChildren: 1.2 + i * 0.1,
        staggerChildren: 0.1,
      },
    }),
  };

  const child = {
    hidden: {
      rotate: 90,
      y: 100,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    visible: {
      rotate: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.8, duration: 0.8, staggerChildren: 1 }}
      style={{
        margin: "0",
        paddingTop: "20px",
        textAlign: "center",
        display: "flex",
        overflow: "hidden",
        zIndex: zIndex,
        color: color,
      }}
    >
      {letters.map((letter, index) => {
        return (
          <motion.span key={index} variants={child}>
            {letter}
          </motion.span>
        );
      })}
    </motion.h1>
  );
}

export default AnimatedHeading;
