import React, { FC } from "react";

interface PaginationViewProps {
    cardsPerPage: number,
    totalCards: number,
    paginate: (pageNumber: React.SetStateAction<number>) => void,
    cardPage: number,
}

export const Pagination:FC<PaginationViewProps> = ({ cardsPerPage, totalCards, paginate, cardPage }) => {
    const pageNumbers: number[] = []

    for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <div className="pagination flex">
                {
                    pageNumbers.map(number => (
                        <button
                            className={cardPage === number ? 
                                "pagination__number pagination__number-active btn-reset" : 
                                "pagination__number btn-reset"}
                            key={number}
                            onClick={() => paginate(number)}
                        >
                            {number}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}