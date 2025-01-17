import React, { memo } from "react"
import { Pagination } from "./Pagination"
import { ButtonPaginationPrev } from "../ButtonPaginationPrev"
import { ButtonPaginationNext } from "../ButtonPaginationNext"
import { CardsList } from "../../utils/Interface"

interface PaginationViewProps {
    cardPage: number,
    cardList: CardsList,
    cardsPerPage: number,
    setCardPage: React.Dispatch<React.SetStateAction<number>>
}

export const PaginationView = memo<PaginationViewProps>(({ cardPage, cardList, cardsPerPage, setCardPage }) => {

    const paginate = (pageNumber: React.SetStateAction<number>) => setCardPage(pageNumber)
    const nextPage = () => setCardPage((prev: number) => prev + 1)
    const prevPage = () => setCardPage((prev: number) => prev - 1)

    return (
        <div>
            {cardList.length > cardsPerPage ?
                <div className='card-list__paginate'>
                    <ButtonPaginationPrev cardPage={cardPage} prevPage={prevPage} />
                    <Pagination cardsPerPage={cardsPerPage} totalCards={cardList.length} paginate={paginate} cardPage={cardPage} />
                    <ButtonPaginationNext cardPage={cardPage} nextPage={nextPage} cardList={cardList} cardsPerPage={cardsPerPage} />
                </div>
                : <div></div>
            }

        </div>
    )
})