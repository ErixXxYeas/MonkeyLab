import React, { Component } from "react";
import styles from "./wordSelectionCheckBoxStyler.module.css";

const wordSelectionCheckBox = (props) => {
  let handleChangeGood = () => {
    props.onHandleChangeGood(props.selectionWord); //schickt
  };

  let handleChangeBad = () => {
    props.onHandleChangeBad(props.selectionWord);
  };

  let handleChangeNeutral = () => {
    props.onHandleChangeNeutral(props.selectionWord);
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
          onClick={handleChangeNeutral}
          disabled={props.goodSelections}
        />

        <input
          type="radio"
          value={2}
          checked={props.selectionWord.selection === 2}
          onChange={handleChangeBad}
          onClick={handleChangeNeutral}
          disabled={props.badSelections}
        />
      </div>
      {props.selectionWord.selection}
    </div>
  );
};

export default wordSelectionCheckBox;
