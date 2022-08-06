import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const { isOpen, onClose, onUpdateUser } = props;
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
      children={
        <>
          <input
            id="profileName"
            type="text"
            className="popup__edit popup__edit_type_name"
            name="form-name"
            placeholder="Имя"
            minLength="2"
            maxLength="40"
            required
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
          <span id="profileName-error" className="popup__error"></span>
          <input
            id="profileDesc"
            type="text"
            className="popup__edit popup__edit_type_description"
            name="form-description"
            placeholder="Краткое описание"
            minLength="2"
            maxLength="200"
            required
            onChange={(event) => setDescription(event.target.value)}
            value={description}
          />
          <span id="profileDesc-error" className="popup__error"></span>
        </>
      }
    />
  );
}

export default EditProfilePopup;
