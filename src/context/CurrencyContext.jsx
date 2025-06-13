import React, { Children, createContext, useEffect, useState } from "react";
import axios from "axios";
import { use } from "react";

export const CurrencyContext = createContext();

const CurrencyContextProvider = ({ children }) => {
  const [curData, setCurData] = useState({});
  const [preCur, setPreCur] = useState("usd");
  const [nextCur, setNextCur] = useState("inr");
  const [preAmt, setPreAmt] = useState(0);
  const [nextAmt, setNextAmt] = useState(0);

  const [key, setKey] = useState([]);
  const [value, setValue] = useState([]);

  const api_url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${preCur}.json`;

  async function getCurrency() {
    let data = await axios.get(api_url);

    await setCurData(data.data[preCur]);
    await handleConvert();
  }

  useEffect(() => {
    getCurrency();
  }, [preCur]);

  useEffect(() => {
    handleConvert();
  }, [preAmt, curData, nextCur]);

  function handleConvert() {
    setNextAmt(preAmt * curData[nextCur]);
    setKey(Object.keys(curData).slice(0, 5));
    setValue(Object.values(curData).slice(0, 5));
  }

  function dataSwitch() {
    setPreCur(nextCur);
    setNextCur(preCur);
    setPreAmt(nextAmt);
  }

  return (
    <CurrencyContext.Provider
      value={{
        curData,
        setPreCur,
        preCur,
        setNextAmt,
        setNextCur,
        nextAmt,
        dataSwitch,
        nextCur,
        setPreAmt,
        key,
        value,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContextProvider;

// export const currency = ()=>{

//   return useContext(CurrencyContext)
// }
