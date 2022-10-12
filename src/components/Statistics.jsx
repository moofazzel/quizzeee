import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";
const data = [
  { name: "React", Total_Questions: 8 },
  { name: "JavaScript", Total_Questions: 9 },
  { name: "CSS", Total_Questions: 8 },
  { name: "Git", Total_Questions: 11 },
];

const Statistics = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center mt-8 md:mt-24">
        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="name" stroke="#fb7185" />
          <YAxis stroke="#fb7185" />
          <Tooltip />
          <CartesianGrid stroke="#fb7185" strokeDasharray="5 5" />
          <Bar dataKey="Total_Questions" fill="#fb7185" barSize={40} />
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;
