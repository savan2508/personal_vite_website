import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import "./custom-modal.scss";

export const CustomModal = ({
  modalIsOpen,
  closeModal,
  description,
  title,
  buttons,
  screenshots = [],
}) => {
  return (
    <Modal show={modalIsOpen} onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{description}</p>
        <div className="custom-modal-screenshots">
          {screenshots?.length > 0 && (
            <Carousel>
              {screenshots.map((screenshot, index) => (
                <Carousel.Item
                  key={index}
                  className="carousel-image-container-modal"
                >
                  <img
                    className="d-block w-100 carousel-image-modal"
                    src={screenshot}
                    alt={`Screenshot ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </div>
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
