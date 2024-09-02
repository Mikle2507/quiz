import {
  useEffect,
  useState
} from "react";
import data from "../../model/data.json";
import {parseQuiz} from "../utils/parseQuiz.js";
import {
  useEnterHandler
} from "@/shared/libs/hooks/useEnterHandler.js";
import {
  checkCounter
} from "../utils/checkCounter.js";
import {
  pages
} from "../../consts/pages.js";
import getCorrectAnwers from "../utils/getCorrectAnwers.js";

const initialResult = {
  success: 0,
  fail: 0
};


const useQuiz = () => {

  const [count, setCount] = useState(1);
  const [page, setPage] = useState("");
  const [questions, setQuestions] = useState([]);
  const [questionsCorrect, setQuestionsCorrect] = useState([]);
  const [questionsAnswers, setQuestionsAnswers] = useState([]);
  const [currentQuest, setCurrentQuest] = useState({});
  const [currentAnswer, setCurrentAnswer] = useState({});
  const [currentCorrectAnswer, setCurrentCorrectAnswer] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const [btnActive, setBtnActive] = useState(false);
  const [result, setResult] = useState(initialResult);
  const [accessNext, setAccessNext] = useState(false);
  const max = data.questions.length;

  const submitStep = () => {

    if (accessNext) {
      setCurrentStep(currentStep + 1);
      setAccessNext(false);
      setCurrentCorrectAnswer({});
      setBtnActive(false);
    } else {
      setQuestionsAnswers([...questionsAnswers, currentAnswer]);
      setCurrentCorrectAnswer(questionsCorrect.find(x => x.code === currentAnswer.code));
      setAccessNext(true);
    }

  }


  useEnterHandler(() => {
    switch (page) {
      case (pages.questions):
        if (btnActive) {
          submitStep();
        }

        break;

      case (pages.results):
        setPage(pages.welcome);
        break;

      default:
        if (btnActive) {
          setPage(pages.questions);
        }
        break;
    }
  });

  const resetFull = () => {
    setQuestions([]);
    setCurrentQuest({});
    setCurrentStep(1);
    setCount(1);
    setBtnActive(false);
    setResult(initialResult);
    setQuestionsAnswers([]);
    setQuestionsCorrect([]);

  }


  useEffect(() => {

    if (page === pages.questions) {

      if (currentStep > count) {

        setPage("results");
        setCurrentStep(1);

        let accum = 0;
        questionsAnswers.map(item => {
          questionsCorrect.map(item2 => {
            if (item.code == item2.code && item.name == item2.name) {
              accum++;
            }
          })
        });

        setResult({
          success: accum,
          fail: count - accum
        });

      } else {
        setCurrentQuest(questions[currentStep - 1]);
      }
    }

  }, [currentStep, questions, count, page, questionsAnswers, questionsCorrect, result]);

  useEffect(() => {
    if (page === pages.questions) {
      const actualQuestions = parseQuiz(data);

      setQuestions(actualQuestions);
      setQuestionsCorrect(getCorrectAnwers(data));
      setCurrentQuest(actualQuestions[0]);
      setBtnActive(false);

    } else if (page === pages.welcome) {
      resetFull();
    }
  }, [page]);

  useEffect(() => {
    if (page == pages.welcome) {
      setBtnActive(checkCounter(count, max));
    }
  }, [count, max, page]);


  return {
    page,
    setPage,
    setCount,
    count,
    currentQuest,
    max,
    currentStep,
    btnActive,
    setBtnActive,
    currentCorrectAnswer,
    currentAnswer,
    setCurrentAnswer,
    submitStep,
    accessNext,
    setAccessNext,
    result
  };
};

export default useQuiz;