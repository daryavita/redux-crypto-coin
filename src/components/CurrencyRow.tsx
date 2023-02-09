import Select from "react-select";
import { CurrencyRowProp } from "../models/models";

function CurrencyRow({
  amountValue,
  onChangeAmount,
  options,
  currency,
  onChangeCurrency,
  isError,
  isLoading,
}: CurrencyRowProp) {
    
  const optionStyles = {
    control: (styles: object, state: any) => ({
      ...styles,
      height: 50,
      boxShadow: state.isFocused && "0 0 1px #2BE080",
      border: state.isFocused ? "1px solid #2BE080" : "none",
      borderRadius: "8px",
      padding: "5px",
      background: "#F2F2F2",
      fontSize: "22px",
      lineHeight: "24px",
      "&:hover": {
        boxShadow: "0 0 2px #2BE080",
        cursor: "pointer",
      },
    }),
    option: (styles: object, state: any) => ({
      ...styles,
      background: state.isSelected
        ? "#2BE080"
        : state.isFocused
        ? "#b3fed6b8"
        : "",
    }),
  };

  return (
    <div className="converter__currency-row">
      <input
        type="number"
        className="converter__input-amount"
        value={amountValue}
        onChange={onChangeAmount}
      ></input>
      <Select
        options={options}
        value={currency}
        onChange={onChangeCurrency}
        noOptionsMessage={() =>
          (isError && "Failed to load") || (isLoading && "Loading")
        }
        styles={optionStyles}
      />
    </div>
  );
}

export default CurrencyRow;
