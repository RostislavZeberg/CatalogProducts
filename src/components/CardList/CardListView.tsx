import { FC, memo } from "react"

import { CardView } from "../Card"
import { Card, CardsList } from "../../utils/Interface";


interface CardListViewProps {
    filterCards: CardsList
}

export const CardListView: FC<CardListViewProps> = memo(({ filterCards }) => {

    if (filterCards.length === 0) {
        return (
            <div className="flex" style={{alignItems: "center", justifyContent: "center", height: "100%"}}>
                <p style={{ textAlign: "center"}}>
                    Список товаров пуст
                </p>
            </div>
        )
    }

    return (
        <ul className="card-list__list list-reset flex">
            {filterCards.map((card: Card) => (
                <li key={card.id} className="card-list__item">
                    <CardView card={card} />
                </li>
            ))}
        </ul>
    )
});