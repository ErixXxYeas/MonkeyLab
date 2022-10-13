import Bud from "./box";

const WortAuswahl = (props) => {
  let handleChangeAuswahl = (auswahl) => {
    props.onHandleChangeAuswahl(auswahl);
  };

  return (
    <div>
      {props.wort.map((boxWort) => (
        <Bud
          key={boxWort.id}
          wort={boxWort}
          onChangeAuswahl={handleChangeAuswahl}
        />
      ))}
    </div>
  );
};

export default WortAuswahl;
