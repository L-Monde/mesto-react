import React from "react";
import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Api from "../utils/Api";
import CurrentUserContext from "../contexts/CurrentUserContext";

import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  //popups
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ isActive: false });
  const [currentUser, setCurrentUser] = useState({});
  const [cards, renderCards] = useState([]);
  const api = new Api({
    url: "https://mesto.nomoreparties.co/v1/cohort-40",
    headers: {
      authorization: "f6e30d96-a451-4ec9-81ba-5b034a8c8256",
      "Content-Type": "application/json",
    },
  });

  React.useEffect(() => {
    Promise.all([api.getCardsArray(), api.getProfileInfo()])
      .then((res) => {
        renderCards(res[0]);
        setCurrentUser(res[1]);
      })
      .catch((err) => console.log("Ошибка:", err));
  }, []);

  //card like switch
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        renderCards((state) =>
          state.map((item) => (item._id === card._id ? newCard : item))
        );
      })
      .catch((err) => console.log("Ошибка:", err));
  }

  //card deletion stuff
  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        renderCards(cards.filter((item) => item._id !== card._id));
      })
      .catch((err) => console.log("Ошибка:", err));
  }

  //avatar popup
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleUpdateAvatar(data) {
    api
      .changeProfileAvatar(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log("Ошибка:", err));
  }

  //profile popup
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleUpdateUser(data) {
    api
      .changeProfileInfo(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log("Ошибка:", err));
  }

  //content popup
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleAddPlaceSubmit(data) {
    api
      .addNewCard(data)
      .then((res) => {
        renderCards([res, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log("Ошибка:", err));
  }

  //image popup
  function handleCardClick(card) {
    setSelectedCard({
      isActive: true,
      ...card,
    });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ isActive: false });
  }

  return (
    <div className="root">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
