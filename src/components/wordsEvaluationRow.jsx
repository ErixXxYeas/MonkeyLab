import { Row } from "react-bootstrap";
import React from "react";

const WordsEvaluationRow = (props) => {
  return (
    <React.Fragment>
      {Array.from({ length: 6 }).map((_, index) => (
        <td className={props.style} key={index}>
          {props.words}
        </td>
      ))}
    </React.Fragment>
  );
};

export default WordsEvaluationRow;
