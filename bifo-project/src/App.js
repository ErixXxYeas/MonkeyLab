import logo from "./logo.svg";
import "./App.css";
import WortAuswahl from "./components/wortAuswahl";
import WordSelectionList from "./components/wordSelectionCheckBoxList";
import React, { useState } from "react";

function App() {
  /*
  const [worter, setWorter] = useState([
    // state von wörter
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
    // updatet die wörter array "boxWort" ist die updated array die man zugeschickt kriegt
    const wort = [...worter]; //definiert wort mit der Wörter array
    const index = wort.indexOf(boxWort); //holt das index vom wort
    wort[index] = { ...boxWort }; // ändert an der stelle
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


*/

  const handleCheckAuswahlGood = (value) => {
    let newWordsArray = [...words]; // erstellt ein neues array dass gleich ist wie die words array
    let Index = newWordsArray.indexOf(value); // erstellt eine Zahl die, die stelle im array anzeigt welches gleich ist wie der gegebene "value"
    newWordsArray[Index] = { ...value }; // verändert den array and der index stelle mit dem neuen Wert
    newWordsArray[Index].auswahl = 1; // ändert die auswahl zu eins
    setWords(() => newWordsArray); // ersätzt die alte array mit der neuen
  };

  const handleCheckAuswahlBad = (value) => {
    let newWordsArray = [...words];
    let Index = newWordsArray.indexOf(value);
    newWordsArray[Index] = { ...value };
    newWordsArray[Index].auswahl = 2;
    setWords(() => newWordsArray);
  };

  const handleCheckAuswahlNeutral = (value) => {
    let newWordsArray = [...words];
    let Index = newWordsArray.indexOf(value);
    newWordsArray[Index] = { ...value };
    newWordsArray[Index].auswahl = 0;
    setWords(() => newWordsArray);
  };

  const [words, setWords] = useState([
    // state von wörter
    {
      id: 1,
      name: "Bauen",
      auswahl: 0,
      checked: true,
    },
    {
      id: 2,
      name: "Leiten",
      auswahl: 0,
      checked: false,
    },
    {
      id: 3,
      name: "Kochen",
      auswahl: 0,
      checked: false,
    },
    {
      id: 4,
      name: "Lernen",
      auswahl: 0,
      checked: false,
    },
  ]);

  return (
    <React.Fragment>
      <main className="container">
        <WordSelectionList
          words={words} // prop: das ganze array wird als prop weiter gegeben
          onCheckAuswahlGood={handleCheckAuswahlGood}
          onCheckAuswahlBad={handleCheckAuswahlBad}
          onCheckAuswahlNeutral={handleCheckAuswahlNeutral}
        ></WordSelectionList>
      </main>
    </React.Fragment>
  );
}

export default App;
