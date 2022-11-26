import styles from "../modules/selectedWordList.module.css";

const SelectedWordList = (props) => {
  return (
    <div className={styles.container}>
      <div>{props.goodWordList}</div>
      <div></div>
    </div>
  );
};

export default SelectedWordList;
