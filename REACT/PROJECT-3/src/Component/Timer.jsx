import React, { useState, useEffect } from 'react'

const Timer = ({ time, onTimeUp, resetKey }) => {

  const [left, setLeft] = useState(time)

  useEffect(() => {
    setLeft(time)
  }, [resetKey])

  useEffect(() => {

    const id = setInterval(() => {

      setLeft(p => {
        if (p <= 1) {
          clearInterval(id)
          onTimeUp()
          return 0
        }
        return p - 1
      })

    }, 1000)

    return () => clearInterval(id)

  }, [resetKey])

  return (
    <div className='bg-gray-800 px-4 py-2 rounded-xl shadow'>
      🕒 Time : {left}s
    </div>
  )
}

export default Timer
