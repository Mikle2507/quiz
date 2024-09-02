import styles from "./style.module.css";

export const Pagination = ({ className = "", min = 0, max = 0 }) => {
  return (
    <div className={`${styles.element} ${className}`}>
      {min} / {max}
    </div>
  );
};
