import React, { Component } from "react";
import WordSelection from "./wordSelectionCheckBox";

const wordSelectionCheckBoxList = (props) => {
  const handleCheckAuswahlGood = (value) => {
    props.onCheckAuswahlGood(value);
  };

  const handleCheckAuswahlBad = (value) => {
    props.onCheckAuswahlBad(value);
  };

  return (
    <div>
      {props.words.map((selectionWords) => (
        <WordSelection
          key={selectionWords.id}
          selectionWord={selectionWords}
          onHandleChangeGood={handleCheckAuswahlGood}
          onHandleChangeBad={handleCheckAuswahlBad}
        />
      ))}
    </div>
  );
};

export default wordSelectionCheckBoxList;
