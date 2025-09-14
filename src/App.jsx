import { useState } from 'react'
import InputBox from "./components/inputBox";

import useCurrencyInfo from "./hooks/useCurrencyInfo"
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  
  function swap() {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  function convert() {
    setConvertedAmount(amount * (currencyInfo[to]))
  }

  return (
    <div
      className="w-full min-h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-center bg-fixed"
      
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-300 rounded-xl p-6 backdrop-blur-md bg-white/40 shadow-xl">
          <div>
            <div className="w-full mb-3">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            
            <div className="relative w-full h-0.5 my-4">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-lg bg-green-600 hover:bg-green-700 text-white px-4 py-2 font-medium transition-colors duration-200 shadow-lg"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            
            <div className="w-full mt-3 mb-6">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            
            <button 
              onClick={convert}
              className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()} 
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App
