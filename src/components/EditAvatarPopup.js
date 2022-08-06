import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditAvatarPopup(props) {
  const { isOpen, onClose, onUpdateAvatar } = props;
  const avatarUrl = React.useRef();

  React.useEffect(() => {
    avatarUrl.current.value = "";
  }, [isOpen]);

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateAvatar(avatarUrl.current.value);
  }
  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Сохранить"
      children={
        <>
          <input
            ref={avatarUrl}
            id="newAvatar"
            type="url"
            className="popup__edit popup__edit_type_avatar"
            name="avatar"
            placeholder="Ссылка на картинку"
            required
          />
          <span id="newAvatar-error" className="popup__error"></span>
        </>
      }
    />
  );
}

export default EditAvatarPopup;
