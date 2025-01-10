import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import BookTable from "./pages/BookTable";
import OurBlogs from "./pages/OurBlogs";
import Contact from "./pages/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/menu",
      element: <Menu />,
    },
    {
      path: "/booktable",
      element: <BookTable />,
    },
    {
      path: "/ourblogs",
      element: <OurBlogs />,
    },
    {
      path: "/contact",
      element: <Contact/>,
    },
   
  ]);
  return <RouterProvider router={router} />;
}

export default App;
