import css from "../modules/CompletedTestBar.module.css";
import { renderToString } from "react-dom/server";
import SelectionEvaluation from "./selectionEvaluation";
import WordsEvaluation from "./wordsEvaluation";

const CompletedTestBar = (props) => {
  const selectionFragment = renderToString(
    <SelectionEvaluation
      evaluation={props.evaluation}
      name={props.result.name}
      age={props.result.age}
    ></SelectionEvaluation>
  );

  const wordsFragment = renderToString(
    <WordsEvaluation
      wordsEvaluation={props.wordsEvaluation}
      name={props.result.name}
      age={props.result.age}
    ></WordsEvaluation>
  );

  const handlePdf = () => {
    props.onHandlePdf(selectionFragment, wordsFragment);
    console.log(props.wordsEvaluation);
  };

  return (
    <div>
      <div className={css.main}>
        <div className={css.date}>{props.result.date}</div>
        <div className={css.name}>{props.result.name}</div>
        <div className={css.lastName}>{props.result.familyName}</div>
        <div className={css.print}>
          <button onClick={handlePdf} className={css.button}>
            {"Test von " + props.result.name + " herunterladen"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletedTestBar;
