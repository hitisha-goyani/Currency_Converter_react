import React from 'react'


const Select = ({setCur,cur,curData}) => {

    let keys= Object.keys(curData)
  return (
    <div>
       <select value={cur} onChange={(e) =>setCur(e.target.value)}
          style={{ maxHeight: "500px" }}  className='border border-slate-400 rounded  me-3 '>
          {
            keys.map((ele)=>(
                <option value={ele}>{ele}</option>
            ))
          }
          </select>
    </div>
  )
}

export default Select
