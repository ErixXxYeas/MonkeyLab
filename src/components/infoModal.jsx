import css from "../modules/Modal.module.css";
import { Modal, Button } from "react-bootstrap";
import goodWordsExample from "../instructionImages/good_Words_Example.png";
import badWordsExample from "../instructionImages/bad_Words_Example.png";
const InfoModal = (props) => {
  return (
    <Modal
      onHide={props.onHandleInfoModalState}
      show={props.infoModalState}
      size={"lg"}
      centered
    >
      <Modal.Header closeButton>
        <div className={css.modalHeader}>{"Information"}</div>
      </Modal.Header>

      <Modal.Body>
        <div>
          Sie werden verschiedenen Tätigkeitsbegriffe sehen und ihre Aufgabe
          sieht folgendermaßen aus:
        </div>

        <div>
          Bitte wählen Sie pro Seite <b>6 Begriffe</b>, die Sie interessieren
          (diese erscheinen <b>blau</b>)
          <img src={goodWordsExample} alt="good"></img>
        </div>
        <div>
          Wählen Sie auch <b>6 Begriffe</b> pro Seite, die Sie weniger gern
          machen (diese erscheinen <b>orange</b>).
          <img src={badWordsExample} alt="bad"></img>
        </div>
        <div>
          Pro Seite müssen <b>12 Begriffe</b> gewählt sein, nicht mehr und nicht
          weniger.
        </div>
        <div>
          Sollten Sie sich doch für einen anderen Begriff entscheiden, dann
          wählen Sie einfach einen Neuen aus. Entscheiden Sie einfach{" "}
          <b>spontan nach Gefühl</b> und überlegen sie nicht zu lange. Die
          Ergebnisse kommen nach Abschluss der Tests direkt zu uns"
        </div>
        <div>
          <h4 className={css.underline}>Gutes Gelingen!</h4>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className={css.buttonWidth}
          variant="outline-primary"
          size="lg"
          onClick={props.onHandleInfoModalState}
        >
          {"Schließen"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InfoModal;
