import "./App.css";
import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <h1>Hello World!</h1>
      <button onClick={toAdminPage()}>To Admin Page!</button>
    </React.Fragment>
  );
}

const toAdminPage = () => {};

export default App;
