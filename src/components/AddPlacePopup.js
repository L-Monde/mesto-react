import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const { isOpen, onClose, onAddPlace } = props;
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  function handleSubmit(event) {
    event.preventDefault();
    onAddPlace({ name, link });
  }
  return (
    <PopupWithForm
      title="Новое место"
      name="add"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Создать"
      children={
        <>
          <input
            id="newPlaceName"
            value=""
            type="text"
            className="popup__edit popup__edit_type_place-name"
            name="place-name"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
            onChange={(event) => setName(event.target.value)}
          />
          <span id="newPlaceName-error" className="popup__error"></span>
          <input
            id="newPlaceDesc"
            type="url"
            className="popup__edit popup__edit_type_place-picture"
            name="place-description"
            placeholder="Ссылка на картинку"
            required
            onChange={(event) => setLink(event.target.value)}
          />
          <span id="newPlaceDesc-error" className="popup__error"></span>
        </>
      }
    />
  );
}

export default AddPlacePopup;
