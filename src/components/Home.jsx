import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "./Header";
import Topics from "./Topics";

const Home = () => {
  const topics = useLoaderData();
  const topicsData = topics.data;
  return (
    <div>
      <Header/>
      <div className="flex gap-6 flex-wrap justify-center items-center px-4 mt-12 sm:mt-16 md:mt-20 mb-7 md:mb-28">
        {topicsData.map((topic) => (
          <Topics key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default Home;
