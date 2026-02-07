import React, { useState } from 'react'
import { Plus ,Minus} from 'lucide-react';
const Counter = () => {
  const[count,setcount]=useState(0)
  return (
    <div className='w-full h-screen bg-black/90 flex items-center justify-center'>

    <div className='container w-150 h-84 border border-white/10 rounded-2xl shadow-sm shadow-sky-300 '>
       <h2 className='flex justify-center items-center text-9xl text-white font-bold '>{count}</h2>
       <div className='border border-white/10 gap-30 px-10 my-20 w-80 h-20 rounded-2xl mx-auto flex  items-center'>
          <button onClick={()=>setcount(count+1)}className='rounded-full w-15 h-15 bg-black/95 shadow-sm shadow-gray-500  text-white flex items-center justify-center hover:bg-black/80 cursor-pointer  hover:shadow-white/90 '><Plus strokeWidth={4}/></button>
         <button onClick={()=>setcount(count-1)} className='rounded-full w-15 h-15 bg-black/95 shadow-sm shadow-gray-500 hover:bg-black/80 cursor-pointer  text-white flex items-center justify-center hover:shadow-white/90 '><Minus strokeWidth={4}/></button>
       </div>
    </div>
    </div>
  )
}

export default Counter
