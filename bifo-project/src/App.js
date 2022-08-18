import logo from "./logo.svg";
import "./App.css";
import WortAuswahl from "./components/wortAuswahl";
import React, { useState } from "react";

function App() {
  const [worter, setWorter] = useState([
    {
      id: 1,
      name: "hals",
      auswahl: 3,
    },
    {
      id: 2,
      name: "ben",
      auswahl: 1,
    },
    {
      id: 3,
      name: "jerry",
      auswahl: 5,
    },
    {
      id: 4,
      name: "Ben",
      auswahl: 0,
    },
  ]);

  const handelChangeAuswahl = (boxWort) => {
    const wort = [...worter];
    const index = wort.indexOf(boxWort);
    wort[index] = { ...boxWort };
    wort[index].auswahl = 2;
    setWorter(() => wort);
    console.log("changed", worter[index]);
  };

  return (
    <React.Fragment>
      <main className="container" />
      <WortAuswahl
        wort={worter}
        onHandleChangeAuswahl={handelChangeAuswahl}
      ></WortAuswahl>
    </React.Fragment>
  );
}

export default App;
