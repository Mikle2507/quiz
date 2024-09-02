import { Button } from "@/shared";
import styles from "./styles.module.css";

export const ButtonHint = ({
  className = "",
  hint = true,
  children,
  ...props
}) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <Button className={styles.btn} {...props}>
        {children}
      </Button>
      {hint ? (
        <div className={styles.hint}>
          или нажми <b>Enter ↵</b>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
