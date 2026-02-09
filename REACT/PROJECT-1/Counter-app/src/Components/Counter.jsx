import React, { useState } from 'react'
import { Plus ,Minus} from 'lucide-react';
const Counter = () => {
  const[count,setcount]=useState(0)
  return (
    <div className='w-full h-screen bg-black/90 flex items-center justify-center'>

    <div className='container w-150 h-96 border border-white/10 rounded-2xl shadow-sm shadow-sky-300 flex flex-col items-center'>
       <h2 className='flex justify-center items-center text-9xl text-white font-bold '>{count}</h2>
       <div className='border border-white/10 gap-30 px-10 my-20 w-80 h-20 rounded-2xl mx-auto flex  items-center'>
          <button onClick={()=>setcount(count+1)}className='rounded-full w-15 h-15 bg-black/95 shadow-sm shadow-gray-500  text-white flex items-center justify-center hover:bg-black/80 cursor-pointer  hover:shadow-white/90 '><Plus strokeWidth={4}/></button>
         <button onClick={()=>setcount(count-1)} className='rounded-full w-15 h-15 bg-black/95 shadow-sm shadow-gray-500 hover:bg-black/80 cursor-pointer  text-white flex items-center justify-center hover:shadow-white/90 '><Minus strokeWidth={4}/></button>
         
       </div>
       <div>
        <button className='text-white flex justify-center items-center  px-5 py-2 -mt-12 hover:bg-red-700 cursor-pointer shadow-sm hover:shadow-white/90 shadow-white rounded font-medium bg-red-600' onClick={()=>setcount(0)}>RESET</button>
       </div>
    </div>
    </div>
  )
}

export default Counter
