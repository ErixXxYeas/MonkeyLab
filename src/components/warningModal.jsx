import css from "../modules/Modal.module.css";
import { Modal, Button } from "react-bootstrap";
const WarningModal = (props) => {
  return (
    <Modal
      onHide={props.onHandleModalNextPageState}
      show={props.modalNextPage}
      centered
    >
      <Modal.Header>
        <div className={css.modalHeader}>{"Achtung!"}</div>
      </Modal.Header>
      <Modal.Body>
        <div>
          Wenn sie auf <b> Weiter</b> drücken können Sie ihre Auswahl nicht mehr
          ändern
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className={css.modalFooter}>
          <Button
            className={css.buttonWidth2}
            variant="outline-danger"
            size="lg"
            onClick={props.onHandleModalNextPageState}
          >
            {"Zurück"}
          </Button>
          <Button
            className={css.buttonWidth2}
            variant="outline-primary"
            size="lg"
            onClick={props.onHandleNextPage}
          >
            {"Weiter"}
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};
export default WarningModal;
