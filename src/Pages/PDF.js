import React from "react";
import css from "../modules/PDF.module.css";
import { jsPDF } from "jspdf";
import Butt from "../components/button";
import Printer from "../components/printer";
import { renderToString } from "react-dom/server";
import N29 from "./N-29_Test";

const PDF = () => {
  const doc = new jsPDF({ orientation: "landscape" });

  const test = () => {
    const string = renderToString(<N29></N29>);
    doc.html(string, {
      callback: function (doc) {
        doc.save("test-Print");
      },
    });
    console.log("tested");
  };
  return (
    <React.Fragment>
      <div id="print">
        <p className={css.h1}>Hello World</p>
      </div>
      <div>
        <Butt name={"print"} event={test}></Butt>
        <button onClick={test}>Test</button>
      </div>
    </React.Fragment>
  );
};

export default PDF;
