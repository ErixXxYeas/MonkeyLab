import css from "../modules/WordsEvaluation.module.css";
import WordsEvaluationRow from "./wordsEvaluationRow";
import TableHeaders from "./tableheaders";
import React from "react";
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
                  <TableHeaders key={index}></TableHeaders>
                ))}
              </tr>
              {Array.from({ length: 6 }).map((_, indexY) => (
                <React.Fragment>
                  <tr className={css.rowBorder}>
                    {Array.from({ length: 3 }).map((_, index) => (
                      <WordsEvaluationRow
                        style={css.content}
                        key={index}
                        goodWords={words[index].goodWords[indexY]}
                        badWords={words[index].badWords[indexY]}
                      ></WordsEvaluationRow>
                    ))}
                  </tr>
                </React.Fragment>
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
              <tr>
                {Array.from({ length: 3 }).map((_, index) => (
                  <TableHeaders key={index}></TableHeaders>
                ))}
              </tr>
              {Array.from({ length: 6 }).map((_, indexY) => (
                <React.Fragment>
                  <tr className={css.rowBorder}>
                    {Array.from({ length: 3 }).map((_, index) => (
                      <WordsEvaluationRow
                        style={css.content}
                        key={index}
                        goodWords={words[index + 3].goodWords[indexY]}
                        badWords={words[index + 3].badWords[indexY]}
                      ></WordsEvaluationRow>
                    ))}
                  </tr>
                </React.Fragment>
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
              <tr>
                {Array.from({ length: 3 }).map((_, index) => (
                  <TableHeaders key={index}></TableHeaders>
                ))}
              </tr>
              {Array.from({ length: 6 }).map((_, indexY) => (
                <React.Fragment>
                  <tr className={css.rowBorder}>
                    {Array.from({ length: 3 }).map((_, index) => (
                      <WordsEvaluationRow
                        style={css.content}
                        key={index}
                        goodWords={words[index + 6].goodWords[indexY]}
                        badWords={words[index + 6].badWords[indexY]}
                      ></WordsEvaluationRow>
                    ))}
                  </tr>
                </React.Fragment>
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
            <tbody className={css.rowBorderL}>
              <tr>
                {Array.from({ length: 3 }).map((_, index) => (
                  <TableHeaders key={index}></TableHeaders>
                ))}
              </tr>
              {Array.from({ length: 6 }).map((_, indexY) => (
                <React.Fragment>
                  <tr className={css.rowBorder}>
                    {Array.from({ length: 3 }).map((_, index) => (
                      <WordsEvaluationRow
                        style={css.content}
                        key={index}
                        goodWords={words[index + 9].goodWords[indexY]}
                        badWords={words[index + 9].badWords[indexY]}
                      ></WordsEvaluationRow>
                    ))}
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WordsEvaluation;
