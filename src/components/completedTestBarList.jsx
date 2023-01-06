import CompletedTestBar from "./completedTestBar";
import Results from "../result.json";

const CompletedTestBarList = (props) => {
  const minId = 1;
  const maxId = 1;
  const handlePdf = (Fragment) => {
    props.onHandlePdf(Fragment);
  };
  return (
    <div>
      {Results.tests.slice(0, 4).map((result) => (
        <CompletedTestBar
          onHandlePdf={handlePdf}
          result={result}
          key={result.id}
        ></CompletedTestBar>
      ))}
      <div></div>
    </div>
  );
};

export default CompletedTestBarList;
