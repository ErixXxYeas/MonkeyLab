import { IoIosInformationCircleOutline } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import css from "../modules/informationIcon.module.css";

const InformationIcon = () => {
  return (
    <div>
      <IoIosInformationCircleOutline className={css.Icon} />
    </div>
  );
};

export default InformationIcon;
