import React from "react";
import css from "../modules/PDF.module.css";
import EvaluationRow from "./evaluationRow";
import sentences from "../sentences.json";

const selectionEvaluation = (props) => {
  const evaluation = props.evaluation;

  return (
    <React.Fragment>
      <div className={css.main}>
        <div className={css.header}>
          {"Neigungstest N-29 " +
            "Name: " +
            props.name +
            " Alter: " +
            props.age}
        </div>
        <div className={css.tableWrapper}>
          <table className={css.tableContainer}>
            <tbody className={css.group}>
              {sentences.sentences.slice(0, 2).map((sentences, index) => (
                <EvaluationRow
                  key={index}
                  goodWords={evaluation[sentences.id - 1].good}
                  badWords={evaluation[sentences.id - 1].bad}
                  s={sentences.s}
                  t={sentences.t}
                  id={sentences.id}
                ></EvaluationRow>
              ))}
            </tbody>
            <tbody className={css.group}>
              {sentences.sentences.slice(2, 4).map((sentences, index) => (
                <EvaluationRow
                  key={index}
                  s={sentences.s}
                  t={sentences.t}
                  id={sentences.id}
                  goodWords={evaluation[sentences.id - 1].good}
                  badWords={evaluation[sentences.id - 1].bad}
                ></EvaluationRow>
              ))}
            </tbody>
            <tbody className={css.group}>
              {sentences.sentences.slice(4, 8).map((sentences, index) => (
                <EvaluationRow
                  key={index}
                  s={sentences.s}
                  t={sentences.t}
                  id={sentences.id}
                  goodWords={evaluation[sentences.id - 1].good}
                  badWords={evaluation[sentences.id - 1].bad}
                ></EvaluationRow>
              ))}
            </tbody>
            <tbody className={css.group}>
              {sentences.sentences.slice(8, 12).map((sentences, index) => (
                <EvaluationRow
                  key={index}
                  s={sentences.s}
                  t={sentences.t}
                  id={sentences.id}
                  goodWords={evaluation[sentences.id - 1].good}
                  badWords={evaluation[sentences.id - 1].bad}
                ></EvaluationRow>
              ))}
            </tbody>
            <tbody className={css.group}>
              {sentences.sentences.slice(12, 15).map((sentences, index) => (
                <EvaluationRow
                  key={index}
                  s={sentences.s}
                  t={sentences.t}
                  id={sentences.id}
                  goodWords={evaluation[sentences.id - 1].good}
                  badWords={evaluation[sentences.id - 1].bad}
                ></EvaluationRow>
              ))}
            </tbody>
            <tbody className={css.group}>
              {sentences.sentences.slice(15, 18).map((sentences, index) => (
                <EvaluationRow
                  key={index}
                  s={sentences.s}
                  t={sentences.t}
                  id={sentences.id}
                  goodWords={evaluation[sentences.id - 1].good}
                  badWords={evaluation[sentences.id - 1].bad}
                ></EvaluationRow>
              ))}
            </tbody>
            <tbody className={css.group}>
              {sentences.sentences.slice(18, 23).map((sentences, index) => (
                <EvaluationRow
                  key={index}
                  s={sentences.s}
                  t={sentences.t}
                  id={sentences.id}
                  goodWords={evaluation[sentences.id - 1].good}
                  badWords={evaluation[sentences.id - 1].bad}
                ></EvaluationRow>
              ))}
            </tbody>
            <tbody className={css.group}>
              {sentences.sentences.slice(23, 29).map((sentences, index) => (
                <EvaluationRow
                  key={index}
                  s={sentences.s}
                  t={sentences.t}
                  id={sentences.id}
                  goodWords={evaluation[sentences.id - 1].good}
                  badWords={evaluation[sentences.id - 1].bad}
                ></EvaluationRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default selectionEvaluation;
