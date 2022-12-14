import ButtonComp from "../components/button";
import InputField from "../components/inputField";
import "../cssReset.css";
import css from "../modules/Login.module.css";
import { useNavigate } from "react-router-dom";

import React from "react";

function Login() {
  const navigate = useNavigate();
  const directToAdmin = () => {
    navigate("/admin");
  };

  return (
    <React.Fragment>
      <main className={css.Container}>
        <div className={css.Background}>
          <p className={css.Login}>Login</p>
          <div className={css.Username}>
            <InputField id={css.UserInput} style={css.inputField}></InputField>
            <p>Username</p>
          </div>
          <div className={css.Passwort}>
            <InputField type="password" style={css.inputField}></InputField>
            <p>Passwort</p>
          </div>
          <ButtonComp
            name={"Einloggen"}
            style={css.Butt}
            event={directToAdmin}
          ></ButtonComp>
        </div>
        {/*<div className={css.Logo}></div>*/}
      </main>
    </React.Fragment>
  );
}

export default Login;
