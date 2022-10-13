const Box = (props) => {
  let handleAuswahl = () => {
    props.onChangeAuswahl(props.wort);
  };

  return (
    <div>
      <button onClick={handleAuswahl}>
        {props.wort.name} {props.wort.auswahl}
      </button>
    </div>
  );
};

export default Box;
