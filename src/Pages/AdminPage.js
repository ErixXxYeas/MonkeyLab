import React from "react";
import "../cssReset.css";
import css from "../modules/AdminPage.module.css";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import CompletedTestBarList from "../components/completedTestBarList";
import Results from "../result.json";
import domtoimage from "dom-to-image";
import { jsPDF } from "jspdf";

function AdminPage() {
  const navigate = useNavigate();
  const navigateN29 = () => {
    navigate("/N29");
  };
  const HTMLselectionEvaluation = document.createElement("div");
  const HTMLwordsEvaluation = document.createElement("div");
  const createPdf = (selectionFragment, wordsFragment) => {
    let doc = new jsPDF({ orientation: "landscape" }, "mm", "a4", true);
    HTMLselectionEvaluation.innerHTML = selectionFragment;
    document.body.appendChild(HTMLselectionEvaluation);
    domtoimage.toPng(HTMLselectionEvaluation).then(function (dataurl) {
      let selectionImg = new Image();
      selectionImg.src = dataurl;
      selectionImg.onload = () => {
        console.log("loaded");
        doc.setDocumentProperties({
          title: "Test",
          author: "bifo",
          subject: "sunb",
        });
        doc.addImage(selectionImg, "Png", 0, 0, 0, 0);
        HTMLwordsEvaluation.innerHTML = wordsFragment;
        document.body.appendChild(HTMLwordsEvaluation);
        domtoimage.toPng(HTMLwordsEvaluation).then(function (dataUrl) {
          let wordImg = new Image();
          wordImg.src = dataUrl;
          doc.addPage();
          doc.addImage(wordImg, "Png", 0, 0, 0, 0);
          doc.output("dataurlnewwindow", "Test von Ben");
          document.body.removeChild(HTMLwordsEvaluation);
          document.body.removeChild(HTMLselectionEvaluation);
        });
      };
    });
  };

  return (
    <React.Fragment>
      <div className={css.Container}>
        <div className={css.Main}>
          <div className={css.Header}>
            <div className={css.Headline}>
              <p>Alle gemachten Tests</p>
            </div>
            <div className={css.Knöpfe}>
              <Button
                style={css.Knopf}
                name="Test Durchführen"
                event={navigateN29}
              ></Button>
              <Button style={css.Knopf} name="Link Erstellen"></Button>
            </div>
            <select className={css.Selection} placeholder="Filter">
              <option>Name</option>
            </select>
          </div>
          <div className={css.List}>
            <div className={css.Navigation}>
              <p>Datum</p>
              <div className={css.Firstname}>
                <p>Vorname</p>
              </div>
              <div className={css.Lastname}>
                <p>Nachname</p>
              </div>
              <div className={css.Evaluation}>
                <p>Auswertung</p>
              </div>
              <div className={css.Selectedwords}>
                <p>Wörterauswahl</p>
              </div>
            </div>
            <div className={css.TrueList}>
              <CompletedTestBarList
                onHandlePdf={createPdf}
                results={Results}
              ></CompletedTestBarList>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AdminPage;
