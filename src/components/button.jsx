const button = (props) => {
  const clicked = () => {
    console.log("hola");
  };

  return (
    <div>
      <button onClick={props.event} className={props.style}>
        {props.name}
      </button>
    </div>
  );
};

export default button;
