import declOfNum from "@/shared/libs/utils/declOfNum";

export const ResultText = ({ result }) => {
  if (result.fail == 0) {
    return `Ты ответил правильно на все вопросы. Так держать!`;
  } else if (result.success == 0) {
    return `Ты не ответил ни на один вопрос. Попробуй еще!`;
  }

  return (
    <>
      Ты ответил правильно на{" "}
      <b className="txt-clr-success">{result.success}</b>{" "}
      {declOfNum(result.success, ["вопрос", "вопроса", "вопросов"])} и сделал{" "}
      <b className="txt-clr-fail">{result.fail}</b>{" "}
      {declOfNum(result.fail, ["ошибку", "ошибки", "ошибок"])}.
    </>
  );
};
