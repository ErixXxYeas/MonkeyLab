import WordSelection from "./wordSelectionCheckBox";

const WordSelectionCheckBoxList = (props) => {
  const handleCheckAuswahl = (value, Int) => {
    props.onCheckAuswahl(value, Int);
  };

  const handleCheckAuswahlNeutral = (value, Int) => {
    props.onCheckAuswahlNeutral(value, Int);
  };

  const handleTooManyWords = () => {
    props.onhandleTooManyWords();
  };

  return (
    <div
      style={{
        columns: 1,
      }}
    >
      {props.words
        .slice(props.minArray, props.maxArray)
        .map((selectionWords) => (
          <WordSelection
            tooManyWords={handleTooManyWords}
            onHandleChangeNeutral={handleCheckAuswahlNeutral}
            chosenGoodSelection={props.chosenGoodSelection}
            chosenBadSelection={props.chosenBadSelection}
            onHandleChangeSelection={handleCheckAuswahl}
            goodSelections={props.goodSelection}
            badSelections={props.badSelection}
            selectionWord={selectionWords} //prop: selectionword beinhaltet alle eigenschaften vom prop words
            key={selectionWords.id}
          />
        ))}

      <div></div>
    </div>
  );
};

export default WordSelectionCheckBoxList;
