import { Row } from "react-bootstrap";
import React from "react";

const WordsEvaluationRow = () => {
  return (
    <React.Fragment>
      {Array.from({ length: 6 }).map((_, index) => (
        <Row key={index}>{"This Works"}</Row>
      ))}
    </React.Fragment>
  );
};

export default WordsEvaluationRow;
