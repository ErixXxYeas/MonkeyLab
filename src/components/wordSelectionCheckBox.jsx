import React, { useState, useEffect } from "react";
import styles from "../modules/wordSelectionCheckBoxStyler.module.css";

const WordSelectionCheckBox = (props) => {
  const [backgroundColor, setBackgroundColor] = useState("#cccccc");

  useEffect(() => {
    if (props.selectionWord.selection === 1) {
      setBackgroundColor("red");
    } else if (props.selectionWord.selection === 2) {
      setBackgroundColor("#5869d6");
    } else {
      setBackgroundColor("#cccccc");
    }
  }, [props.selectionWord.selection]);

  let handleChangeGood = () => {
    if (props.chosenGoodSelection === 6) {
      console.log("Bitte eines ausschalten");
    } else {
      props.onHandleChangeSelection(props.selectionWord, 1); //schickt
    }
  };

  let handleChangeBad = () => {
    if (props.chosenBadSelection === 6) {
      console.log("Bitte eines ausschalten");
    } else {
      props.onHandleChangeSelection(props.selectionWord, 2);
    }
  };

  let handleChangeNeutralGood = () => {
    props.onHandleChangeNeutral(props.selectionWord, 1);
  };

  let handleChangeNeutralBad = () => {
    props.onHandleChangeNeutral(props.selectionWord, 2);
  };

  return (
    <div className={styles.container}>
      <div className={styles.word} style={{ backgroundColor: backgroundColor }}>
        {props.selectionWord.word}
      </div>
      <div className={styles.radios}>
        <div>
          <input
            className={styles.radio}
            type="radio"
            value={1}
            checked={props.selectionWord.selection === 1}
            onChange={handleChangeGood}
            onClick={handleChangeNeutralGood}
          />
        </div>
        <div>
          <input
            className={styles.radio}
            type="radio"
            value={2}
            checked={props.selectionWord.selection === 2}
            onChange={handleChangeBad}
            onClick={handleChangeNeutralBad}
          />
        </div>
      </div>
    </div>
  );
};

export default WordSelectionCheckBox;
