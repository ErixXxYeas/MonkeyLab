import React from "react";
import "./cssReset.css";
import css from "./modules/AdminPage.module.css";
import Button from "./components/button";
function AdminPage() {
  return (
    <React.Fragment>
      <div className={css.Container}>
        <div className={css.Header}>
          <p className={css.Headline}>Alle gemachten Tests</p>
          <Button className={css.Knopf} name="Test Durchführen"></Button>
          <Button className={css.Knopf} name="Link Erstellen"></Button>
          <select className={css.Selection} placeholder="Filter">
            <option>Name</option>
          </select>
        </div>
        <div className={css.List}></div>
      </div>
    </React.Fragment>
  );
}

export default AdminPage;
