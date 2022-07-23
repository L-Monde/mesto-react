import React from 'react'
import { useState } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import PopupWithForm from "./PopupWithForm"
import ImagePopup from "./ImagePopup"


function App() {
    //popups
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
    const [selectedCard, chooseSelectedCard] = useState({ isActive: false })

    //avatar popup
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    }
    //profile popup
    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }
    //content popup
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }
    //image popup

    function handleCardClick(card) {
        chooseSelectedCard({
            isActive: true,
            ...card
        })
        console.log(selectedCard)
    }


    function closeAllPopups() {
        console.log('123')
        setIsEditAvatarPopupOpen(false)
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        chooseSelectedCard({ isActive: false })
    }


    return ( <
        body className = "body" > <
        div className = "root" >
        <
        Header / >
        <
        Main onEditProfile = { handleEditProfileClick }
        onAddPlace = { handleAddPlaceClick }
        onEditAvatar = { handleEditAvatarClick }
        onCardClick = { handleCardClick }
        / > <
        Footer / >


        <
        PopupWithForm title = "Редактировать профиль"
        name = "profile"
        children = { < >
            <
            input id = "profileName"
            type = "text"
            className = "popup__edit popup__edit_type_name"
            name = "form-name"
            placeholder = "Имя"
            minlength = "2"
            maxlength = "40"
            required / >
            <
            span id = "profileName-error"
            className = "popup__error" > < /span> <
            input id = "profileDesc"
            type = "text"
            className = "popup__edit popup__edit_type_description"
            name = "form-description"
            placeholder = "Краткое описание"
            minlength = "2"
            maxlength = "200"
            required / >
            <
            span id = "profileDesc-error"
            className = "popup__error" > < /span>  < / >
        }
        isOpen = { isEditProfilePopupOpen }
        onClose = { closeAllPopups }
        buttonText = "Сохранить" /
        >


        <
        PopupWithForm title = "Новое место"
        name = "add"
        children = { < >

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
            className = "popup__error" > < /span>   < / >
        }
        isOpen = { isAddPlacePopupOpen }
        onClose = { closeAllPopups }
        buttonText = "Создать" /
        >


        <
        PopupWithForm title = "Обновить аватар"
        name = "avatar"
        children = { < >

            <
            input id = "newAvatar"
            type = "url"
            className = "popup__edit popup__edit_type_avatar"
            name = "avatar"
            placeholder = "Ссылка на картинку"
            required / >
            <
            span id = "newAvatar-error"
            className = "popup__error" > < /span>   < / >
        }
        isOpen = { isEditAvatarPopupOpen }
        onClose = { closeAllPopups }
        buttonText = "Сохранить" /
        >
        <
        ImagePopup card = { selectedCard }
        onClose = { closeAllPopups }
        /> < /
        div > < /
        body >
    );
}

export default App;