import React from "react";
import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";
import Input from "./Input";
import Select from "./Select";
import { RiArrowLeftRightFill, RiHeartFill } from "@remixicon/react";


const Converter = () => {
  const { curData, preCur, setPreCur, setNextCur, nextAmt, nextCur, setPreAmt,dataSwitch } =
    useContext(CurrencyContext);
  return (
    <div className="flex">
      <div class="flex border border-slate-500 p-3 rounded shadow-2xl">
     
        <h3 className="me-2">From</h3>
        <Input cr={preCur} setPreAmt={setPreAmt}  />
        <Select curData={curData} cur={preCur} setCur={setPreCur} />
      </div>

      <br />
      <br />
     <div className="mx-4 my-2">
      <button className="rounded border py-1 px-4" onClick={dataSwitch}><RiArrowLeftRightFill size={25}></RiArrowLeftRightFill></button>
     </div>
      
      <br />
      <br />
      <div class="flex border border-slate-500 p-3 rounded shadow-2xl">
         <h3 className="me-2">To</h3>
        <Input cr={nextCur} amt={nextAmt} />
        <Select curData={curData} setCur={setNextCur} cur={nextCur} />
      </div>
    </div>
  );
};

export default Converter;
