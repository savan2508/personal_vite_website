import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import BlockContent from "@sanity/block-content-to-react";
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
        {description?.length > 0 && (
          <BlockContent
            blocks={description} // This is the array of blocks fetched from Sanity
            serializers={{
              types: {
                block: (props) => {
                  // Render paragraphs
                  if (props.node.style === "normal") {
                    return <p>{props.children}</p>;
                  }
                  // Default for other block types
                  return BlockContent.defaultSerializers.types.block(props);
                },
              },
            }}
          />
        )}
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
