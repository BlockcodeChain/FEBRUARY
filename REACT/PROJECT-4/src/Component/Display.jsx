import React, { useState } from 'react'

const Display = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [actionType, setActionType] = useState("");

  const handlePopup = (type) => {
    setActionType(type);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='w-full h-screen bg-black/80 flex items-center justify-center gap-8 relative'>

      <button
        onClick={() => handlePopup("edit")}
        className='border px-4 bg-green-500 text-white font-medium rounded-2xl py-2'
      >
        EDIT
      </button>

      <button
        onClick={() => handlePopup("delete")}
        className='border px-4 bg-red-500 text-white font-medium rounded-2xl py-2'
      >
        DELETE
      </button>

      {showPopup && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          
          <div className="bg-white p-6 rounded-xl w-80 relative text-center">
            
            {/* Cross Button */}
            <button 
              onClick={closePopup} 
              className="absolute top-2 right-3 text-xl font-bold"
            >
              ❌
            </button>

            <h2 className="text-lg font-semibold mb-4">
              {actionType === "edit"
                ? "Do you want to edit?"
                : "Do you want to delete?"}
            </h2>

            <div className="flex justify-center gap-4">
              <button
                onClick={closePopup}
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                Yes
              </button>

              <button
                onClick={closePopup}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg"
              >
                No
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default Display;
