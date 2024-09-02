import { ButtonCross, Pagination, ButtonHint } from "@/shared";
import { Question, Result, Welcome } from "@/entities";
import { Counter } from "@/features";
import useQuiz from "../libs/hooks/useQuiz";
import { mess } from "../consts/mess";
import styles from "./styles.module.css";
import { pages } from "../consts/pages";
import { ResultText } from "../ui/result-text/ResultText";

export const Quiz = () => {
  const quiz = useQuiz();
  return (
    <>
      {quiz.page == pages["results"] ? (
        <Result
          text={<ResultText result={quiz.result} />}
          button={
            <ButtonHint
              className={styles.btn}
              onClick={(e) => {
                e.preventDefault();
                quiz.setPage("");
              }}
            >
              {mess.btnRestart}
            </ButtonHint>
          }
        />
      ) : quiz.page == pages["questions"] ? (
        <Question
          currentQuest={quiz.currentQuest}
          correctAnswer={quiz.currentCorrectAnswer}
          currentAnswer={quiz.currentAnswer}
          handleChecked={(data) => {
            quiz.setBtnActive(true);
            quiz.setCurrentAnswer(data);
          }}
          button={
            <ButtonHint
              className={styles.btn}
              disabled={!quiz.btnActive}
              onClick={(e) => {
                e.preventDefault();
                quiz.submitStep();
              }}
            >
              {quiz.accessNext
                ? quiz.currentStep === quiz.count
                  ? mess.btnResult
                  : mess.btnNext
                : mess.btnAnswer}
            </ButtonHint>
          }
          cross={
            <ButtonCross
              onClick={(e) => {
                e.preventDefault();
                quiz.setPage("");
              }}
            />
          }
          pagination={<Pagination min={quiz.currentStep} max={quiz.count} />}
        />
      ) : (
        <Welcome
          button={
            <ButtonHint
              className={styles.btn}
              disabled={!quiz.btnActive}
              onClick={(e) => {
                e.preventDefault();
                quiz.setPage(pages["questions"]);
              }}
            >
              {mess.btnStart}
            </ButtonHint>
          }
          counter={
            <Counter
              value={quiz.count}
              setValue={quiz.setCount}
              max={quiz.max}
            />
          }
        />
      )}
    </>
  );
};
