import CompletedTestBar from "./completedTestBar";

const CompletedTestBarList = (props) => {
  const handlePdf = (selectionFragment, wordsFragment) => {
    props.onHandlePdf(selectionFragment, wordsFragment);
  };
  return (
    <div>
      {props.results.tests.slice(0, 4).map((result) => (
        <CompletedTestBar
          onHandlePdf={handlePdf}
          result={result}
          evaluation={result.evaluation}
          wordsEvaluation={result.selectedWord}
          key={result.id}
        ></CompletedTestBar>
      ))}
      <div></div>
    </div>
  );
};

export default CompletedTestBarList;
