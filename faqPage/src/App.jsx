import React, { useState } from 'react'
import './App.css'
import {QandA} from './data.js'
import Questions from './Questions'

const App = () => {
  
  
  return (
    <>
      <div className='Main-Containor'>
        <div className='FAQ-Containor'>
        <div className='Heading-FAQ'>FAQ</div>
        {QandA.map((d)=>(<Questions key={d.question} {...d} />))}
        </div>
      </div>
    </>
  )
}
export default App
