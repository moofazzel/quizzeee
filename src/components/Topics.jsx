import React from "react";
import { Link } from "react-router-dom";

const Topics = ({ topic }) => {
  const { id, name, logo, total } = topic;

  const handleQuiz = (id) => {
    console.log(id);
  }

  return (
    <div className="rounded-md shadow-md shadow-[#f76f7137] relative border border-rose-200">
      <div className="text-red-800 absolute top-0 left-0 font-semibold m-2 px-2 pb-[2px] rounded-md bg-[#f76f72]">
        <small>Total Questions: {total} </small>
      </div>
      <img
        src={logo}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 bg-[rgba(247,111,113,0.10)]"
      />
      <div className="flex flex-col justify-between p-5 space-y-6">
        <div className="space-y-2">
          <h2 className="text-[#f76f72] text-3xl font-semibold tracking-wide">
            {name}
          </h2>
        </div>
        <Link to={`/quiz/${id}`}>
          <button
            type="button"
            className="flex items-center justify-center w-full p-2 font-bold  border border-rose-400 tracking-wide rounded-md bg-[rgba(247,111,113,0.58)] text-rose-700 transition-all hover:bg-rose-400 hover:shadow-lg hover:text-rose-100"
          >
            Start Quiz
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Topics;
