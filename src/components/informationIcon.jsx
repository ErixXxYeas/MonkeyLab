import { IoIosInformationCircleOutline } from "react-icons/io";
import css from "../modules/informationIcon.module.css";

const InformationIcon = (props) => {
  return (
    <div>
      <IoIosInformationCircleOutline
        className={css.Icon}
        onClick={props.event}
      />
    </div>
  );
};

export default InformationIcon;
