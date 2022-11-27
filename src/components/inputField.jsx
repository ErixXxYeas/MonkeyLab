const inputField = (props) => {
  return (
    <div>
      <input type={props.type} className={props.style}></input>
    </div>
  );
};

export default inputField;
