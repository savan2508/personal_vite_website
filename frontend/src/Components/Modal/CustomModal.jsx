import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import "./custom-modal.scss";
import { PortableText } from "@portabletext/react";

export const CustomModal = ({
  modalIsOpen,
  closeModal,
  description,
  title,
  buttons,
  screenshots = [],
}) => {
  return (
    <Modal show={modalIsOpen} onHide={closeModal} centered scrollable>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {description?.length > 0 &&
          (typeof description === "string" ? (
            <p>{description}</p>
          ) : (
            <PortableText
              value={description}
              components={{
                block: {
                  normal: ({ children }) => <p>{children}</p>,
                },
              }}
            />
          ))}
        {screenshots?.length > 0 && (
          <div className="custom-modal-screenshots">
            <Carousel>
              {screenshots.map((screenshot, index) => (
                <Carousel.Item
                  key={index}
                  className="carousel-image-container-modal"
                >
                  <img
                    className="d-block w-100 carousel-image-modal"
                    src={screenshot}
                    loading="lazy"
                    alt={`Screenshot ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        )}
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
