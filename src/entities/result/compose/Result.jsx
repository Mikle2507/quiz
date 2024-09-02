import { Description, Title } from "@/shared";
import styles from "./styles.module.css";
import tourist from "../img/tourist.png";
import { mess } from "../consts/mess.js";

export const Result = ({ button = null, text = null }) => {
  return (
    <div className={styles.block}>
      <div className={styles.header}>
        <img src={tourist} alt="Турист" />
      </div>

      <div className={styles.body}>
        <Title>{mess.title}</Title>
        <Description>{text}</Description>
      </div>
      <div className={styles.footer}>{button ? button : ""}</div>
    </div>
  );
};
