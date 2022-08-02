import React from "react";

function PopupWithForm(props) {
  const { title, name, children, isOpen, onClose, buttonText } = props;
  return (
    <div className={`popup popup-${name} ${isOpen ? "popup_opened" : ""}`}>
      <article className="popup__container">
        <button type="button" className="popup__button-close" onClick={onClose}>
          {" "}
        </button>{" "}
        <h2 className="popup__heading"> {title} </h2>
        <form className="popup__form" name={`popup-form-${name}`} noValidate>
          {" "}
          {children}{" "}
          <button type="submit" className="popup__button-submit">
            {" "}
            {buttonText}{" "}
          </button>{" "}
        </form>
      </article>{" "}
    </div>
  );
}

export default PopupWithForm;
