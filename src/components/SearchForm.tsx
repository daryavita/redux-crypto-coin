import { useDebounce } from "../hooks/useDebounce";
import { useSearchCoinsQuery } from "../store/api/coingecko.api";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SearchForm() {
  const [query, setQuery] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(query);
  const { isError, isLoading, data } = useSearchCoinsQuery(debounced, {
    skip: debounced.length === 0,
  });
  const resultContainer = useRef<HTMLAnchorElement>(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (evt: { target: HTMLInputElement }) => {
    const isValue = evt.target.value.length > 0;
    setQuery(evt.target.value);
    setValue(evt.target.value);
    setDropdown(isValue);
  };

  const handleSelection = (focusedIndex: number) => {
    if (data) {
      navigate(`/coins/${data[focusedIndex < 0 ? 0 : focusedIndex].id}`);
    }
    return;
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLFormElement> = (evt) => {
    const { key } = evt;
    if (data) {
      switch (key) {
        case "ArrowDown":
          setFocusedIndex(
            focusedIndex + 1 >= data!.length
              ? data!.length - 1
              : focusedIndex + 1
          );
          break;
        case "Tab":
          setFocusedIndex(
            focusedIndex + 1 >= data!.length
              ? data!.length - 1
              : focusedIndex + 1
          );
          break;
        case "ArrowUp":
          setFocusedIndex(focusedIndex - 1 < 0 ? 0 : focusedIndex - 1);
          break;
        case "Enter":
          evt.preventDefault();
          handleSelection(focusedIndex);
          break;
      }
    }
  };

  useEffect(() => {
    if (!resultContainer.current) return;

    resultContainer.current.scrollIntoView({
      block: "end",
      behavior: "smooth",
    });
    setValue(resultContainer.current.text);
  }, [focusedIndex]);

  return (
    <section className="search">
      <form
        className="search__form"
        tabIndex={1}
        onKeyDown={handleKeyDown}
        noValidate
      >
        <input
          className="search__input"
          name="keyWord"
          placeholder="Coin"
          type="text"
          autoComplete="off"
          onChange={handleChange}
          value={value}
          required
        ></input>

        {isError && <span className="search__error">Failed to load</span>}

        {dropdown && (
          <ul className="search__dropdown">
            {isLoading && <p className="search__loading">Loading</p>}
            {data?.map((coin, index) => (
              <Link
                className={`search__dropdown-item ${
                  index === focusedIndex && "search__dropdown-item_focused"
                }`}
                ref={index === focusedIndex ? resultContainer : null}
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
      </form>

      <hr className="search__line"></hr>
    </section>
  );
}

export default SearchForm;
