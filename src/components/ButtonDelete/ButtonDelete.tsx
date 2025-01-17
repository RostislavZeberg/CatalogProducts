import React, { FC, useContext } from "react"
import { useNavigate } from "react-router-dom";

import { Card } from "../../utils/Interface";
import { CardsContext, FilterCardsContext } from "../../utils/Context";

interface ButtonDeleteProps {
    card: Card
}

export const ButtonDelete:FC<ButtonDeleteProps> = ({ card }) => {
    
    const navigate = useNavigate();
    const { setCards } = useContext(CardsContext)
    const { filterCards, setFilterCards } = useContext(FilterCardsContext)

    const handleDelete = () => {      
        const newList = filterCards.filter((el) => el.id !== card.id);    
        setFilterCards(newList)
        setCards(newList)
        navigate('/')
    };


    return (
        <button onClick={handleDelete} className="btn-reset" title="Удалить">
            <span className="delete-btn" />
        </button>
    )
}