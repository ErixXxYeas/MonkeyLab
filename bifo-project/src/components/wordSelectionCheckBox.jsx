import React, { Component } from "react";

const wordSelectionCheckBox = (props) => {
  let handleChangeGood = () => {
    props.onHandleChangeGood(props.selectionWord);
  };

  let handleChangeBad = () => {
    props.onHandleChangeBad(props.selectionWord);
  };

  const isChecked = (value) => {
    if (value == props.selectionWord.auswahl) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <form>
      <div>
        <label>
          {props.selectionWord.name}
          <input
            type="radio"
            value={1}
            checked={isChecked(1)}
            onChange={handleChangeGood}
          />
          <input
            type="radio"
            value={2}
            checked={isChecked(2)}
            onChange={handleChangeBad}
          />
        </label>
      </div>
    </form>
  );
};

export default wordSelectionCheckBox;
