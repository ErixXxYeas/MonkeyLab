import React from "react";

const WordsEvaluationRow = (props) => {
  return (
    <React.Fragment>
      <td className={props.style}>{props.goodWords}</td>
      <td className={props.style}>{props.badWords}</td>
    </React.Fragment>
  );
};

export default WordsEvaluationRow;
