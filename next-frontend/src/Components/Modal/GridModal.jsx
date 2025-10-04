import "./grid-modal.css";
import Modal from "react-bootstrap/Modal";
import { WorkCard } from "../../container/work/WorkCard.jsx";
import Button from "react-bootstrap/Button";

export const GridModal = ({
  showAllModal,
  handleCloseAllModal,
  gridData,
  activeFilter,
}) => {
  return (
    <>
      <Modal
        show={showAllModal}
        onHide={handleCloseAllModal}
        centered
        scrollable
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{activeFilter} Projects</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="project-grid">
            {gridData.map((work, index) => (
              <div className="project-grid-item" key={index}>
                <WorkCard work={work} />
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseAllModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
