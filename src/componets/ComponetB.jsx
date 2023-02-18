import React from 'react'
import {useDispatch} from "react-redux" 
import action from '../Redux/action'

export const ComponetB = () => {
    const  str = useDispatch()
    const textField=(e)=>{
       str(action(e.target.value))

    }
  return (
    <>
    <div style={{border:"1px solid red"}}>
        <h1>ComponetB</h1>
       inputFeild <input type="text" onChange={textField}  placeholder="Enter a text"/>
       <br />
       <br />
    </div>
    <br />
    </>
  )
}
