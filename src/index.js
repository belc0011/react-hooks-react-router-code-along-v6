import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.js"

const router = createBrowserRouter(routes)
const root = ReactDOM.createRoot(document.getElementById("root"));
