const button = (props) => {
  const clicked = () => {
    console.log("hola");
  };

  return (
    <div>
      <button onClick={clicked}>{props.name}</button>
    </div>
  );
};

export default button;
