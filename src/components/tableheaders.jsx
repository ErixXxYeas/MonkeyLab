import React from "react";
import css from "../modules/WordsEvaluation.module.css";

const TableHeaders = () => {
  return (
    <React.Fragment>
      <td className={css.miniHeaders}>{"gute Wörter"}</td>
      <td className={css.miniHeaders}>{"schlecht Wörter"}</td>
    </React.Fragment>
  );
};
export default TableHeaders;
