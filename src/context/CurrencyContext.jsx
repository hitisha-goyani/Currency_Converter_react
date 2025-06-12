import React, { Children, createContext, useEffect, useState } from "react";
import axios from "axios";

export const CurrencyContext = createContext();

const CurrencyContextProvider = ({ children }) => {
const [curData, setCurData] = useState({});
const [preCur, setPreCur] = useState("usd");
const [nextCur, setNextCur] = useState("inr");
const [preAmt,setPreAmt] = useState(0)
const [nextAmt, setNextAmt] = useState(0)

const api_url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${preCur}.json`;

useEffect(()=>{
 async function getCurrency() {
    let data = await axios.get(api_url);
    setCurData(data.data[preCur]);
 }
 getCurrency()
},[preCur])


  // async function getCurrency() {
  //   let data = await axios.get(api_url);

  //  await 
  //    await handleConvert();
  // }

  useEffect(()=>{
    // if(curData && curData[nextCur]){
      setNextAmt(preAmt * curData[nextCur])
    // }
  },[preCur, curData,nextCur,preAmt])

  // function handleChange(e){
  //   setNextAmt(e.target.value*curData[nextCur])
  // }

  // async function handleConvert(){
  // await setNextAmt(preAmt * curData[nextCur])
  // }
  // console.log(nextAmt)

  function dataSwitch(){
    setPreCur(nextCur)
    setNextCur(preCur)
    setPreAmt(nextAmt)
    
  }


  return(
  <CurrencyContext.Provider value={{curData,setPreCur,preCur,setNextAmt,setNextCur,nextAmt,dataSwitch,nextCur, setPreAmt}}>
    {children}</CurrencyContext.Provider>) 
};

export default CurrencyContextProvider;

// export const currency = ()=>{

//   return useContext(CurrencyContext)
// }
