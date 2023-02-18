import React from 'react'
import { ComponetB } from './ComponetB'
import { ComponetC } from './ComponetC'

export const ComponetA = () => {
  return (
    <div  >
        <ComponetB/>
        <br />
        <hr />
        <ComponetC/>

    </div>
  )
}
