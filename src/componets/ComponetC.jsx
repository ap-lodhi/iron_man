import React from 'react'
import { useSelector } from 'react-redux'

export const ComponetC = () => {
    const output = useSelector((state)=>state.text);
    // console.log(output)
  return (

    <div style={{border:"1px solid blue"}}>
          <div >
     
      <br/>
      <h1>ComponetC</h1>
      <h1>output </h1>
      <h3 > {output}</h3>
     
    </div>
    </div>
  )
}
