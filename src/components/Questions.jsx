import { EyeIcon } from "@heroicons/react/24/solid";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const Questions = ({ questions }) => {
  const { id, correctAnswer, options, question } = questions;

  let correct = 0;
  let wrong = 0;

  const handleOption = (option, e) => {
    if (option === correctAnswer) {
      correct = correct + 1;
      toast("Good Job!", {
        icon: "👏",
      });
      e.currentTarget.classList.add("bg-green-500", "text-white");
    } else {
      wrong = wrong + 1;
      toast.error("This didn't work.");
      e.currentTarget.classList.add("text-white", "bg-red-500");
    }
  };

  const handleEye = (ans) => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          Correct Answer is -
          <span className="text-lg font-semibold text-green-500">{ans}</span>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-rose-600 hover:text-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500"
          >
            Close
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="shadow-lg max-w-2xl border border-rose-200 px-7 py-5 rounded-xl">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold text-center mb-5 max-w-lg">
          <span className="font-bold">Quiz 1:</span> {question}
        </h3>
        <EyeIcon
          onClick={() => handleEye(correctAnswer)}
          className="w-6 mt-2 cursor-pointer hover:text-rose-600"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {options.map((option) => (
          <p
            onClick={(e) => handleOption(option, e)}
            key={id}
            className="cursor-pointer border rounded-md p-4 hover:border-3 hover:border-rose-400"
          >
            {option}
            <Toaster position="top-center" reverseOrder={false} />
          </p>
        ))}
      </div>
    </div>
  );
};

export default Questions;
