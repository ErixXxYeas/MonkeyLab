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
  const HTML = document.createElement("div");

  const test = () => {
    HTML.setAttribute("id", "Page");
    HTML.innerHTML = Fragment;
    var node = HTML;
    document.body.appendChild(node);
    domtoimage.toPng(node).then(function (dataUrl) {
      var img = new Image();
      img.src = dataUrl;
      console.log("loaded");
      doc.setDocumentProperties({
        title: "Test",
        author: "bifo",
        subject: "sunb",
      });
      doc.addImage(img, "Png", 0, 0, 0, 0);
      doc.output("dataurlnewwindow", "Test von Ben");
      document.body.removeChild(node);
    });
    console.log(Fragment);
  };

  const test2 = () => {
    window.print();
  };

  return (
    <React.Fragment>
      <div className={css.print}>
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
