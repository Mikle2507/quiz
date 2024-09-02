import styles from "./styles.module.css";

export const Input = ({ className = "", value, ...props }) => {
  return (
    <input
      {...props}
      className={`${styles.input} ${className}`}
      value={value}
    />
  );
};
