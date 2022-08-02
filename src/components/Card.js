import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card(props) {
  const { card, onClick, onCardLike } = props;
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  function handleClick() {
    onClick(card);
  }
  function handleCardLike() {
    onCardLike(card);
  }
  //"element__button-like"
  return (
    <div key={card._id} className="element">
      <img
        className="element__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <button
        type="button"
        className={
          isOwn ? "card__delete-button_visible" : "card__delete-button_hidden"
        }
      ></button>
      <div className="element__info">
        <h4 className="element__name"> {card.name} </h4>
        <div className="element__likes">
          <button
            type="button"
            className={
              isLiked ? "element__button-like_pressed" : "element__button-like"
            }
            onClick={handleCardLike}
          ></button>
          <p className="element__likes-count"> </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
