import Butt from "./components/button";
import InputField from "./components/inputField";

import React, { useState } from "react";

function Login() {
  const buttonText = "Login";

  return (
    <React.Fragment>
      <main className="container">
        <div className="Background">
          <InputField></InputField>
          <InputField></InputField>
          <Butt name={buttonText}></Butt>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Login;
