import React from 'react'

const Input = ({cr,setPreAmt,amt}) => {
  return (
    <div>
       <input type="number" value={amt} placeholder={cr} onChange={(e) =>setPreAmt(e.target.value)} className='border border-slate-400 me-3 rounded'></input>

    </div>
  )
}

export default Input
