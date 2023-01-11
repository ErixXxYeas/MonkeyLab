import React, { useState, useEffect } from "react";
import wordsJson from "../n29_words.json";
import selectionArray from "../evaluation.json";
import ButtonComp from "../components/button";
import "../fonts/Exo2-Italic-VariableFont_wght.ttf";
import InformationIcon from "../components/informationIcon";
import WordSelectionList from "../components/wordSelectionCheckBoxList";
import "../cssReset.css";
import css from "../modules/N29.module.css";
import { Alert } from "react-bootstrap";

import IntroModal from "../components/introModal";
import InfoModal from "../components/infoModal";
import WarningModal from "../components/warningModal";

function N29Test() {
  const pages = 29; //* pages gibt die Anzahl an die man im Array überspringt
  const [maxArray, setMaxArray] = useState(pages); //* maxArray gibt die maximale array stelle an die dargesstellt wird
  const [minArray, setminArray] = useState(0); //* minArray gibt die erste stelle im array an die dargestellt wird.
  const [words, setWords] = useState(wordsJson.words); //* state von wörter
  const [chosenGoodSelection, setChosenGoodSelection] = useState(0);
  const [chosenBadSelection, setChosenBadSelection] = useState(0);
  const [goodSelection, setGoodSelection] = useState(false);
  const [badSelection, setBadSelection] = useState(false);
  const [evaluation, setEvalutation] = useState(selectionArray.selection);
  const [evaluationWords, setEvalutationWords] = useState(
    selectionArray.selectedWord
  );
  const [baseInformation, setBaseInformation] = useState(selectionArray);
  const [disabled, setDisabled] = useState(false);
  const [modalState, setModalState] = useState(true);
  const [infoModalState, setInfoModalState] = useState(false);
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState(true);
  const [buttonStyle, setButtonStyle] = useState("outline-primary");
  const [alertState, setAlertState] = useState(false);
  const [modalNextPage, setModalNextPageState] = useState(false);
  const [finishButton, setFinishButton] = useState("Weiter");
  const handleModalState = () => {
    setModalState(() => false);
  };

  const handleInfoModalState = () => {
    if (infoModalState === false) {
      setInfoModalState(true);
    } else {
      setInfoModalState(() => false);
    }
  };

  const handleModalNextPageState = () => {
    if (maxArray <= 347) {
      if (modalNextPage === false) {
        setModalNextPageState(true);
      } else {
        setModalNextPageState(() => false);
      }
    } else {
      handleNextPage();
    }
  };

  const alertFalse = () => {
    setAlertState(false);
  };
  const handleTooManyWords = () => {
    console.log("hi");
    setAlertState(true);
  };

  const changedInput = () => {
    setError(true);
    setButtonStyle("outline-primary");
  };

  const falseInput = () => {
    setError(false);
    setButtonStyle("outline-danger");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    changedInput();
  };

  const handleFamilyNameChange = (event) => {
    setFamilyName(event.target.value);
    changedInput();
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
    changedInput();
  };

  const handleNextModal = () => {
    if (name === "" || familyName === "" || age === 0 || age >= 100) {
      falseInput();
    } else if (
      !name.replace(/\s/g, "").length ||
      !familyName.replace(/\s/g, "").length
    ) {
      falseInput();
    } else if (/\d/.test(name) || /\d/.test(familyName)) {
      falseInput();
    } else {
      setBaseInformation((baseInformation.name = name));
      setBaseInformation((baseInformation.familyName = familyName));
      setBaseInformation((baseInformation.age = age));
      handleModalState();
      setInfoModalState(true);
      console.log(baseInformation);
    }
  };

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

  const handleCheckAuswahlNeutral = (value, Int) => {
    let newWordsArray = [...words];
    let Index = newWordsArray.indexOf(value);
    newWordsArray[Index] = { ...value };
    if (Int === newWordsArray[Index].selection) {
      newWordsArray[Index].selection = 0;
      setWords(() => newWordsArray);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    //* useEffect wird nach jedem render der seite und update der states durchgeführt, dies verwenden wir
    let chosenGoodSelections = 0; //* um die anzahl der ausgewählten guten und schlecht wörter zu im Blick zu halten
    let chosenBadSelections = 0;
    for (let i = minArray; i <= maxArray - 1; i++) {
      //* geht durch das array and der stelle minArray bis maxArray durch
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
  });

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

    if (chosenGoodSelection === 6 && chosenBadSelection === 6) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleNextPage = () => {
    if (maxArray <= 347) {
      setModalNextPageState(false);
      let newArray = maxArray + pages;
      setminArray(maxArray);
      setMaxArray(newArray);
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (maxArray <= 347) {
        setFinishButton("Abgeben");
      }
    } else {
      console.log("letzte seite");
    }
  };

  const evaluationProcess = () => {
    //Auswahl Evaluierung
    let scanner = [20, 50, 58, 110, 141, 166, 200, 203, 255, 261, 314, 319];
    let newEvaluation = [...evaluation];
    let goodSelections = 0;
    let badSelections = 0;
    let newWordEvaluation = [...evaluationWords];
    let newGoodWords = [];
    let newBadWords = [];
    let minRow = 0;
    let maxRow = 28;

    for (let evaluationRow = 0; evaluationRow <= 28; evaluationRow++) {
      for (
        let evaluationColumn = 0;
        evaluationColumn <= 11;
        evaluationColumn++
      ) {
        let scannerLoc = scanner[evaluationColumn];
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
          case 29:
            scanner[scannerUpdate] = 0;
            break;
          case 58:
            scanner[scannerUpdate] = 29;
            break;
          case 87:
            scanner[scannerUpdate] = 58;
            break;
          case 116:
            scanner[scannerUpdate] = 87;
            break;
          case 145:
            scanner[scannerUpdate] = 116;
            break;
          case 174:
            scanner[scannerUpdate] = 145;
            break;
          case 203:
            scanner[scannerUpdate] = 174;
            break;
          case 232:
            scanner[scannerUpdate] = 203;
            break;
          case 261:
            scanner[scannerUpdate] = 232;
            break;
          case 290:
            scanner[scannerUpdate] = 261;
            break;
          case 319:
            scanner[scannerUpdate] = 290;
            break;
          case 348:
            scanner[scannerUpdate] = 319;
            break;
          default:
        }
      }
    }

    //Wörter Evaluierung

    for (let column = 0; column <= 11; column++) {
      for (minRow; minRow <= maxRow; minRow++) {
        if (words[minRow].selection === 1) {
          newGoodWords.push(words[minRow].word);
        }
        if (words[minRow].selection === 2) {
          newBadWords.push(words[minRow].word);
        }
      }
      newWordEvaluation[column].goodWords = newGoodWords;
      newWordEvaluation[column].badWords = newBadWords;
      setEvalutationWords(() => newWordEvaluation);
      newGoodWords = [];
      newBadWords = [];
      console.log(minRow, maxRow);
      maxRow += 29;
    }
    console.log(selectionArray);
  };

  return (
    <React.Fragment>
      <div className={css.Container}>
        <div>
          <IntroModal
            error={error}
            modalState={modalState}
            buttonStyle={buttonStyle}
            onHandleModalState={handleModalState}
            onHandleNameChange={handleNameChange}
            onHandleAgeChange={handleAgeChange}
            onHandleNextModal={handleNextModal}
            onHandleFamilyNameChange={handleFamilyNameChange}
          ></IntroModal>
          <InfoModal
            infoModalState={infoModalState}
            onHandleInfoModalState={handleInfoModalState}
          ></InfoModal>
          <WarningModal
            modalNextPage={modalNextPage}
            onHandleNextPage={handleNextPage}
            onHandleModalNextPageState={handleModalNextPageState}
          ></WarningModal>
          <div className={css.AlertPosition}>
            <Alert variant="warning" dismissible={true}>
              Bruh Bruh Bruh
            </Alert>
          </div>
        </div>
        <div className={css.Header}>
          <p>BIFO | N-29 Neigungstest</p>
          <div className={css.Information}>
            <InformationIcon event={handleInfoModalState} />
          </div>
        </div>
        <div className={css.main}>
          <div className={css.WordList}>
            <div className={css.TestHeader}>
              <p>Wörter</p>
              <div className={css.TestHeaderWordGroup}>
                <p className={css.TestHeaderWord}>Positiv</p>
                <p className={css.TestHeaderWord}>Negativ</p>
              </div>
            </div>
            <div className={css.WordSelectionList}>
              <WordSelectionList
                words={words} //* prop: das ganze array wird als prop weiter gegeben
                maxArray={maxArray}
                minArray={minArray}
                badSelection={badSelection}
                goodSelection={goodSelection}
                chosenBadSelection={chosenBadSelection}
                chosenGoodSelection={chosenGoodSelection}
                onCheckAuswahl={handleCheckAuswahl}
                onhandleTooManyWords={handleTooManyWords}
                onCheckAuswahlNeutral={handleCheckAuswahlNeutral}
              ></WordSelectionList>
            </div>
          </div>
          <div className={css.Logo}>
            <div className={css.LogoPicture}></div>
            <div className={css.NextButton}>
              <ButtonComp
                style={css.button}
                name={finishButton}
                disabled={disabled}
                event={handleModalNextPageState}
              ></ButtonComp>
            </div>
            <div className={css.wordsSelection}>
              <div className={css.goodWords}>
                <p>{"'gute' Wörter: " + chosenGoodSelection}</p>
              </div>
              <div className={css.badWords}>
                <p>{"'schlechte' Wörter: " + chosenBadSelection}</p>
              </div>
            </div>
          </div>
        </div>

        <ButtonComp name={"Evalutation"} event={evaluationProcess}></ButtonComp>
      </div>
    </React.Fragment>
  );
}

export default N29Test;
