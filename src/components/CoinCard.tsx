import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useAppSelector } from "../hooks/useSelector";
import { CoinData } from "../models/coinDataModels";

function CoinCard({ data, fav }: any) {
  const { addFavourite, removeFavourite } = useActions();
  const [visible, setVisible] = useState(false);
  const { favourites } = useAppSelector((state) => state.coingecko);

  const likeCard = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    addFavourite(data);
  };

  const unlikeCard = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    removeFavourite(data);
  };

  const isFav = favourites.some((f: CoinData) => f.name === data?.name);

  return (
    <article className="card">
      <div className="card__info">
        <img src={data.logo} alt={data.name} className="card__logo"></img>
        <p className="card__title">{data.name}</p>
        
        {fav ? (
          <button className="card__delete" onClick={unlikeCard}></button>
        ) : (
          <button
            className={`card__like ${
              isFav ? "card__like_red" : "card__like_white"
            }`}
            onClick={isFav ? unlikeCard : likeCard}
          ></button>
        )}
      </div>
      <p className="card__price">{data.currentPrice} &#x24;</p>
      <p
        className={`card__description ${
          visible ? "card__description_visible" : ""
        }`}
        onClick={() => setVisible(!visible)}
      >
        {data.description.replace(/<(\/?[^>]+)>/g, "")}
      </p>
    </article>
  );
}

export default CoinCard;
