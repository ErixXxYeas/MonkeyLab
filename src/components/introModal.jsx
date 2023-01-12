import { Modal, Row, Col, Button } from "react-bootstrap";
import css from "../modules/Modal.module.css";

const IntroModal = (props) => {
  return (
    <Modal
      show={props.modalState}
      centered={true}
      size={"lg"}
      backdrop="static"
    >
      <Modal.Header>
        <Modal.Title className={css.modalHeader}>
          Willkommen zum N29-Neigungstest
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {
            "Bei diesem Test werden auf den folgenden Seiten Ihre Interessen und Neigungen erfasst. "
          }
        </p>
        <p>{"Bitte geben sie folgende Informationen an."}</p>
        <div>
          <Row>
            <Col>
              <input
                type={"text"}
                name={"name"}
                onChange={props.onHandleNameChange}
                placeholder="Max"
                className={css.borderRadius}
              ></input>
              <p>{" Vorname "}</p>
            </Col>
            <Col>
              <input
                type={"text"}
                name={"familyName"}
                onChange={props.onHandleFamilyNameChange}
                placeholder="Mustermann"
                className={css.borderRadius}
              ></input>
              <p>{" Nachname "}</p>
            </Col>
            <Col>
              <input
                type={"number"}
                min={1}
                max={99}
                onChange={props.onHandleAgeChange}
                placeholder="24"
                className={css.borderRadius}
              ></input>
              <p>{" Alter "}</p>
            </Col>
          </Row>
          <div className={css.error}>
            <div hidden={props.error}>*Bitte richtige Werte eingeben*</div>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <div className={css.modalFooter}>
          <Button
            className={css.buttonWidth}
            onClick={props.onHandleNextModal}
            variant={props.buttonStyle}
            size="lg"
          >
            Weiter
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default IntroModal;
