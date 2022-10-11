import React from "react";
import toast, { Toaster } from "react-hot-toast";

const Questions = ({ questions }) => {
  const { id, correctAnswer, options, question } = questions;

  const handleOption = (option) => {
    console.log(option);
    if (option === correctAnswer) {
      //   alert('rr')
      toast.success('Successfully toasted!')
    } else {
        toast.error("This didn't work.")
    }
  };

  const notify = () => toast("here");

  return (
    <div className="shadow-lg max-w-2xl border border-rose-200 px-7 py-5 rounded-xl">
      <h3 className="text-xl font-semibold text-center mb-5">
        Quiz 1: {question}
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {options.map((option) => (
          <p
            onClick={() => handleOption(option)}
            key={id}
            className="cursor-pointer border rounded-md p-4 hover:bg-rose-100"
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
