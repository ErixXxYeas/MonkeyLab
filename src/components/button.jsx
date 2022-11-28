const button = (props) => {
  return (
    <div>
      <button
        onClick={props.event}
        className={props.style}
        disabled={props.disabled}
      >
        {props.name}
      </button>
    </div>
  );
};

export default button;
