import React from 'react'

const Input = ({cr,handleChange,amt}) => {
  return (
    <div>
       <input type="number" value={amt} placeholder={cr} handleChange={handleChange} className='border me-3'></input>

    </div>
  )
}

export default Input
