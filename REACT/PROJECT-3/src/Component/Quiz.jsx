import React, { useState } from 'react'
import Timer from './Timer'
import Ques from './Ques'

const Quiz = () => {

  const [resetKey, setResetKey] = useState(0)
  const [timeUp, setTimeUp] = useState(false)

  const handleTimeUp = () => setTimeUp(true)

  const resetTimer = () =>
    setResetKey(p => p + 1)

  return (
    <div className='text-white w-full h-screen bg-black flex flex-col items-center py-10 gap-4'>

      <Timer
        time={15}
        onTimeUp={handleTimeUp}
        resetKey={resetKey}
      />

      <Ques
        finishByTimer={timeUp}
        onQuestionChange={resetTimer}
      />

    </div>
  )
}

export default Quiz
