function Card(props) {
    const { card, onClick } = props

    function handleClick() {
        console.log('2')
        onClick(card)
    }
    return ( <
        div key = { card._id }
        className = "element" >
        <
        img className = "element__image"
        src = { card.link }
        alt = { card.name }
        onClick = { handleClick }
        / > <
        button type = "button"
        className = "element__button-delete" > < /button> <
        div className = "element__info" >
        <
        h4 className = "element__name" > { card.name } < /h4> <
        div className = "element__likes" >
        <
        button type = "button"
        className = "element__button-like" > < /button> <
        p className = "element__likes-count" > < /p> < /
        div > < /div > < /
        div >
    )
}

export default Card