import React from 'react'
import { ReactComponent as MapGot } from "../../assets/test.svg";

export const Mapa = () => {
  
  return (
      <div className='container-mapa' style={{
        backgroundColor:'white'
      }}>
        <MapGot className='mapa'/>
      </div>
  )
}
