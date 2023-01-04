import React from "react";
import css from "../modules/PDF.module.css";
import { jsPDF } from "jspdf";
import Butt from "../components/button";
import Printer from "../components/printer";
import { renderToString } from "react-dom/server";
import N29 from "./N-29_Test";
import domtoimage from "dom-to-image";
import canvas from "html2canvas";

const PDF = () => {
  const doc = new jsPDF({ orientation: "landscape" });
  const Fragment = renderToString(<Printer></Printer>);
  const kkl = "<h1>hallo</h1>";
  const HTML = document.createElement("object");

  const test = () => {
    HTML.innerHTML = kkl.trim;
    var node = HTML;
    var x = document.getElementById("print");
    domtoimage.toPng(node).then(function (dataUrl) {
      var img = new Image();
      img.src = dataUrl;
      img.onload = () => {
        console.log("loaded");
        doc.addImage(img, "Png", 0, 0, 0, 0);
        doc.autoPrint(doc);
        doc.save("ben");
      };
    });
    console.log(Fragment);
  };

  const test2 = () => {
    window.print();
  };

  return (
    <React.Fragment>
      <div id="print">
        <p className={css.h1}>Hello World</p>
      </div>
      <div>
        <Butt name={"JSPDF"} event={test}></Butt>
        <button onClick={test2}>Regular</button>
      </div>
    </React.Fragment>
  );
};

export default PDF;
