import React, { useState } from "react";
import { ReactComponent as Arrow } from "assets/icons/arrow-left-green.svg";

const Accordion: React.FC<any> = (props) => {
  const [showAnswer, setShowAnswer] = useState<number | null | undefined>(null);
  const showAnswerHandleClick = (id: number) => {
    showAnswer == id ? setShowAnswer(null) : setShowAnswer(id);
  };
  return (
    <ul key={props.id} hidden={false} className=" mt-2 bg-green-100 rounded-xl">
      <li
        onClick={() => showAnswerHandleClick(props.id)}
        className=" px-1 py-2 flex justify-between items-center cursor-pointer w-[calc(100%-30px)] text-justify"
      >
        <h3 className="m-0 text-sm px-3 ">{props.title}</h3>
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
            showAnswer == props.id ? "rotate-90" : "-rotate-90"
          } transform duration-300`}
        />
      </li>
      <li
        className={
          `opacity-0 h-auto max-h-0 transition-all duration-500 ease-in-out overflow-hidden mt-2 ` +
          `${showAnswer == props.id ? `opacity-100 max-h-[200px] mt-2` : null}`
        }
      >
        <div className="">{props.children}</div>
      </li>
    </ul>
  );
};

export default Accordion;
