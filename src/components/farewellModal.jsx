import css from "../modules/Modal.module.css";
import { Modal } from "react-bootstrap";

const FarewellModal = (props) => {
  return (
    <Modal show={props.modalFarewell} centered>
      <Modal.Header>
        <div className={css.modalHeader}>{"Glückwunsch"}</div>{" "}
      </Modal.Header>
      <Modal.Body>
        <div>Sie haben den Test abgeschlossen!</div>
        <div>Vielen Dank, Sie können die Seite nun schließen!</div>
      </Modal.Body>
    </Modal>
  );
};

export default FarewellModal;
