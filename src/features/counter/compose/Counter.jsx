import { ButtonCircle, IconMinus, IconPlus, Input } from "@/shared";
import styles from "./styles.module.css";
import useCounter from "../libs/hooks/useCounter";

export const Counter = ({ value = 0, setValue = null, max = null }) => {
  const counter = useCounter(value, setValue, max);

  return (
    <div className={styles.counter}>
      <ButtonCircle
        onClick={(e) => {
          e.preventDefault();
          counter.handleMinus(value);
        }}
        disabled={counter.disabledMinus}
      >
        <IconMinus className={styles.svg} />
      </ButtonCircle>
      <Input
        className={styles.input}
        value={value}
        type="text"
        onBlur={(e) => {
          e.preventDefault();
          counter.setValueBlur(e.target.value);
        }}
        onChange={(e) => {
          e.preventDefault();
          counter.setValueChange(e.target.value);
        }}
      />
      <ButtonCircle
        onClick={(e) => {
          e.preventDefault();
          counter.handlePlus(value);
        }}
        disabled={counter.disabledPlus}
      >
        <IconPlus className={styles.svg} />
      </ButtonCircle>
    </div>
  );
};
