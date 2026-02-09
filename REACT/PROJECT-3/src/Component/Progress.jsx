import React from 'react'

const Progress = ({ current, total }) => {

  const percent = Math.floor((current / total) * 100)

  return (
    <div className='w-full my-3'>
      <div className='bg-gray-700 rounded h-2'>
        <div
          style={{ width: `${percent}%` }}
          className='bg-green-500 h-2 rounded transition-all'
        />
      </div>

      <p className='text-sm mt-1'>
        Question {current} / {total}
      </p>
    </div>
  )
}

export default Progress
