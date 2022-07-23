import React from "react";
import { useState } from 'react'
import Api from "../utils/Api"
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
            .catch(err => console.log("Ошибка:", err))
    }, [])

    //here we add content
    const [cards, renderCards] = React.useState([])
    React.useEffect(() => {
            api.getCardsArray()
                .then(res => {
                    renderCards(res)
                })
                .catch(err => console.log("Ошибка:", err))
        }, [])
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
                Card key = { card._id }
                card = { card }
                onClick = { onCardClick }
                />
            ))
        } <
        /section> < /
        main > )
}

export default Main