import { IconCross, IconSuccess } from "../icons";
import styles from "./styles.module.css";

export const Answer = ({
  item,
  status = "",
  name,
  disabled = false,
  index,
  onChange = () => {},
}) => {
  return (
    <label
      className={`${styles.label} ${styles[status] ? styles[status] : ""} ${
        disabled ? styles["label-disabled"] : ""
      }`}
    >
      <input
        disabled={disabled}
        className={styles.input}
        name={name}
        type="radio"
        onChange={onChange}
      />
      <span className={styles.text}>
        <span>{index}</span>
        {item}

        {status === "success" ? (
          <span className={styles.circle}>
            <IconSuccess className={styles.svg} />
          </span>
        ) : status === "fail" ? (
          <span className={styles.circle}>
            <IconCross className={styles.svg} />
          </span>
        ) : (
          ""
        )}
      </span>
    </label>
  );
};
