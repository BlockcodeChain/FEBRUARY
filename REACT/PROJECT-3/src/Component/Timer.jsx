import React, { useState, useEffect } from 'react'

const Timer = () => {
  const [leftTime, setLeftTime] = useState(65)

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftTime(prev => {
        if (prev <= 1) {
          clearInterval(interval)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Format MM:SS
  const minutes = Math.floor(leftTime / 60)
    .toString()
    .padStart(2, "0")

  const seconds = (leftTime % 60)
    .toString()
    .padStart(2, "0")

  return (
    <div className='bg-gray-800 px-4 py-2 rounded-xl shadow text-white'>
      🕒 Time : {minutes}:{seconds}
    </div>
  )
}

export default Timer
