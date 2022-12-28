import React from "react";
import css from "../modules/PDF.module.css";
import { jsPDF } from "jspdf";
import Butt from "../components/button";
import Printer from "../components/printer";
import { renderToString } from "react-dom/server";
import N29 from "./N-29_Test";
import domtoimage from "dom-to-image";

const PDF = () => {
  const doc = new jsPDF({ orientation: "landscape" });

  const test = () => {
    var node = document.getElementById("print");
    domtoimage.toPng(node).then(function (dataUrl) {
      var img = new Image();
      img.src = dataUrl;
      doc.addImage(img, "Png", 0, 0, 0, 0);
      doc.autoPrint(doc);
      doc.save("ben");
    });
    console.log("tested");
  };

  const test2 = () => {
    window.print;
  };

  return (
    <React.Fragment>
      <div id="print">
        <p className={css.h1}>Hello World</p>

        <div>
          <Butt name={"JSPDF"} event={test}></Butt>
          <button onClick={test2}>Regular</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PDF;
