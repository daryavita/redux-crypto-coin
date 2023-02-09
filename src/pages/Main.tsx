import Converter from "../components/Converter";
import SearchForm from "../components/SearchForm";
import TrendingCoins from "../components/TrendingCoins";

function Main() {
  return (
    <div className="main">
      <h1 className="main__title">Crypto Coin</h1>
      <SearchForm />
      <TrendingCoins />
      <Converter />
    </div>
  );
}

export default Main;
