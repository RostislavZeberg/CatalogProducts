import { Dispatch, memo, SetStateAction } from "react"
import { Link } from "react-router-dom"

interface SectionHeaderProps {
    typeView: string,
    setTypeView: Dispatch<SetStateAction<"full" | "fav">>
}

export const SectionHeader = memo<SectionHeaderProps>(({ typeView, setTypeView }) => {
    return (
        <div className="card-list__header flex">
            <h1 className='card-list__title'>Каталог товаров</h1>
            <Link to={"/add"} className='btn'>Добавить карточку</Link>
            <div>
                <button
                    onClick={() => setTypeView('full')}
                    className={typeView === 'fav' ? 'card-list__btn btn btn-reset' : 'card-list__btn btn-active btn-reset'}
                >Показать все товары</button>
                <button
                    onClick={() => setTypeView('fav')}
                    className={typeView === 'full' ? 'card-list__btn btn btn-reset' : 'card-list__btn btn-active btn-reset'}
                >Показать избранные товары</button>
            </div>
        </div>
    )
})