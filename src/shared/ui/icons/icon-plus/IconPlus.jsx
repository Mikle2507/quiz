import styles from "./styles.module.css";
export const IconPlus = ({ className = "" }) => {
  return (
    <svg
      className={`${styles.svg} ${className}`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.3846 2.38462C11.3846 1.61875 10.7659 1 10 1C9.23413 1 8.61539 1.61875 8.61539 2.38462V8.61539H2.38462C1.61875 8.61539 1 9.23413 1 10C1 10.7659 1.61875 11.3846 2.38462 11.3846H8.61539V17.6154C8.61539 18.3813 9.23413 19 10 19C10.7659 19 11.3846 18.3813 11.3846 17.6154V11.3846H17.6154C18.3813 11.3846 19 10.7659 19 10C19 9.23413 18.3813 8.61539 17.6154 8.61539H11.3846V2.38462Z" />
    </svg>
  );
};
