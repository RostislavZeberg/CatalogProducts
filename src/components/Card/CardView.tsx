import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import { ButtonFavorite } from '../ButtonFavorite';
import { ButtonDelete } from '../ButtonDelete';
import { ButtonEdit } from '../ButtonEdit/ButtonEdit';
import { Card } from '../../utils/Interface';

interface CardViewProps {
  card: Card
}

export const CardView: FC<CardViewProps> = memo(({ card }) => {  

  var nf = new Intl.NumberFormat(); 

  return (
    <div className="card flex">
      <div className="card__btn flex">
        <ButtonFavorite card={card} />
        <ButtonEdit card={card} />
        <ButtonDelete card={card} />
      </div>
      <Link to={`/card`} state={{ card: card }} className='card__link'>
        <p className="card__title">Наименование: <span className='card__value card__value-title'>{card.name}</span></p>
        <p className="card__title">Цена: <span className='card__value'>{nf.format(card.price)} <span>₽</span> </span></p>
        <p className="card__title">Категория: <span className='card__value'>{card.category}</span></p>
        <p className="card__title">Описание: <span className='card__value card__value-descr'>{card.description}</span></p>
      </Link>
    </div>
  );
});