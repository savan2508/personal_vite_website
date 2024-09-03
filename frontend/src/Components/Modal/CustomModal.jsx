import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const CustomModal = ({
  modalIsOpen,
  closeModal,
  description,
  title,
  buttons,
}) => {
  return (
    <Modal show={modalIsOpen} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{description}</p>
      </Modal.Body>
      <Modal.Footer>
        {buttons?.map((button, index) => (
          <Button key={index} variant={button.variant} onClick={button.onClick}>
            {button.icon}
            {button.text}
          </Button>
        ))}
        <Button onClick={closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
