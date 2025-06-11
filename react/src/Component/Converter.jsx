import React from "react";
import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";
import Input from "./Input";
import Select from "./Select";

const Converter = () => {
  const { curData, preCur, setPreCur,handleChange, setNextCur, nextAmt, nextCur } =
    useContext(CurrencyContext);
  return (
    <div>
      <div class="flex ">
        <Input cr={preCur} handleChange={handleChange} />
        <Select curData={curData} cur={preCur} setCur={setPreCur} />
      </div>

      <br />
      <br />
      <button className="rounded border py-1 px-4">switch</button>
      <br />
      <br />
      <div class="flex ">
        <Input cr={nextCur} amt={nextAmt} />
        <Select curData={curData} setCur={setNextCur} cur={nextCur} />
      </div>
    </div>
  );
};

export default Converter;
