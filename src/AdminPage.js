import React from "react";
import "./cssReset.css";
import css from "./modules/AdminPage.module.css";
import Button from "./components/button";
function AdminPage() {
  return (
    <React.Fragment>
      <div className={css.Container}>
        <div>
          <Button name="Test durchführen"></Button>
          <Button name="Link erstellen"></Button>
        </div>
        <div></div>
      </div>
    </React.Fragment>
  );
}

export default AdminPage;
