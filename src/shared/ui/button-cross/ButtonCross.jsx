import { IconCross } from "../icons";
import styles from "./styles.module.css";

export const ButtonCross = ({ className = "", ...props }) => {
  return (
    <button className={`${styles.btn} ${className}`} {...props}>
      <IconCross />
    </button>
  );
};
