
import { useState } from 'react';
const ColorSwitch = () => {
  const [color ,setcolor]=useState("");
  const randomColor=`rgb(${Math.floor(Math.random()*256)},
                         ${Math.floor(Math.random()*200)}, 
                         ${Math.floor(Math.random()*250)})`
  const handleclick=()=>{
    setcolor(randomColor)
  }
  return (
    <div  className='w-full h-screen bg-black/87 flex justify-center items-center flex-col'>
      <div className={`w-100 h-60 bg-white rounded-2xl `} style={{ backgroundColor: color }}>
           {/* <h1 className='text-white flex justify-center items-center '>{randomColor}</h1> */}
           
      </div>
      <button className={`bg-gray-200 my-10 py-2 px-3 rounded-2xl font-medium text-2xl cursor-pointer shadow-sm shadow-blue-300 hover:shadow-blue-400 text-white`} style={{ backgroundColor: color }} onClick={handleclick}>COLOR CHANGE</button>
    </div>
  )
}

export default ColorSwitch
