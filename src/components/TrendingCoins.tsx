import { Link } from "react-router-dom";
import { useGetTrendingCoinsQuery } from "../store/api/coingecko.api";

function TrendingCoins() {
  const { isError, isLoading, data } = useGetTrendingCoinsQuery();

  return (
    <section className="trending">
      <h2 className="trending__title">Trending now</h2>

      <div className="trending__content">
        <h3 className="trending__title-coins">Coins</h3>
        <h3 className="trending__title-cap">Market cap rank</h3>
      </div>

      {isLoading && <p className="trending__loading">Loading...</p>}
      {isError && <p className="trending__error">Failed to load</p>}

      {data?.map((coin) => (
        <div className="trending__content" key={coin.item.id}>
          <Link className="trending__link" to={`/coins/${coin.item.id}`}>
            <img
              src={coin.item.thumb}
              alt={coin.item.name}
              className="trending__coin-icon"
            ></img>
            {coin.item.name}
          </Link>
          <p className="trending__market-cap">{coin.item.market_cap_rank}</p>
        </div>
      ))}
    </section>
  );
}

export default TrendingCoins;
