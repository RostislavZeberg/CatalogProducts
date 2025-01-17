import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PageMain } from './page/PageMain'
import { PageCard } from './page/PageCard'
import { PageAddCard } from './page/PageAddCard';
import { PageEditCard } from './page/PageEditCard';
import { CardsList } from './utils/Interface';
import { getInitialCards } from './utils/localStorageService';
import { CardsContext, FavoriteContext, FilterCardsContext } from './utils/Context';
import './App.scss'

export const App = () => {
  const [toggleMarkFavorite, setToggleMarkFavorite] = useState({});
  const [cards, setCards] = useState<CardsList>([]);
  const [filterCards, setFilterCards] = useState<CardsList>([]);

  useEffect(() => {
    const dataCards = getInitialCards();
    if (dataCards) {
      setCards(dataCards);
      setFilterCards(dataCards);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className='main'>
        <FavoriteContext.Provider value={{ toggleMarkFavorite, setToggleMarkFavorite }}>
          <CardsContext.Provider value={{ cards, setCards }}>
            <FilterCardsContext.Provider value={{ filterCards, setFilterCards }}>
              <Routes>
                <Route path="/" element={<PageMain />} />
                <Route path={"/card"} element={<PageCard />} />
                <Route path={"/add"} element={<PageAddCard />} />
                <Route path={"/edit"} element={<PageEditCard />} />
              </Routes>
            </FilterCardsContext.Provider>
          </CardsContext.Provider>
        </FavoriteContext.Provider>
      </div>
    </BrowserRouter>
  )
}

export default App