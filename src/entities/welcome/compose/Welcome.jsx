import { Title, Description } from "@/shared";
import { mess } from "../consts/mess.js";
import rocket from "../img/rocket.png";
import styles from "./styles.module.css";

export const Welcome = ({ counter = null, button = null }) => {
  return (
    <div className={styles.block}>
      <img className={styles.img} src={rocket} alt="Ракета" />
      <div className={styles.header}>
        <Title>{mess.title}</Title>
        <Description>{mess.subtitle}</Description>
      </div>

      <div className={styles.body}>
        <Description>{mess.description}</Description>
        {counter ? counter : ""}
      </div>

      {button ? button : ""}
    </div>
  );
};
