import css from "../modules/CompletedTestBar.module.css";

import { renderToString } from "react-dom/server";

import Printer from "../components/printer";

const CompletedTestBar = (props) => {
  const Fragment = renderToString(
    <Printer
      evaluation={props.evaluation}
      name={props.result.name}
      age={props.result.age}
    ></Printer>
  );

  const handlePdf = () => {
    props.onHandlePdf(Fragment);
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
