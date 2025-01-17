import { useContext, useEffect, useState } from "react";

import { CardsContext, FilterCardsContext } from "../../utils/Context";


export const Choice = () => {

    const { cards } = useContext(CardsContext)
    const { setFilterCards } = useContext(FilterCardsContext)
    const [valueName, setValueName] = useState('')
    const [valueCategory, setValueCategory] = useState('')
    const [valuePriceMin, setValuePriceMin] = useState(0)
    const [valuePriceMax, setValuePriceMax] = useState(1000000000)

    useEffect(() => {
        const priceMin = isNaN(valuePriceMin) ? 1 : valuePriceMin;
        const priceMax = isNaN(valuePriceMax) ? 1000000000 : valuePriceMax;

        const filterCard = cards
            .filter(card => {
                return valueName ? card.name.toLowerCase().includes(valueName.toLowerCase()) : true;
            })
            .filter(card => {
                return valueCategory ? card.category.toLowerCase().includes(valueCategory.toLowerCase()) : true;
            })
            .filter(card => {
                return (valuePriceMin || valuePriceMax) ? card.price > priceMin && card.price < priceMax : true;
            })      
        setFilterCards(filterCard)
    }, [valueName, valueCategory, valuePriceMin, valuePriceMax])

    return (
        <form className="choice">
            <h2 className="choice__item choice__title">Поиск товара</h2>
            <label className="choice__item choice__label" htmlFor="">
                <p>Наименование</p>
                <input
                    onChange={(event) => setValueName(event.target.value)}
                    className="input"
                    type="text" />
            </label>
            <label className="choice__item choice__label" htmlFor="">
                <p>Категория</p>
                <input
                    onChange={(event) => setValueCategory(event.target.value)}
                    className="input"
                    type="text" />
            </label>
            <label className="choice__item choice__label price flex" htmlFor="">
                <p>Цена</p>
                <div className="price__descr price__descr-top flex">
                    <p> от:</p>
                    <input
                        onChange={(event) => setValuePriceMin(parseFloat(event.target.value))}
                        className="price__input input"
                        type="text" />
                </div>
                <div className="price__descr flex">
                    <p>до:</p>
                    <input
                        onChange={(event) => setValuePriceMax(parseFloat(event.target.value))}
                        className="price__input input"
                        type="text" />
                </div>
            </label>
        </form>
    );
};


