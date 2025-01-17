import { FC, useEffect, useState } from "react"

import { CardListView } from "../CardList/CardListView"
import { PaginationView } from "../Pagination/PaginationView"
import { CardsList } from "../../utils/Interface"

interface SectionCardListProps {
    cardList: CardsList
}

export const SectionCardList: FC<SectionCardListProps> = ({ cardList }) => {

    const [cardPage, setCardPage] = useState(1)
    const [cardsPerPage] = useState(3)

    const lastCardIndex = cardPage * cardsPerPage
    const firstCardIndex = lastCardIndex - cardsPerPage

    let currentCardAll = cardList.slice(firstCardIndex, lastCardIndex)

    useEffect(() => {
        if (currentCardAll.length === 0) {
            setCardPage(1)
        }
    }, [currentCardAll.length])

    return (
        <div className='card-list__blok flex'>
            <CardListView filterCards={currentCardAll} />
            <PaginationView
                cardPage={cardPage}
                cardList={cardList}
                cardsPerPage={cardsPerPage}
                setCardPage={setCardPage} />
        </div>
    )
}