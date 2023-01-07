import css from "../modules/WordsEvaluation.module.css";
import { Row, Col } from "react-bootstrap";
import WordsEvaluationRow from "./wordsEvaluationRow";
const WordsEvaluation = (props) => {
  return (
    <div className={css.main}>
      <div className={css.heaven}>
        {"Neigungstest N-29 " + "Name: " + props.name + " Alter: " + props.age}
      </div>
      <div className={css.hell}>
        <Row className={css.upperHalf}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Col className={css.headers} key={index}>
              {index + 1 + ". Spalte"}
            </Col>
          ))}
        </Row>
        <Row className={css.contentRow}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Col className={css.content} key={index}>
              <WordsEvaluationRow></WordsEvaluationRow>
            </Col>
          ))}
        </Row>
        <Row className={css.upperHalf}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Col className={css.headers} key={index}>
              {index + 7 + ". Spalte"}
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default WordsEvaluation;
