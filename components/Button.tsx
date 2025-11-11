import { motion } from "framer-motion";
import React from "react";
import Star from "../assets/icons/Star.svg";
import Sparkle from "../assets/icons/Sparkle.svg";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

function Button(props: Props) {
  const { label, ...restProps } = props;

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      style={{ position: "relative", width: "fit-content" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        style={{ width: "fit-content", position: "absolute", right: 0 }}
        initial={false}
        animate={{ scale: isHovered ? 1.5 : 0 }}
        transition={{ type: "spring", stiffness: 1000 }}
      >
        <Star width="30px" />
      </motion.div>

      <motion.div
        style={{
          width: "fit-content",
          position: "absolute",
          left: 20,
          bottom: -10,
        }}
        initial={false}
        animate={{
          scale: isHovered ? 1.5 : 0,
        }}
        transition={{ type: "spring", stiffness: 1000 }}
      >
        <Sparkle width="20px" />
      </motion.div>
      <button {...restProps}>{label}</button>
    </div>
  );
}

export default Button;
