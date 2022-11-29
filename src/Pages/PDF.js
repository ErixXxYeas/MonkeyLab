import React from "react";
import css from "../modules/PDF.module.css";
import { jsPDF } from "jspdf";

function PDF() {
  const PDF = new jsPDF({
    orientation: "landscape",
  });

  return (
    <React.Fragment>
      <div>
        <p className={css.h1}>Hello World</p>
      </div>
    </React.Fragment>
  );
}

export default PDF;
