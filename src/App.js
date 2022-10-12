import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog";
import Error from "./components/Error";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Statistics from "./components/Statistics";
import Chart from "./components/Chart";
import Main from "./Layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home />,
        },
        {
          path: "home",
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home />,
        },
        {
          path: "chart",
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Chart/>,
        },
        {
          path: "quiz/:quizId",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            );
          },
          element: <Quiz />,
        },
        {
          path: "statistics",
          element: <Statistics />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
