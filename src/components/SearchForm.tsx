import { useDebounce } from "../hooks/useDebounce";
import {
  useSearchCoinsQuery,
} from "../store/api/coingecko.api";
import { useState } from "react";
import { Link } from "react-router-dom";

function SearchForm() {
  const [query, setQuery] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(query);
  const { isError, isLoading, data } = useSearchCoinsQuery(debounced, {
    skip: debounced.length === 0,
  });

  const handleChange = (evt: { target: HTMLInputElement }) => {
    const isValue = evt.target.value.length > 0;
    setQuery(evt.target.value);
    setDropdown(isValue);
  };

  return (
    <section className="search">
      <form
        className="search__form"
        // onSubmit={submitSearchForm}
        noValidate
      >
        <input
          className="search__input"
          name="keyWord"
          placeholder="Coin"
          type="text"
          autoComplete="off"
          onChange={handleChange}
          value={query}
          required
        ></input>

        {isError && <span className="search__error">Failed to load</span>}

        <button
          className="search__btn"
          type="submit"
          aria-label="search"
        ></button>
      </form>

      {dropdown && (
        <ul className="search__dropdown">
          {isLoading && <p className="search__loading">Loading</p>}
          {data?.map((coin) => (
            <Link
              className="search__dropdown-item"
              key={coin.id}
              to={`/coins/${coin.id}`}
            >
              <img
                src={coin.thumb}
                alt={coin.name}
                className="search__coin-icon"
              ></img>
              {coin.name}
            </Link>
          ))}
        </ul>
      )}

      <hr className="search__line"></hr>
    </section>
  );
}

export default SearchForm;
