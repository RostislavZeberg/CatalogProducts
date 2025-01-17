import { Link, useLocation } from "react-router-dom";

import { ButtonFavorite } from '../../components/ButtonFavorite';
import { ButtonDelete } from '../../components/ButtonDelete';
import { ButtonEdit } from '../../components/ButtonEdit/ButtonEdit';
import empty from '../../../public/empty_img.jpeg'
import { Card } from "../../utils/Interface";
import { memo } from "react";

interface PageCardProps {
    card: Card
}

export const PageCard = memo(() => {

    const location = useLocation();
    let { card } = location.state as PageCardProps;

    if (card === undefined) {
        card = location.state
    }

    var nf = new Intl.NumberFormat();
    nf.format(card.price);

    return (
        <div className="page-card">
            <Link to={"/"} className="page-card__link">Вернуться к каталогу товаров</Link>
            <div className="page-card__descr descr flex">
                <div className="descr__btn card__btn flex">
                    <ButtonFavorite card={card} />
                    <ButtonEdit card={card} />
                    <ButtonDelete card={card} />
                </div>
                <p className="descr__item">Наименование: <span className='card__value'>{card.name}</span></p>
                <p className="descr__item">Категория: <span className='card__value'>{card.category}</span></p>
                <p className="descr__item">Цена: <span className='card__value'>{nf.format(card.price)} <span>₽</span> </span></p>
                <p className="descr__item">Описание: <span className='card__value'>{card.description}</span></p>
                <p className="descr__item">Изображение:</p>
                <img
                    className="descr__img"
                    src={card.image ? card.image : empty}
                    alt=""
                />
            </div>
        </div>
    )
})