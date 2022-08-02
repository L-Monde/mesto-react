import React from "react";
import { useState } from "react";
import api from "../utils/Api";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main(props) {
  const { onEditProfile, onAddPlace, onEditAvatar, onCardClick } = props;
  const currentUser = React.useContext(CurrentUserContext);
  const [userName, setUserName] = useState("Loading in progress...");
  const [userBrief, setUserBrief] = useState("Loading in progress...");
  const [userImage, setUserImage] = useState("#");

  //here we add content
  const [cards, renderCards] = React.useState([]);
  React.useEffect(() => {
    api
      .getCardsArray()
      .then((res) => {
        renderCards(res);
      })
      .catch((err) => console.log("Ошибка:", err));
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={currentUser.avatar}
            alt="12345"
            className="profile__avatar"
          />
          <div className="profile__avatar-overlay" onClick={onEditAvatar}>
            <div className="profile__overlay-image"> </div>
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name"> {currentUser.name} </h1>
            <button
              type="button"
              className="profile__button-edit"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__description"> {currentUser.about} </p>
        </div>
        <button
          type="button"
          className="profile__button-add"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} onClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
