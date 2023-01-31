import CoinCard from "../components/CoinCard";
import { useActions } from "../hooks/useActions";
import { useAppSelector } from "../hooks/useSelector";
import { CoinData } from "../models/coinDataModels";

function Favourites() {
    const { favourites } = useAppSelector((state) => state.coingecko);
    const {resetFavourite} = useActions()

    const resetFav = () => {
        resetFavourite();
    };

  return (
    <section className="fav">
      <h1 className="fav__title">Favourites</h1>
    
        {favourites.length === 0 && (
            <p className="fav__sub-text"> No favourites </p>
        )}


      {favourites?.map((fav: CoinData) => (
        <CoinCard data={fav} key={fav.id} fav={true}/>
      ))}
      <p className="fav__reset-text">
        Удалить все избранные?{" "}
        <span
          onClick={resetFav}
          className="fav__reset-link"
        >
          Да
        </span>
      </p>
    </section>
  );
}

export default Favourites;
