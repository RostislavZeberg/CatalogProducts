import React from "react";
import { createContext } from "react";
import { CardsList } from "./Interface";

type CardsContextType = {
    cards: CardsList;
    setCards: (cards: CardsList) => void;
};
export const CardsContext = createContext<CardsContextType>({
    cards: [],
    setCards: () => { },
})

type ContextFiterCardsType = {
    filterCards: CardsList;
    setFilterCards: (filterCards: CardsList) => void;
};
export const FilterCardsContext = createContext<ContextFiterCardsType>({
    filterCards: [],
    setFilterCards: () => { },
})

type ToggleMarkFavoriteType = Record<number, boolean>;
interface FavoriteContextType {
    toggleMarkFavorite: ToggleMarkFavoriteType,
    setToggleMarkFavorite: React.Dispatch<React.SetStateAction<ToggleMarkFavoriteType>>
}
export const FavoriteContext = React.createContext<FavoriteContextType>({
    toggleMarkFavorite: {},
    setToggleMarkFavorite: () => { }
});


