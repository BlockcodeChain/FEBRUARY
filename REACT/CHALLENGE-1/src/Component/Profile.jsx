import React, { useState } from 'react'
import { FaLinkedin, FaYoutube, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";

const Profile = () => {

  const [subText, setSubText] = useState("Subscribe");
  const [likes, setLikes] = useState(0);

  const names = [
    "Rahul","Aman","Priya","Sneha","Rohan","Neha",
    "Ishi","Sam","Goli","Tussie","Coder","Phonix",
    "Eglionfox","Lion","Fox"
  ];

  const hobbies = [
    "Coding & Creative",
    "Gaming & Minecraft",
    "Reading & Personality",
    "Travel & Fun",
    "Music & Dancing",
    "Cricket & Ludo",
    "Cooking",
    "Sleeping & Thinking"
  ];

  const username = names[Math.floor(Math.random() * names.length)];
  const hobby = hobbies[Math.floor(Math.random() * hobbies.length)];

  // Functions
  const handleSubscribe = () => {
    setSubText(subText === "Subscribe" ? "Subscribed" : "Subscribe");
  };

  const handleShare = () => {
    alert("Profile Shared Successfully 🚀");
  };

  const handleChat = () => {
    alert(`Start chatting with ${username} 💬`);
  };

  return (
    <div className='w-full h-screen flex items-center justify-center bg-gray-100'>

      <div className='w-110 h-130 bg-white shadow-xl border rounded-3xl border-gray-200 relative'>

        {/* Header */}
        <div className='w-full h-40 bg-blue-500 rounded-t-3xl relative'>
          <div className='absolute -bottom-12 left-1/2 -translate-x-1/2 border-4 border-blue-500 rounded-full'>
            <img
              src="https://i.pravatar.cc/150"
              className='w-30 h-30 rounded-full border-4 border-white object-cover shadow-md'
            />
          </div>
        </div>

        {/* Content */}
        <div className='flex flex-col items-center mt-16 px-4'>

          {/* ✅ FIXED GRADIENT */}
          <h1 className='
            text-5xl font-bold
            bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500
            bg-clip-text text-transparent
            tracking-wide
          '>
            {username}
          </h1>

          <h3 className='text-xl text-gray-600 mt-2'>
            {hobby}
          </h3>

          {/* Social Icons */}
          <div className='flex gap-8 mt-6 text-3xl'>

            <a className='text-blue-600 hover:scale-110 transition cursor-pointer'>
              <FaLinkedin />
            </a>

            <a className='text-red-600 hover:scale-110 transition cursor-pointer'>
              <FaYoutube />
            </a>

            <a className='text-gray-800 hover:scale-110 transition cursor-pointer'>
              <FaGithub />
            </a>

            <a className='text-black hover:scale-110 transition cursor-pointer'>
              <FaSquareXTwitter />
            </a>

          </div>

          {/* ❤️ LIKE — 💬 CHAT — 🔗 SHARE */}
          <div className='flex gap-10 mt-7 text-2xl'>

            <div
              onClick={() => setLikes(likes + 1)}
              className='flex flex-col items-center hover:text-red-500 transition cursor-pointer'
            >
              <FaRegHeart />
              <span className='text-sm'>{likes} Like</span>
            </div>

            <div
              onClick={handleChat}
              className='flex flex-col items-center hover:text-blue-500 transition cursor-pointer'
            >
              <LuMessageCircle />
              <span className='text-sm'>Chat</span>
            </div>

            <div
              onClick={handleShare}
              className='flex flex-col items-center hover:text-green-600 transition cursor-pointer'
            >
              <FaRegShareSquare />
              <span className='text-sm'>Share</span>
            </div>

          </div>

          {/* Buttons */}
          <div className='flex gap-7 mt-8'>

            <button
              onClick={handleSubscribe}
              className='px-5 py-2 rounded-full bg-red-500 text-white text-lg font-medium hover:bg-red-600 transition'
            >
              {subText}
            </button>

            <button
              onClick={handleChat}
              className='px-5 py-2 rounded-full border bg-blue-400 text-white text-lg transition hover:bg-blue-500'
            >
              Message
            </button>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Profile
