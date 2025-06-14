import React from 'react'

const Input = ({cr,setPreAmt,amt}) => {
  return (
    <div>
       <input type="number" value={amt} placeholder={cr} onChange={(e) =>setPreAmt(e.target.value)} className=' text-[#3C3C3C] rounded bg-[#efefef] p-3 text-md font-bold'></input>

    </div>
  )
}

export default Input
