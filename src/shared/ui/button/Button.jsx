import styles from "./styles.module.css";

export const Button = ({ className = "", children, ...props }) => {
  return (
    <button className={`${styles.btn} ${className}`} {...props}>
      {children}
    </button>
  );
};
