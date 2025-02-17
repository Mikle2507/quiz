import styles from "./styles.module.css";
export const IconMinus = ({ className = "" }) => {
  return (
    <svg
      className={`${styles.svg} ${className}`}
      viewBox="0 0 20 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 2.38462C19 3.15048 18.3813 3.76923 17.6154 3.76923H2.38462C1.61875 3.76923 1 3.15048 1 2.38462C1 1.61875 1.61875 1 2.38462 1H17.6154C18.3813 1 19 1.61875 19 2.38462Z" />
    </svg>
  );
};
