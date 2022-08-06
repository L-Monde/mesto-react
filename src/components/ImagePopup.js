import React from "react";

function ImagePopup(props) {
  const { card, onClose } = props;
  const isOpen = card.isActive;
  return (
    <div className={`popup popup-image ${isOpen ? "popup_opened" : ""}`}>
      <article className="popup__container-image">
        <button
          type="button"
          className="popup__button-close popup__image-button-close"
          onClick={onClose}
        ></button>
        <img className="popup__image-pic" src={card.link} alt={card.name} />
        <p className="popup__image-text"> {card.name} </p>
      </article>
    </div>
  );
}

export default ImagePopup;
