import React from 'react'

const Input = ({cr,setPreAmt,amt}) => {
  return (
    <div>
       <input type="number" value={amt} placeholder={cr} onChange={(e) =>setPreAmt(e.target.value)} className='border border-slate-400 rounded bg-[#EFEFEFEFEFEF] p-2'></input>

    </div>
  )
}

export default Input
