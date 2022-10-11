import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { CheckBadgeIcon, XCircleIcon } from "@heroicons/react/24/solid";
import Questions from "./Questions";
const Quiz = () => {
  const {
    data: { logo, name, total },
    data: { questions },
  } = useLoaderData();

  const [w, setW] = useState(0);
  const [r, setR] = useState(0);
  console.log(w,r);

  let num = 0;

  return (
    <div className="text-[#f76f72] px-4 mt-10 sm:mt-12 md:mt-16">
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-2h-20 h-20 rounded-2xl bg-rose-400"
          src={logo}
          alt=""
        />
        <h3 className="text-2xl font-bold">Quiz of {name} </h3>
        <div className="text-center">
          <p>Total Questions: {total}</p>
          <div className="mt-3 gap-3">
            <span className="border border-rose-400 px-2 py-1 rounded-md pb-2 mr-3">
              <CheckBadgeIcon className="h-6 w-6 text-green-500 inline" />: {r}
            </span>
            <span className="border border-rose-400 px-2 py-1 rounded-md pb-2">
              <XCircleIcon className="h-6 w-6 text-red-500 inline" />: {w}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 place-items-center gap-5 mt-7">
        {questions.map((question) => {
          num = num + 1;

          return (
            <Questions
              key={question.id}
              questions={question}
              num={num}
              setW={setW}
              setR={setR}
              w={w}
              r={r}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Quiz;
