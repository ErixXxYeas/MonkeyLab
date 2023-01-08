import css from "../modules/WordsEvaluation.module.css";
import { Row, Col } from "react-bootstrap";
import WordsEvaluationRow from "./wordsEvaluationRow";
import TableHeaders from "./tableheaders";
const WordsEvaluation = (props) => {
  const words = props.wordsEvaluation;
  return (
    <div className={css.main}>
      <div className={css.heaven}>
        {"Neigungstest N-29 " + "Name: " + props.name + " Alter: " + props.age}
      </div>
      <div className={css.hell}>
        <div className={css.tableWrapper}>
          <table>
            <tbody>
              <tr className={css.upperHalf}>
                {Array.from({ length: 3 }).map((_, index) => (
                  <td colSpan={2} className={css.headers} key={index}>
                    {index + 1 + ". Spalte"}
                  </td>
                ))}
              </tr>
            </tbody>
            <tbody>
              <tr>
                {Array.from({ length: 3 }).map((_, index) => (
                  <TableHeaders></TableHeaders>
                ))}
              </tr>
              {Array.from({ length: 6 }).map((_, index) => (
                <tr className={css.contentRow}>
                  <WordsEvaluationRow
                    style={css.content}
                    key={index}
                    words={words[0].goodWords[index]}
                  ></WordsEvaluationRow>
                </tr>
              ))}
            </tbody>
            <tbody>
              <tr className={css.upperHalf}>
                {Array.from({ length: 3 }).map((_, index) => (
                  <td colSpan={2} className={css.headers} key={index}>
                    {index + 4 + ". Spalte"}
                  </td>
                ))}
              </tr>
            </tbody>
            <tbody>
              {" "}
              <tr>
                {Array.from({ length: 3 }).map((_, index) => (
                  <TableHeaders></TableHeaders>
                ))}
              </tr>
              {Array.from({ length: 6 }).map((_, index) => (
                <tr className={css.contentRow}>
                  <WordsEvaluationRow
                    style={css.content}
                    key={index}
                  ></WordsEvaluationRow>
                </tr>
              ))}
            </tbody>
            <tbody>
              <tr className={css.upperHalf}>
                {Array.from({ length: 3 }).map((_, index) => (
                  <td colSpan={2} className={css.headers} key={index}>
                    {index + 7 + ". Spalte"}
                  </td>
                ))}
              </tr>
            </tbody>
            <tbody>
              {" "}
              <tr>
                {Array.from({ length: 3 }).map((_, index) => (
                  <TableHeaders></TableHeaders>
                ))}
              </tr>
              {Array.from({ length: 6 }).map((_, index) => (
                <tr className={css.contentRow}>
                  <WordsEvaluationRow
                    style={css.content}
                    key={index}
                  ></WordsEvaluationRow>
                </tr>
              ))}
            </tbody>
            <tbody>
              <tr className={css.upperHalf}>
                {Array.from({ length: 3 }).map((_, index) => (
                  <td colSpan={2} className={css.headers} key={index}>
                    {index + 10 + ". Spalte"}
                  </td>
                ))}
              </tr>
            </tbody>
            <tbody>
              {" "}
              <tr>
                {Array.from({ length: 3 }).map((_, index) => (
                  <TableHeaders></TableHeaders>
                ))}
              </tr>
              {Array.from({ length: 6 }).map((_, index) => (
                <tr className={css.contentRow}>
                  <WordsEvaluationRow
                    style={css.content}
                    key={index}
                  ></WordsEvaluationRow>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WordsEvaluation;
