import jsPDF from "jspdf";
import React from "react";
import css from "../modules/PDF.module.css";

const printer = () => {
  return (
    <main>
      <div>
        <p className={css.h1}>Save ME</p>
      </div>
    </main>
  );
};

export default printer;
