import css from "../modules/CompletedTestBar.module.css";
import { renderToString } from "react-dom/server";
import SelectionEvaluation from "./selectionEvaluation";
import WordsEvaluation from "./wordsEvaluation";

const CompletedTestBar = (props) => {
  const selectionFragment = renderToString(
    <SelectionEvaluation
      evaluation={props.evaluation}
      wordsEvaluation={props.wordsEvaluation}
      name={props.result.name}
      age={props.result.age}
    ></SelectionEvaluation>
  );

  const wordsFragment = renderToString(<WordsEvaluation></WordsEvaluation>);

  const handlePdf = () => {
    props.onHandlePdf(selectionFragment, wordsFragment);
    console.log(props.evaluation);
  };

  return (
    <div>
      <div className={css.main}>
        <div className={css.date}>{props.result.date}</div>
        <div className={css.name}>{props.result.name}</div>
        <div className={css.lastName}>{props.result.familyName}</div>
        <div className={css.print}>
          <a href="#" onClick={handlePdf}>
            Click Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompletedTestBar;
