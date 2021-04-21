import React from 'react'

function CurrencyRow(props) {

    const {currencyOptions, selectedCurrency, onChangeCurrency,amountChangeHandler, amount} = props
    return (
        <div>
            <input type = "number" className = "input" value = {amount} onChange = {amountChangeHandler}/>
            <select value = {selectedCurrency} onChange = {onChangeCurrency}>
                {currencyOptions.map((currency) => (
                    <option key = {currency} value = {currency}>{currency}</option>
                ))}
            </select>
        </div>
    )
}

export default CurrencyRow
