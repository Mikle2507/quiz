import { QuestionDetail } from "../ui/QuestionDetail";
import styles from "./styles.module.css";

export const Question = ({
  button = null,
  cross = null,
  pagination = null,
  currentQuest = {},
  correctAnswer = {},
  currentAnswer = {},
  handleChecked = null,
}) => {
  return (
    <div className={styles.block}>
      {cross ? cross : ""}
      <QuestionDetail
        handleChecked={handleChecked}
        quest={currentQuest}
        correctAnswer={correctAnswer}
        currentAnswer={currentAnswer}
      />
      <div className={styles.footer}>
        {button ? button : ""}
        {pagination ? pagination : ""}
      </div>
    </div>
  );
};
