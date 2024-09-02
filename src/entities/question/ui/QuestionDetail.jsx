import { Answer, Description } from "@/shared";
import styles from "./styles.module.css";

export const QuestionDetail = ({
  quest = {},
  correctAnswer = {},
  currentAnswer = {},
  handleChecked = null,
}) => {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        {quest.flag ? (
          <img
            className={styles.img}
            src={quest.flag}
            alt={quest.alt}
            title={quest.alt}
          />
        ) : (
          ""
        )}
        {quest.question ? <Description>{quest.question}</Description> : ""}
      </div>

      <div className={styles.body}>
        {quest.list &&
          quest.list.map((item, index) => (
            <Answer
              disabled={!correctAnswer.code ? false : true}
              key={`${item}-${quest.name}`}
              item={item}
              name={quest.name}
              index={index + 1}
              status={
                !correctAnswer.code
                  ? ""
                  : currentAnswer.name == item
                  ? correctAnswer.name == currentAnswer.name
                    ? "success"
                    : "fail"
                  : correctAnswer.name == item
                  ? "success"
                  : ""
              }
              onChange={() => {
                handleChecked({
                  name: item,
                  code: quest.name,
                });
              }}
            />
          ))}
      </div>
    </div>
  );
};
