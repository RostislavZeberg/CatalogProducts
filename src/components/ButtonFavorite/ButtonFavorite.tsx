import { FC, useContext } from "react";

import { Card } from "../../utils/Interface";
import { FavoriteContext } from "../../utils/Context";

interface ButtonFavoriteProps {
  card: Card
}

export const ButtonFavorite: FC<ButtonFavoriteProps> = ({ card }) => {

  const { toggleMarkFavorite, setToggleMarkFavorite } = useContext(FavoriteContext)

  return (
    <button
      onClick={() => setToggleMarkFavorite({
        ...toggleMarkFavorite,
        [card.id]: !toggleMarkFavorite[card.id]
      })}
      className="favorites btn-reset"
      title={toggleMarkFavorite[card.id] ? "В избранном" : "В избранное"}
    >
      <svg
        width="35"
        height="24"
        viewBox="0 0 20 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path className={toggleMarkFavorite[card.id] ? "favorite-btn" : "favorite-btn__btn-none"}
          d="M14.5 0C17.5376 0 20 2.5 20 6C20 13 12.5 17 10 18.5C7.5 17 0 13 0 6C0 2.5 2.5 0 5.5 0C7.35997 0 9 1 10 2C11 1 12.64 0 14.5 0Z"
          fill="#B4A9FF"
        />
      </svg>
    </button>
  )
};
