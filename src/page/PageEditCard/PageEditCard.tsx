import { memo, useContext, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { CardsContext, FilterCardsContext } from "../../utils/Context";


export const PageEditCard = memo(() => {
    const navigate = useNavigate();

    const { setCards } = useContext(CardsContext)
    const { filterCards, setFilterCards } = useContext(FilterCardsContext)

    const location = useLocation();
    const { card } = location.state;
    const [valuePrice, setValuePrice] = useState(card.price)


    const changerPrice = () => {
        const newCard = filterCards.map((item) => {
            if (item.id === card.id) {
                location.state['card'].price = valuePrice
                return {
                    ...item,
                    price: valuePrice
                }
            }
            else {
                return item
            }
        })

        setCards(newCard)
        setFilterCards(newCard)
        navigate('/card',  { state: card })
    }

    const handleClick = () => {
        navigate('/')
    }

    return (
        <div>
            <button className="btn btn-reset" onClick={() => handleClick()}>Вернуться к каталогу товаров</button>
            <h2>Изменить данные карточки</h2>
            <div className="page-card">
                <div className="page-card__descr descr flex">
                    <div className="descr__btn card__btn flex">
                    </div>
                    <p className="descr__item">Наименование: <span className='card__value'>{card.title}</span></p>

                    <p className="descr__item">Цена: <span className='card__value'>{valuePrice} <span>₽</span> </span>
                    <label htmlFor="" style={{display:"block"}}>
                        Изменить цену:
                        <input
                            onChange={(event) => setValuePrice(parseFloat(event.target.value))}
                            type="text"
                            className="descr__item-input"
                        />
                    </label>
                    </p>
                    <p className="descr__item">Описание: <span className='card__value'>{card.description}</span></p>
                    <p className="descr__item">Категория: <span className='card__value'>{card.category}</span></p>

                    <img
                        className="descr__img" style={{marginBottom: "20px"}}
                        src={card.image ? card.image : "/src/assets/empty_img.webp"}
                        alt=""
                    />
                    <button onClick={() => changerPrice()}>Сохранить изменения</button>
                </div>
            </div>
        </div>
    )
})