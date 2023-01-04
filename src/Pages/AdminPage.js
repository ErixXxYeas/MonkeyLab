import React from "react";
import "../cssReset.css";
import css from "../modules/AdminPage.module.css";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import CompletedTestBar from "../components/completedTestBar";
function AdminPage() {
  const navigate = useNavigate();
  const navigateN29 = () => {
    navigate("/N29");
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
              <CompletedTestBar></CompletedTestBar>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AdminPage;
