import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import N29 from "./Pages/N-29_Test.js";
import AdminPage from "./Pages/AdminPage.js";
import Login from "./Pages/Login.js";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// test
