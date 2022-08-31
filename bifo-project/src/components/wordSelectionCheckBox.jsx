import React, { Component } from "react";
import styles from "./wordSelectionCheckBoxStyler.module.css";

const wordSelectionCheckBox = (props) => {
  let handleChangeGood = () => {
    if (props.chosenGoodSelection == 6) {
      console.log("Bitte eines ausschalten");
    } else {
      props.onHandleChangeSelection(props.selectionWord, 1); //schickt
    }
  };

  let handleChangeBad = () => {
    if (props.chosenBadSelection == 6) {
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
      <div className={styles.word}>{props.selectionWord.word}</div>
      <div className={styles.radio}>
        <input
          type="radio"
          value={1}
          checked={props.selectionWord.selection === 1}
          onChange={handleChangeGood}
          onClick={handleChangeNeutralGood}
        />

        <input
          type="radio"
          value={2}
          checked={props.selectionWord.selection === 2}
          onChange={handleChangeBad}
          onClick={handleChangeNeutralBad}
        />
      </div>
      {props.selectionWord.selection}
    </div>
  );
};

export default wordSelectionCheckBox;
