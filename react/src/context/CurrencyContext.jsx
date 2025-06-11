import React, { Children, createContext, useEffect, useState } from "react";
import axios from "axios";

export const CurrencyContext = createContext();

const CurrencyContextProvider = ({ children }) => {
  const [curData, setCurData] = useState({});
  const [preCur, setPreCur] = useState("usd");
    const [nextCur, setNextCur] = useState("inr");
  const [nextAmt, setNextAmt] = useState(0)

  const api_url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${preCur}.json`;

  async function getCurrency() {
    let data = await axios.get(api_url);

    setCurData(data.data[preCur]);
  }

  useEffect(()=>{
    getCurrency();
  },[])

  function handleChange(e){
    setNextAmt(e.target.value*curData[nextCur])
  }


  return(
  <CurrencyContext.Provider value={{curData,setPreCur,handleChange,preCur,setNextAmt,setNextCur,nextAmt,nextCur}}>
    {children}</CurrencyContext.Provider>) 
};

export default CurrencyContextProvider;

// export const currency = ()=>{

//   return useContext(CurrencyContext)
// }
