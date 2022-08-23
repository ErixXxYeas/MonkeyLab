import React, { Component } from "react";
import WordSelection from "./wordSelectionCheckBox";

const wordSelectionCheckBoxList = (props) => {
  const handleCheckAuswahlGood = (value) => {
    props.onCheckAuswahlGood(value);
  };

  const handleCheckAuswahlBad = (value) => {
    props.onCheckAuswahlBad(value);
  };

  const handleCheckAuswahlNeutral = (value) => {
    props.onCheckAuswahlNeutral(value);
  };

  return (
    <div>
      <div></div>
      <div>
        {props.words.map(
          (
            selectionWords //map zählt die wörter auf die in unserer Array ist (selectionWords ist die prop words)
          ) => (
            <WordSelection
              key={selectionWords.id}
              selectionWord={selectionWords} //prop: selectionword beinhaltet alle eigenschaften vom prop words
              onHandleChangeGood={handleCheckAuswahlGood}
              onHandleChangeBad={handleCheckAuswahlBad}
              onHandleChangeNeutral={handleCheckAuswahlNeutral}
            />
          )
        )}
      </div>
    </div>
  );
};

export default wordSelectionCheckBoxList;
