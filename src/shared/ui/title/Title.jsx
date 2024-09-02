import styles from "./styles.module.css";

export const Title = ({ className = "", children }) => {
  return <h2 className={`${styles.title} ${className}`}>{children}</h2>;
};
