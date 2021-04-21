import React, {useEffect, useState} from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow'

const BASE_URL = 'https://api.exchangeratesapi.io/latest'

function App() {

  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [amount, setAmount] = useState(1)  //sheyvanili ricxvi
  const [amountInFromCurrrency, setAmountInFromCurrrency] = useState (true) //amit varkvevt pirvelidan meoreshi gaddagvyavs tu piriqit
  const [exchangeRate, setExchangeRate] = useState() //valutis kursi

  let toAmount, fromAmount
  
  if(amountInFromCurrrency){
    fromAmount = amount
    toAmount = amount * exchangeRate
  }
  else{
    toAmount = amount
    fromAmount = amount / exchangeRate
  }


  useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      const firstCurrency = Object.keys(data.rates)[0]
      setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      setFromCurrency(data.base)
      setToCurrency(firstCurrency)
      setExchangeRate(data.rates[firstCurrency])
    })
  }, [])

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toCurrency]))
    }
  }, [fromCurrency, toCurrency])

  function amountFromChangeHandler(e){
    setAmount(e.target.value)
    setAmountInFromCurrrency(true)
  }
  function amountToChangeHandler(e){
    setAmount(e.target.value)
    setAmountInFromCurrrency(false)
  }



  return (
    <div>
      <h1>Conventor</h1>
      <CurrencyRow 
      currencyOptions = {currencyOptions} 
      selectedCurrency = {fromCurrency} 
      onChangeCurrency = {e => setFromCurrency(e.target.value)}
      amountChangeHandler = {amountFromChangeHandler}
      amount = {fromAmount}
      />
      <div className = "equals">=</div>
      <CurrencyRow 
      currencyOptions = {currencyOptions} 
      selectedCurrency = {toCurrency} 
      onChangeCurrency = {e => setToCurrency(e.target.value)} 
      amountChangeHandler = {amountToChangeHandler}
      amount = {toAmount}
      />

      <h4>Created with love By gio dogadze and WebDevSimplified</h4>
    </div>
  )
}

export default App
