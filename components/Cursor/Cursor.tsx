import styles from "../../styles/Cursor.module.css";
import { motion } from "framer-motion";

interface Props {
  variants: {
    default: {
      x: number;
      y: number;
    };
  };
  animate: string;
}

function Cursor(props: Props) {
  const { variants, animate } = props;

  return (
    <motion.div
      className={styles.cursor}
      variants={variants}
      animate={animate}
    />
  );
}

export default Cursor;
