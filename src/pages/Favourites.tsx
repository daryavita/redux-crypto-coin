import CoinCard from "../components/CoinCard";
import { useActions } from "../hooks/useActions";
import { useAppSelector } from "../hooks/useSelector";
import { CoinData } from "../models/coinDataModels";

function Favourites() {
  const { favourites } = useAppSelector((state) => state.coingecko);
  const { resetFavourite } = useActions();

  const resetFav = () => {
    resetFavourite();
  };

  return (
    <section className="fav">
      <h1 className="fav__title">Wishlist</h1>

      {favourites.length === 0 && (
        <p className="fav__sub-text"> Favorites not added </p>
      )}

      {favourites?.map((fav: CoinData) => (
        <CoinCard data={fav} key={fav.id} fav={true} />
      ))}
      <p className="fav__reset-text">
        Remove everything from the wishlist?{" "}
        <span onClick={resetFav} className="fav__reset-link">
          Yes
        </span>
      </p>
    </section>
  );
}

export default Favourites;
