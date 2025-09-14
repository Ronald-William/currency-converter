import React from "react"

function InputBox({ 
  label, 
  amount, 
  currencyOptions = [], 
  onCurrencyChange, 
  selectCurrency, 
  onAmountChange,
  amountDisable = false 
}) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
      <label className="text-gray-700 text-sm font-medium mb-2 block">
        {label}
      </label>
      <div className="flex">
        <input
          className="outline-none w-full bg-transparent py-2 text-lg font-medium"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
        <select
          className="outline-none cursor-pointer bg-gray-100 rounded px-3 py-2 ml-3 text-sm font-medium"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
export default InputBox