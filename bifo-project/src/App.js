import logo from "./logo.svg";
import "./App.css";
import WortAuswahl from "./components/wortAuswahl";
import WordSelectionList from "./components/wordSelectionCheckBoxList";
import React, { useState, useEffect } from "react";
import wordsJson from "./n29_words.json";

function App() {
  const pages = 29;
  const [int, setInt] = useState(pages);
  const [lastInt, setLastInt] = useState(0);
  const [words, setWords] = useState(wordsJson.words); // state von wörter
  const [chosenGoodSelection, setChosenGoodSelection] = useState(0);
  const [chosenBadSelection, setChosenBadSelection] = useState(0);
  const [goodSelection, setGoodSelection] = useState(false);
  const [badSelection, setBadSelection] = useState(false);

  const handleCheckAuswahlGood = (value) => {
    let newWordsArray = [...words]; // erstellt ein neues array dass gleich ist wie die words array
    let Index = newWordsArray.indexOf(value); // erstellt eine Zahl die, die stelle im array anzeigt welches gleich ist wie der gegebene "value"
    newWordsArray[Index] = { ...value }; // verändert den array and der index stelle mit dem neuen Wert
    newWordsArray[Index].selection = 1; // ändert die selection zu eins
    setWords(() => newWordsArray); // ersätzt die alte array mit der neuen
  };

  const handleCheckAuswahlBad = (value) => {
    let newWordsArray = [...words];
    let Index = newWordsArray.indexOf(value);
    newWordsArray[Index] = { ...value };
    newWordsArray[Index].selection = 2;
    setWords(() => newWordsArray);
  };
  useEffect(() => {
    let chosenGoodSelection = 0;
    let chosenBadSelection = 0;
    for (let i = lastInt; i <= int; i++) {
      if (words[i].selection === 1) {
        chosenGoodSelection++;
      } else if (words[i].selection === 2) {
        chosenBadSelection++;
      }
    }
    setChosenGoodSelection(chosenGoodSelection);
    setChosenBadSelection(chosenBadSelection);
    checkBoolean();
  });

  const handleCheckAuswahlNeutral = (value) => {
    let newWordsArray = [...words];
    let Index = newWordsArray.indexOf(value);
    newWordsArray[Index] = { ...value };
    newWordsArray[Index].selection = 0;
    setWords(() => newWordsArray);
  };

  const checkBoolean = () => {
    if (chosenGoodSelection === 6) {
      setGoodSelection(true);
    } else {
      setGoodSelection(false);
    }
    if (chosenBadSelection === 6) {
      setBadSelection(true);
    } else {
      setBadSelection(false);
    }
  };

  const handleLastPage = () => {
    if (lastInt <= 0) {
      alert("Sie können nicht zurück gehen");
    } else {
      let newInt = lastInt - pages;
      setInt(lastInt);
      setLastInt(newInt);
    }
  };

  const handleNextPage = () => {
    if (int <= 347) {
      //if (goodSelection && badSelection) {
      let newInt = int + pages;
      setLastInt(int);
      setInt(newInt);
      /* } else {
      alert("wählen sie 6 gute & schlechte Wörter aus");
   } */
    } else {
      console.log("letzte seite");
    }
  };

  return (
    <React.Fragment>
      <main className="container">
        <WordSelectionList
          chosenGoodSelection={chosenGoodSelection}
          chosenBadSelection={chosenBadSelection}
          goodSelection={goodSelection}
          badSelection={badSelection}
          int={int}
          lastInt={lastInt}
          words={words} // prop: das ganze array wird als prop weiter gegeben
          onCheckAuswahlGood={handleCheckAuswahlGood}
          onCheckAuswahlBad={handleCheckAuswahlBad}
          onCheckAuswahlNeutral={handleCheckAuswahlNeutral}
          onHandleNextPage={handleNextPage}
          onHandleLastPage={handleLastPage}
        ></WordSelectionList>
        <div>Int{int}</div>
        lastInt{lastInt}
        <div>goodSelection {chosenGoodSelection}</div>
        badSelection {chosenBadSelection}
      </main>
    </React.Fragment>
  );
}

export default App;
