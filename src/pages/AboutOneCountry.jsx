import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { countriesAPI } from '../api/api'
const AboutOneCountry = ({dispatch,state}) => {
  const {name} = useParams()

  useEffect(()=>{
  countriesAPI.getOne(dispatch,name)


  },[])

  return (
    <div>
{
    state.country.map((Oneel)=>{
        return(
            <h4>{Oneel.name.common}</h4>
        )
    })
}
    </div>
  )
}

export default AboutOneCountry