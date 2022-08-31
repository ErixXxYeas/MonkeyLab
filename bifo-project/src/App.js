import logo from "./logo.svg";
import "./App.css";
import WortAuswahl from "./components/wortAuswahl";
import WordSelectionList from "./components/wordSelectionCheckBoxList";
import React, { useState, useEffect } from "react";
import wordsJson from "./n29_words.json";
import selectionArray from "./selection.json";

function App() {
  const pages = 29; //* pages gibt die Anzahl an die man im Array überspringt
  const [int, setInt] = useState(pages); //* int gibt die maximale array stelle an die dargesstellt wird
  const [lastInt, setLastInt] = useState(0); //* lastInt gibt die erste stelle im array an die dargestellt wird.
  const [words, setWords] = useState(wordsJson.words); //* state von wörter
  const [chosenGoodSelection, setChosenGoodSelection] = useState(0);
  const [chosenBadSelection, setChosenBadSelection] = useState(0);
  const [goodSelection, setGoodSelection] = useState(false);
  const [badSelection, setBadSelection] = useState(false);
  const [evaluation, setEvalutation] = useState(selectionArray.selection);

  const handleCheckAuswahl = (value, Int) => {
    let newWordsArray = [...words]; //* erstellt ein neues array dass gleich ist wie die words array
    let Index = newWordsArray.indexOf(value); //* erstellt eine Zahl die, die stelle im array anzeigt welches gleich ist wie der gegebene "value"
    newWordsArray[Index] = { ...value }; //* verändert den array and der index stelle mit dem neuen Wert
    if (Int === 1) {
      newWordsArray[Index].selection = 1; //* ändert die selection zu eins
    } else if (Int === 2) {
      newWordsArray[Index].selection = 2;
    }
    setWords(() => newWordsArray); //* ersätzt die alte array mit der neuen
  };

  useEffect(() => {
    let chosenGoodSelections = 0; //* um die anzahl der ausgewählten guten und schlecht wörter im Blick zu halten
    let chosenBadSelections = 0;
    for (let i = lastInt; i <= int; i++) {
      //* geht durch das array and der stelle lastInt bis int durch
      if (words[i].selection === 1) {
        //* wenn es an der stelle eine auswahl von 1 gibt
        chosenGoodSelections++; //* wird die variable um eins gestiegen
      } else if (words[i].selection === 2) {
        //* wenn es an der stelle eine auswahl von 2 gibt
        chosenBadSelections++; //* wird die variable um eins gestiegen
      }
    }
    setChosenGoodSelection(chosenGoodSelections); //* dies ändert den "globalen" state der vairable
    setChosenBadSelection(chosenBadSelections); //! Man sollte setState nie in useEffect verwenden, solange man weiss wie man eine infinite loop vermeidet.
    checkBoolean();
    console.log(evaluation);
  });

  const handleCheckAuswahlNeutral = (value, Int) => {
    let newWordsArray = [...words];
    let Index = newWordsArray.indexOf(value);
    newWordsArray[Index] = { ...value };
    if (Int == newWordsArray[Index].selection) {
      newWordsArray[Index].selection = 0;
      setWords(() => newWordsArray);
    }
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

  const evaluationProcess = () => {
    let scanner = [20, 50, 58, 110, 141, 166, 200, 203, 255, 261, 314, 319];
    let newEvaluation = [...evaluation];
    let goodSelections = 0;
    let badSelections = 0;

    for (let evaluationRow = 0; evaluationRow <= 11; evaluationRow++) {
      for (let i = 0; i <= 11; i++) {
        let scannerLoc = scanner[i];
        if (words[scannerLoc].selection === 1) {
          goodSelections++;
        } else if (words[scannerLoc].selection === 2) {
          badSelections++;
        }
      }
      newEvaluation[evaluationRow].good = goodSelections;
      newEvaluation[evaluationRow].bad = badSelections;
      setEvalutation(() => newEvaluation);
      goodSelections = 0;
      badSelections = 0;

      for (let scannerUpdate = 0; scannerUpdate <= 11; scannerUpdate++) {
        scanner[scannerUpdate] += 1;
        let scannerColumn = scanner[scannerUpdate];
        switch (scannerColumn) {
          case 28:
            scanner[scannerUpdate] = 0;
            break;
          case 57:
            scanner[scannerUpdate] = 29;
            break;
          case 86:
            scanner[scannerUpdate] = 58;
            break;
          case 115:
            scanner[scannerUpdate] = 87;
            break;
          case 144:
            scanner[scannerUpdate] = 116;
            break;
          case 173:
            scanner[scannerUpdate] = 145;
            break;
          case 202:
            scanner[scannerUpdate] = 174;
            break;
          case 231:
            scanner[scannerUpdate] = 203;
            break;
          case 260:
            scanner[scannerUpdate] = 232;
            break;
          case 289:
            scanner[scannerUpdate] = 261;
            break;
          case 318:
            scanner[scannerUpdate] = 290;
            break;
          case 347:
            scanner[scannerUpdate] = 319;
            break;
        }
      }
    }
  };

  const handleNextPage = () => {
    if (int <= 347) {
      //*if (goodSelection && badSelection) {
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
          words={words} //* prop: das ganze array wird als prop weiter gegeben
          onCheckAuswahl={handleCheckAuswahl}
          onCheckAuswahlNeutral={handleCheckAuswahlNeutral}
          onHandleNextPage={handleNextPage}
          onHandleLastPage={handleLastPage}
        ></WordSelectionList>
        <button onClick={evaluationProcess}>Start evaluation</button>
        <div>Int{int}</div>
        lastInt{lastInt}
        <div>goodSelection {chosenGoodSelection}</div>
        badSelection {chosenBadSelection}
      </main>
    </React.Fragment>
  );
}

export default App;
