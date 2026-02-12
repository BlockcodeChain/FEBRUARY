import React, { useState, useEffect } from 'react'
import questions from './Question.json'
import Result from './Result'
import Progress from './Progress'

const Ques = ({ finishByTimer, onQuestionChange }) => {

  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)

  const [selected, setSelected] = useState(null)
  const [status, setStatus] = useState("")
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    if (finishByTimer) setShowResult(true)
  }, [finishByTimer])

  const handleSelect = (option) => {

    setSelected(option)

    if (option === questions[index].answer) {
      setScore(s => s + 1)
      setStatus("correct")
    } else {
      setStatus("wrong")
    }

    setTimeout(() => {

      setSelected(null)
      setStatus("")

      if (index < questions.length - 1) {
        setIndex(i => i + 1)
        onQuestionChange()
      } else {
        setShowResult(true)
      }

    }, 1000)
  }

  const restart = () => {
    setIndex(0)
    setScore(0)
    setShowResult(false)
    onQuestionChange()
  }

  if (showResult) {
    return (
      <Result
        score={score}
        total={questions.length}
        restart={restart}
      />
    )
  }

  return (
    <div className='bg-gray-800 p-6 rounded-2xl w-105 shadow-xl'>

      <Progress
        current={index + 1}
        total={questions.length}
      />

      <h2 className='text-lg font-semibold mb-4'>
        {questions[index].question}
      </h2>

      <div className='flex flex-col gap-3'>

        {questions[index].options.map((opt, i) => {

          const color =
            selected === opt
              ? status === "correct"
                ? "bg-green-600"
                : "bg-red-600"
              : "bg-gray-700 hover:bg-gray-600"

          return (
            <button
              key={i}
              onClick={() => handleSelect(opt)}
              disabled={selected !== null}
              className={`py-2 rounded transition ${color}`}
            >
              {opt}
            </button>
          )
        })}

      </div>

    </div>
  )
}

export default Ques




// import { toast } from "sonner";
// import toast from "react-hot-toast";
// import { toast } from "react-toastify";
// const CopyButton = () => {
//   const handleCopy = async () => {
//     await navigator.clipboard.writeText("Hello Samridhi!");

//     toast.success("Copied to clipboard");
//   };

//   return (
//     <button
//       onClick={handleCopy}
//       className="px-4 py-2 bg-blue-600 text-white rounded-md"
//     >
//       Copy
//     </button>
//   );
// };

// export default CopyButton;










