import React, { useState, useEffect } from "react";
import WordSelection from "./wordSelectionCheckBox";
import PageButton from "./pageButton";

const WordSelectionCheckBoxList = (props) => {
  const handleCheckAuswahlGood = (value) => {
    props.onCheckAuswahlGood(value);
  };

  const handleCheckAuswahlBad = (value) => {
    props.onCheckAuswahlBad(value);
  };

  const handleCheckAuswahlNeutral = (value) => {
    props.onCheckAuswahlNeutral(value);
  };
  const handleLastPage = () => {
    props.onHandleLastPage();
  };
  const handleNextPage = () => {
    props.onHandleNextPage();
  };

  return (
    <div>
      <div>
        {props.words.slice(props.lastInt, props.int).map(
          //slice: gibt von welchen teil der array die wörter genommen werden
          (
            selectionWords //map zählt die wörter auf die in unserer Array ist (selectionWords ist die prop words)
          ) => (
            <WordSelection
              chosenGoodSelection={props.chosenGoodSelection}
              chosenBadSelection={props.chosenBadSelection}
              goodSelections={props.goodSelection}
              badSelections={props.badSelection}
              key={selectionWords.id}
              selectionWord={selectionWords} //prop: selectionword beinhaltet alle eigenschaften vom prop words
              onHandleChangeGood={handleCheckAuswahlGood}
              onHandleChangeBad={handleCheckAuswahlBad}
              onHandleChangeNeutral={handleCheckAuswahlNeutral}
            />
          )
        )}
      </div>
      <div>
        <PageButton onLastPage={handleLastPage} onNextPage={handleNextPage} />
      </div>
    </div>
  );
};

export default WordSelectionCheckBoxList;
