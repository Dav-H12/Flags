import React from 'react';
import { NavLink } from 'react-router-dom';

const CauntryCart = ({key,elem}) => {
  return (
    
         <div className='cart'>
            <h4>{elem.name.common}</h4>
            <NavLink to={`/${elem.name.common}`}>

              <img src={elem.flags.png} />
            </NavLink>
          </div>
    
  )
}

export default CauntryCart
