import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditAvatarPopup(props) {
  const { isOpen, onClose, onUpdateAvatar } = props;
  const currentUser = React.useContext(CurrentUserContext);
  const [avatar, setAvatar] = React.useState("");

  React.useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser]);

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateAvatar(avatar);
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
            id="newAvatar"
            type="url"
            className="popup__edit popup__edit_type_avatar"
            name="avatar"
            placeholder="Ссылка на картинку"
            required
            onChange={(event) => setAvatar(event.target.value)}
          />
          <span id="newAvatar-error" className="popup__error"></span>
        </>
      }
    />
  );
}

export default EditAvatarPopup;
