import React from "react";
import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";
import Input from "./Input";
import Select from "./Select";
import { RiArrowLeftRightFill, RiHeartFill } from "@remixicon/react";
import ApexChart from "./ApexChart";

const Converter = () => {
  const {
    curData,
    preCur,
    setPreCur,
    setNextCur,
    nextAmt,
    nextCur,
    setPreAmt,
    dataSwitch,
  } = useContext(CurrencyContext);
  return (
<>
    <h1 className='text-5xl my-10 font-bold text-center text-[#1F2261]' >Currency Converter</h1>
    <div className=" flex  justify-center grid-cols-2 sm:grid-cols-2 gap-15  ">
        
      <div className=" border border-amber-500 shadow-2xl rounded-2xl p-4">
        <div class="flex border border-slate-500 p-4 rounded shadow-2xl mt-10">
          <h3 className="me-2">From</h3>
          
          <Select curData={curData} cur={preCur} setCur={setPreCur} />
          <Input cr={preCur} setPreAmt={setPreAmt} />
        </div>
        <br />
     

        <div className="text-center">
          <button className="rounded border py-1 px-4" onClick={dataSwitch}>
            <RiArrowLeftRightFill size={25}></RiArrowLeftRightFill>
          </button>
        </div>
        <br />

        <div class="flex border border-slate-500 p-3 rounded shadow-2xl">
          <h3 className="me-2">To</h3>
         
          <Select curData={curData} setCur={setNextCur} cur={nextCur} />
           <Input cr={nextCur} amt={nextAmt} />
        </div>
      </div>

      <div className="w-2xl">
        <ApexChart />
      </div>

    </div>
    </>
  );
};


export default Converter;
