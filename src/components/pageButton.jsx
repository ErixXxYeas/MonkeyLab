const pageButtons = (props) => {
  const handleNextPage = () => {
    props.onNextPage();
  };

  const handleLastPage = () => {
    props.onLastPage();
  };

  return (
    <div>
      <button onClick={handleLastPage}> last Page</button>

      <button onClick={handleNextPage}> Next Page</button>
    </div>
  );
};

export default pageButtons;
