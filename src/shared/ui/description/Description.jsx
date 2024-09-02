import styles from "./styles.module.css";

export const Description = ({ className = "", children }) => {
  return <div className={`${styles.text} ${className}`}>{children}</div>;
};
