import React, { useState } from 'react'
import Timer from './Timer'
import Ques from './Ques'

const Quiz = () => {

  
  

  return (
    <div className='text-white w-full h-screen bg-black flex flex-col items-center py-10 gap-4'>

      <Timer/>

      <Ques />

    </div>
  )
}

export default Quiz
