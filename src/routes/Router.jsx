import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Courses from "../pages/Courses/Courses";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Teacher from "../pages/Teachers/Teacher";
import Layout from "../layout/Layout";

export const mainRoute = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Teacher",
        element: <Teacher />,
      },
    ],
  },
]);
