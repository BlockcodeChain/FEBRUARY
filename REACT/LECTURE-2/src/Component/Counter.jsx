import React from 'react'

const Counter = ({name,age,title}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{title}</h3>
      <hr />
    </div>
  )
}

export default Counter
