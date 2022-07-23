import React from "react";
import { useState } from 'react'
import Api from "./Api"
import Card from "./Card"

function Main(props) {
    const { onEditProfile, onAddPlace, onEditAvatar, onCardClick } = props

    const [userName, setUserName] = useState('Loading in progress...')
    const [userBrief, setUserBrief] = useState('Loading in progress...')
    const [userImage, setUserImage] = useState('#')


    const api = new Api({
        url: 'https://mesto.nomoreparties.co/v1/cohort-40',
        headers: {
            authorization: 'f6e30d96-a451-4ec9-81ba-5b034a8c8256',
            'Content-Type': 'application/json'
        }
    })

    //here we set the profile info
    React.useEffect(() => {
        api.getProfileInfo()
            .then(res => {
                setUserName(res.name)
                setUserBrief(res.about)
                setUserImage(res.avatar)
            })
    })

    //here we add content
    const [cards, renderCards] = React.useState([])
    React.useEffect(() => {
            api.getCardsArray()
                .then(res => {
                    renderCards(res)
                })
        })
        //and do stuff with it

    return ( <
        main className = "main" >

        <
        section className = "profile" >
        <
        div className = "profile__avatar-container" >
        <
        img src = { userImage }
        alt = "12345"
        className = "profile__avatar" / >
        <
        div className = "profile__avatar-overlay"
        onClick = { onEditAvatar } >
        <
        div className = "profile__overlay-image" > < /div> < /
        div > <
        /div> <
        div className = "profile__info" >
        <
        div className = "profile__container" >
        <
        h1 className = "profile__name" > { userName } < /h1> <
        button type = "button"
        className = "profile__button-edit"
        onClick = { onEditProfile } >
        <
        /button> < /
        div >

        <
        p className = "profile__description" > { userBrief } < /p> < /
        div > <
        button type = "button"
        className = "profile__button-add"
        onClick = { onAddPlace } > < /button> < /
        section >

        <
        section className = "elements" > {
            cards.map(card => ( <
                Card card = { card }
                onClick = { onCardClick }
                />
            ))
        } <
        /section>

        <
        template className = "element-template" >
        <
        div className = "element" >
        <
        img className = "element__image"
        src = "./images/photo-grid-1.jpg"
        alt = "Полуразвалившаяся, утопающая в зелени, каменная церковь" / >
        <
        button type = "button"
        className = "element__button-delete" > < /button> <
        div className = "element__info" >
        <
        h4 className = "element__name" > < /h4> <
        div className = "element__likes" >
        <
        button type = "button"
        className = "element__button-like" > < /button> <
        p className = "element__likes-count" > 12 < /p> < /
        div > < /div > < /
        div > < /
        template >




        <
        div className = "popup popup-avatar" >
        <
        article className = "popup__container" >
        <
        button type = "button"
        className = "popup__button-close popup__avatar-button-close" > < /button> <
        h2 className = "popup__heading" > Обновить аватар < /h2> <
        form className = "popup__form popup__form-avatar"
        name = "popup-form_avatar"
        noValidate >
        <
        input id = "newAvatar"
        type = "url"
        className = "popup__edit popup__edit_type_avatar"
        name = "avatar"
        placeholder = "Ссылка на картинку"
        required / >
        <
        span id = "newAvatar-error"
        className = "popup__error" > < /span> <
        button type = "submit"
        className = "popup__button-submit popup__button-submit:disabled"
        disabled > Создать < /button> < /
        form >

        <
        /article> < /
        div > <
        div className = "popup popup-add" >
        <
        article className = "popup__container" >
        <
        button type = "button"
        className = "popup__button-close popup__add-button-close" > < /button> <
        h2 className = "popup__heading" > Новое место < /h2> <
        form className = "popup__form popup__form-add"
        name = "popup-form_add"
        noValidate >
        <
        input id = "newPlaceName"
        type = "text"
        className = "popup__edit popup__edit_type_place-name"
        name = "place-name"
        placeholder = "Название"
        minLength = "2"
        maxLength = "30"
        required / >
        <
        span id = "newPlaceName-error"
        className = "popup__error" > < /span> <
        input id = "newPlaceDesc"
        type = "url"
        className = "popup__edit popup__edit_type_place-picture"
        name = "place-description"
        placeholder = "Ссылка на картинку"
        required / >
        <
        span id = "newPlaceDesc-error"
        className = "popup__error" > < /span> <
        button type = "submit"
        className = "popup__button-submit popup__button-submit:disabled"
        disabled > Создать < /button> < /
        form >

        <
        /article> < /
        div > <
        div className = "popup popup-image" >

        <
        article className = "popup__container-image" >
        <
        button type = "button"
        className = "popup__button-close popup__image-button-close" > < /button> <
        img className = "popup__image-pic"
        src = "./images/photo-grid-1.jpg"
        alt = "тут должна быть картинка" / >
        <
        p className = "popup__image-text" > < /p> < /
        article > <
        /div> <
        div className = "popup popup-card-delete" >
        <
        article className = "popup__container" >
        <
        button type = "button"
        className = "popup__button-close" > < /button> <
        h2 className = "popup__heading" > Вы уверены ? < /h2> <
        button type = "submit"
        className = "popup__button-submit popup__button-submit:disabled" > Даъ < /button> < /
        article > <
        /div> < /
        main > )
}

export default Main