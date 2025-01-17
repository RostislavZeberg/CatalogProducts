import { memo, useContext, useEffect, useState } from 'react';

import { Choice } from '../../components/Choice';
import { SectionCardList } from '../../components/SectionCardList';
import { SectionHeader } from '../../components/SectionHeader';
import { CardsList } from '../../utils/Interface';
import { FavoriteContext, FilterCardsContext } from '../../utils/Context';

export const PageMain = memo(() => {
  const { filterCards } = useContext(FilterCardsContext)
  const { toggleMarkFavorite } = useContext(FavoriteContext)

  const [cardList, setCardList] = useState<CardsList>([])
  const [typeView, setTypeView] = useState<'full' | 'fav'>('full')

  useEffect(() => {
    if (typeView === 'full') {
      setCardList(filterCards);
    } else {
      const favoriteCards = filterCards.filter((el) => toggleMarkFavorite[el.id])
      setCardList(favoriteCards);
    }
  }, [typeView, filterCards])

  return (
    <div className="card-list">
      <SectionHeader typeView={typeView} setTypeView={setTypeView} />
      <div className="flex" style={{ margin: "0 auto", minHeight: 507 }}>
        <Choice />
        <SectionCardList cardList={cardList} />
      </div>
    </div>
  );
});
