
import { useState } from 'react';
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount,setAmount] = useState(0);
  const [from,setFrom] = useState("usd");
  const [to,setTo] = useState("inr");
  const [convertedAmount , setCovertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from) || {}; // fallback to empty object
    const options = Object.keys(currencyInfo); // gives you an array of currency codes


  const swap = () =>{
    setFrom(to);
    setTo(from);
    setCovertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () =>{
    setCovertedAmount(amount* currencyInfo[to]);
  }
  const BackgroundImage = 'https://images.pexels.com/photos/31152265/pexels-photo-31152265/free-photo-of-autumn-leaves-and-rocky-mountain-landscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'

  return (
    <div
        className="w-full h-screen flex flex-wrap  justify-center items-center  bg-repeat bg-contain "
        style={{
            backgroundImage: `url('${BackgroundImage}')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyoptions={options}
                            onCurrencyChange={((currency) => setFrom(currency))}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}

                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyoptions={options}
                            onCurrencyChange={((currency) => setTo(currency))}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert  {from} to {to}
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App
