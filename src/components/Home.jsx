import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import Topics from "./Topics";

const Home = () => {
  const topics = useLoaderData();
  const topicsData = topics.data;
  return (
    <div className="h-full">
      <Header/>
      <div className="flex gap-6 flex-wrap justify-center items-center px-4 pt-12 sm:pt-16 md:pt-20 pb-7 md:pb-28">
        {topicsData.map((topic) => (
          <Topics key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default Home;
