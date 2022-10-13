import WordSelection from "./wordSelectionCheckBox";
import PageButton from "./pageButton";

const WordSelectionCheckBoxList = (props) => {
  const handleCheckAuswahl = (value, Int) => {
    props.onCheckAuswahl(value, Int);
  };

  const handleCheckAuswahlNeutral = (value, Int) => {
    props.onCheckAuswahlNeutral(value, Int);
  };
  const handleLastPage = () => {
    props.onHandleLastPage();
  };
  const handleNextPage = () => {
    props.onHandleNextPage();
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
            chosenGoodSelection={props.chosenGoodSelection}
            chosenBadSelection={props.chosenBadSelection}
            goodSelections={props.goodSelection}
            badSelections={props.badSelection}
            key={selectionWords.id}
            selectionWord={selectionWords} //prop: selectionword beinhaltet alle eigenschaften vom prop words
            onHandleChangeSelection={handleCheckAuswahl}
            onHandleChangeNeutral={handleCheckAuswahlNeutral}
          />
        ))}

      <div>
        <PageButton onLastPage={handleLastPage} onNextPage={handleNextPage} />
      </div>
    </div>
  );
};

export default WordSelectionCheckBoxList;
