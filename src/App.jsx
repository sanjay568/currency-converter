import React, { useEffect, useState } from 'react'
import './App.css'
import Input from './Input';

function App() {
  
  const [amount,setAmount]=useState(0);
  const [from,setFrom]=useState(0);
  const [to,setTo]=useState(0);
  const [data,SetData]=useState([]);
  let [options,SetOptions]=useState([]);
  const [currency,setCurrency]=useState("usd");
  const fromRef= React.createRef();
  const toRef= React.createRef();
  const toRefValue= React.createRef();
  const fromRefValue= React.createRef();
  let toCurrencyValuefromarray = ""

  const fetchCurrencydata = (currency) => {

  fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/`+currency+`.json`)
    .then(res => res.json()).then((data) => {  
      console.log(data[currency]);
      toCurrencyValuefromarray= data[currency];
      SetData(data[currency]);
      SetOptions(Object.keys(data[currency]));
  }).then(() =>  fromChangeText(null));
  }

  useEffect(() => fetchCurrencydata('usd'),[]);

  const fromCurrency = (data) => {
       fetchCurrencydata(data);
  }

  const fromChangeText = (data_temp) => {
    let toVal = document.getElementById('toRefValue').value;
    let fromVal = document.getElementById('fromRefValue').value;
    let toSel= toRef.current.value;
    document.getElementById('toRefValue').value= data[toSel] * fromVal;
  }

  return (
  
    <>
      <h1>Currency Converter</h1>
      <><Input labelText="From" inputText={from} fromChangeText={fromChangeText} ref1="fromRefValue"  />
        <select ref={fromRef} onChange={(e) => fromCurrency(e.target.value)}>
        {options.map((d)=> <option  selected={d == 'usd'} key={d}>{d}</option>)}
        </select>
        <br/>
        <br/>
        <Input labelText="To" fromChangeText="" inputText="" ref1="toRefValue"  />
        <select ref={toRef}  onChange={(e) => fromChangeText(e.target.value)}>
            {options.map((d)=> <option selected={d == 'inr'} key={d}>{d}</option>)}
        </select></>
    </>
  )

 
}

export default App
