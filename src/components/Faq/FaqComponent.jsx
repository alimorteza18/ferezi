import { useState } from "react";
import { ReactComponent as Arrow } from "assets/icons/arrow-left-yellow.svg";
import questions from "data/FAQ.json";
import { useTranslation } from "react-i18next";
// const FAQ = (questions: QuestionType[]) => {
const FaqComponent = () => {
  const [showAnswer, setShowAnswer] = useState(null);
  const showAnswerHandleClick = (id) => {
    showAnswer === id ? setShowAnswer(null) : setShowAnswer(id);
  };
  const { t } = useTranslation();

  return (
    <div className="">
      {questions &&
        questions.map((question, index) => {
          return (
            <ul key={index} hidden={false} className="">
              <li
                onClick={() => showAnswerHandleClick(index)}
                className="px-1 py-2 flex justify-between items-center cursor-pointer"
              >
                <h3 className="m-0 text-sm px-3 py-2 w-[calc(100%-30px)] text-justify">
                  - {t(`${question.question}`)}
                </h3>
                {/* <img
                  src="/icons/down-arrow-in-circle.svg"
                  className={showAnswer == id ? classes.arrowImageRotate : ""}
                  alt="down-arrow-in-circle"
                  loading="lazy"
                /> */}
                <Arrow
                  width="20px"
                  height="auto"
                  className={`${
                    showAnswer == index ? "rotate-90" : "-rotate-90"
                  } transform duration-300 w-fit`}
                />
              </li>
              <li
                className={
                  `opacity-0 h-auto max-h-0 transition-all duration-500 ease-in-out overflow-hidden border-t border-dashed mt-2 ` +
                  `${
                    showAnswer == index
                      ? `opacity-100 max-h-[200px] mt-2`
                      : null
                  }`
                }
              >
                <p className="px-5 py-2 font-normal mt-2 text-xs text-justify">
                  {t(`${question.answer}`)}
                </p>
              </li>
            </ul>
          );
        })}
    </div>
  );
};
export default FaqComponent;
