import React from 'react'

const Result = ({ score, total, restart }) => {

  const percent = Math.floor((score / total) * 100)

  const getMessage = () => {
    if (percent >= 80) return "🔥 Excellent Performance!"
    if (percent >= 50) return "👍 Good! Keep Improving"
    return "😊 Need More Practice"
  }

  return (
    <div className='bg-gray-800 p-8 rounded-2xl text-center w-96 shadow-xl'>

      <h1 className='text-2xl font-bold mb-4'>Quiz Result</h1>

      <div className='text-5xl my-4'>{percent}%</div>

      <p>Score: {score} / {total}</p>

      <h2 className='mt-3 font-semibold'>
        {getMessage()}
      </h2>

      <button
        onClick={restart}
        className='mt-5 bg-green-600 hover:bg-green-700 px-4 py-2 rounded'
      >
        Try Again
      </button>

    </div>
  )
}

export default Result
