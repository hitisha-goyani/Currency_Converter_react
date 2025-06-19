import React from "react";
import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";
import Input from "./Input";
import Select from "./Select";
import { 
  RiArrowUpDownLine
} from "@remixicon/react";
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
      <h1 className="text-5xl my-15 font-bold text-center text-[#1F2261]">
        Currency Converter
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 gap-5  ">
      
        <div className=" shadow-2xl bg-white  rounded-2xl pt-10 px-5 ">
          <h1 className="text-[#989898]">Amount</h1>
          <div class="flex ">
            <Select curData={curData} cur={preCur} setCur={setPreCur} />
            <Input cr={preCur} setPreAmt={setPreAmt} />
          </div>
          <br />

          <div class="inline-flex items-center justify-center w-full">
            <hr class="w-85 h-1 my-8 text-[#989898]" />
            <button
              className="rounded-full absolute border p-2  bg-[#26278D] text-white"
              onClick={dataSwitch}
            >
              <RiArrowUpDownLine size={25}></RiArrowUpDownLine>
            </button>
          </div>

          <br />

          <h1 className="text-[#989898] mb-2">Converted Amount</h1>
          <div class="flex ">
            <Select curData={curData} setCur={setNextCur} cur={nextCur} />
            <Input cr={nextCur} amt={nextAmt} />
          </div>
        </div>

        <div className="w-2xl shadow-2xl bg-white rounded-2xl p-4 ">
          <ApexChart />
        </div>
        </div>
      
     
     
    </>
  );
};

export default Converter;
