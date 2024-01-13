import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import Header from "./Components/Header";
import About from "./Pages/About.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
