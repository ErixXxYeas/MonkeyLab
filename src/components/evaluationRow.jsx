import css from "../modules/PDF.module.css";
import React from "react";
import Eval from "../result.json";
const EvaluationRow = (props) => {
  const evalTest = Eval.tests[0].evaluation;
  const goodLength = props.goodWords;
  const badLength = props.badWords;
  const regLength = 12 - goodLength - badLength;

  return (
    <React.Fragment>
      <tr>
        <td className={css.row}>{props.id}</td>
        {Array.from({ length: goodLength }).map((_, index) => (
          <td
            style={{
              backgroundColor: "#006ab2",
            }}
            className={css.border}
            key={index}
          ></td>
        ))}

        {Array.from({ length: regLength }).map((_, index) => (
          <td className={css.checkers} key={index}></td>
        ))}

        {Array.from({ length: badLength }).map((_, index) => (
          <td
            style={{
              backgroundColor: "#ee7f00",
            }}
            className={css.border}
            key={index}
          ></td>
        ))}
        <td className={css.sentence}>{props.s}</td>
        <td className={css.title}>{props.t}</td>
      </tr>
    </React.Fragment>
  );
};

export default EvaluationRow;
