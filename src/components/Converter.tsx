import { useState } from "react";
import { MarketData, options } from "../models/models";
import {
  useGetMarketDataQuery,
  useGetSupportedCurrenciesQuery,
} from "../store/api/coingecko.api";
import CurrencyRow from "./CurrencyRow";

function Converter() {
  const [fromCurrency, setFromCurrency] = useState({
    value: "bitcoin",
    label: "btc",
  });
  const [toCurrency, setToCurrency] = useState({
    value: "usd",
    label: "usd",
  });
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  const {
    isError: isErrorMarketData,
    isLoading: isLoadingMarketData,
    data: marketData,
  } = useGetMarketDataQuery(toCurrency.value);
  const {
    isError: isErrorSupportedCurrencies,
    isLoading: isLoadingSupportedCurrencies,
    data: supportedCurrencies,
  } = useGetSupportedCurrenciesQuery();

  const exchangeRate =
    marketData &&
    marketData.filter((f: MarketData) => f.id === fromCurrency.value)[0]
      .current_price;

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  function handleFromAmountChange(evt: { target: HTMLInputElement }) {
    setAmount(parseFloat(evt.target.value));
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(evt: { target: HTMLInputElement }) {
    setAmount(parseFloat(evt.target.value));
    setAmountInFromCurrency(false);
  }

  const handleFromChangeOption = (value: options) => {
    value && setFromCurrency({ value: value.value, label: value.label });
  };

  const handleToChangeOption = (value: options) => {
    value && setToCurrency({ value: value.value, label: value.label });
  };

  const optionsFromCurrency =
    marketData &&
    marketData?.map((coin: MarketData) => ({
      value: coin.id,
      label: coin.symbol,
    }));

  const optionsToCurrency =
    supportedCurrencies &&
    supportedCurrencies?.map((coin: string) => ({
      value: coin,
      label: coin,
    }));

  return (
    <section className="converter">
      <h2 className="converter__title">Convert</h2>

      <CurrencyRow
        amountValue={fromAmount}
        onChangeAmount={handleFromAmountChange}
        options={optionsFromCurrency}
        currency={fromCurrency}
        onChangeCurrency={handleFromChangeOption}
        isError={isErrorMarketData}
        isLoading={isLoadingMarketData}
      />

      <div className="converter__equal">=</div>

      <CurrencyRow
        amountValue={toAmount || amount}
        onChangeAmount={handleToAmountChange}
        options={optionsToCurrency!}
        currency={toCurrency}
        onChangeCurrency={handleToChangeOption}
        isError={isErrorSupportedCurrencies}
        isLoading={isLoadingSupportedCurrencies}
      />
    </section>
  );
}

export default Converter;
