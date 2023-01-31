import { useParams } from "react-router-dom";
import CoinCard from "../components/CoinCard";
import { useGetCoinDataQuery } from "../store/api/coingecko.api";

function CoinPage() {
  const { id } = useParams();
  const {
    isError,
    isLoading: areCoinDataLoad,
    data: coinData,
  } = useGetCoinDataQuery(id!);

  return (
    <section className="coin-page">
      <h1 className="coin-page__title">{coinData?.name}</h1>

      {areCoinDataLoad && <p className="coin-page__loading">Loading...</p>}
      {isError && <p className="coin-page__error">Failed to load</p>}

      {coinData && <CoinCard data={coinData} key={id} />}
    </section>
  );
}

export default CoinPage;
