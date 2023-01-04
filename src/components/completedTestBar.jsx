import css from "../modules/CompletedTestBar.module.css";

const CompletedTestBar = () => {
  return (
    <div>
      <div className={css.main}>
        <div className={css.date}></div>
        <div className={css.name}></div>
        <div className={css.lastName}></div>
        <div className={css.print}></div>
      </div>
    </div>
  );
};

export default CompletedTestBar;
