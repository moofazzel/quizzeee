import React, { useContext, PureComponent } from "react";
import { QuizContext } from "../Layout/Main";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {

    const statData = useLoaderData();
    console.log(statData);
    
  const stat = statData.data;
  // const { id, total, name } = stat;
  console.log(stat);
  return (
    <div>
      
      <div className="mx-0 md:mx-auto w-full md:w-1/3 my-20">
        <BarChart width={400} height={400} data={stat} className="mx-auto">
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="total">
            {stat.map((index) => (
              <Cell cursor="pointer" fill={"#f77477"} key={`cell-${index}`} />
            ))}
          </Bar>
        </BarChart>
        <h1 className="text-2xl font-semibold text-center my-5">
          {" "}
          Number of Questions Per Quiz Test
        </h1>
      </div>
    </div>
  );
};

export default Statistics;
