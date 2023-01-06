import css from "../modules/PDF.module.css";
import React from "react";
const EvaluationRow = (props) => {
  return (
    <React.Fragment>
      <tr>
        <td className={css.row}>{props.id}</td>
        {Array.from({ length: 12 }).map((_, index) => (
          <td className={css.checkers} key={index}>
            {""}
          </td>
        ))}
        <td>{props.s}</td>
        <td className={css.title}>{props.t}</td>
      </tr>
    </React.Fragment>
  );
};

export default EvaluationRow;
