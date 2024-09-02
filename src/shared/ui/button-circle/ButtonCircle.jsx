import styles from "./styles.module.css";

export const ButtonCircle = ({ className = "", children, ...props }) => {
  return (
    <button className={`${styles.btn} ${className}`} {...props}>
      {children}
    </button>
  );
};
