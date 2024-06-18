import React, { useState } from 'react'
import './Header.css'
import { countriesAPI } from '../../api/api'
import { getALLAC, getTextAC } from '../../store/store'

const region =['Ocenia','Europe','Africa','Asia','Americas']

const Header = ({dispatch,text}) => {
  const [open ,setOpen]=useState(false)
  return (
    <header>
    <div>
      <h4>countriesAPI</h4>
    </div>
    <div>
        {/* <button onClick={countriesAPI.getALL(dispatch)}>ALL</button> */}
        {
          region.map((el)=>{
            return <button onClick={()=>countriesAPI.getRegion(dispatch,el)}>{el}</button>
          })
        }
    </div>
    <div className='search'>
        <input value={text} onChange={(e)=>dispatch(getTextAC(e.target.value))}/>
        {
          open && <div className='ser'></div>
        }
        
    </div>
    </header>
  )
}

export default Header