import React from "react";
import "../cssReset.css";
import css from "../modules/AdminPage.module.css";
import Button from "../components/button";
function AdminPage() {
  return (
    <React.Fragment>
      <div className={css.Container}>
        <div className={css.Main}>
          <div className={css.Header}>
            <div className={css.Headline}>
              <p>Alle gemachten Tests</p>
            </div>
            <div className={css.Knöpfe}>
              <Button style={css.Knopf} name="Test Durchführen"></Button>
              <Button style={css.Knopf} name="Link Erstellen"></Button>
            </div>
            <select className={css.Selection} placeholder="Filter">
              <option>Name</option>
            </select>
          </div>
          <div className={css.List}>
            <div className={css.Navigation}>
              <p>Datum</p>
              <p className={css.Firstname}>Vorname</p>
              <p className={css.Lastname}>Nachname</p>
              <p className={css.Evaluation}>Auswertung</p>
              <p className={css.Selectedwords}>Wörterauswahl</p>
            </div>

            <div className={css.TrueList}></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AdminPage;
