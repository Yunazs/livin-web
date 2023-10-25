import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// 1 - Router config
import {
  createBrowserRouter,
  Navigate,
  redirect,
  RouterProvider,
} from "react-router-dom";

import Home from "./routes/Home/Home.tsx";
import Login from "./routes/Login/Login.tsx";
import ErrorPage from "./routes/ErrorPage/ErrorPage.tsx";
import Sobre from "./routes/Sobre/Sobre.tsx";
import Plataforma from "./routes/Plataforma/Plataforma.tsx";
import Planos from "./routes/Planos/Planos.tsx";
import FaleConosco from "./routes/FaleConosco/FaleConosco.tsx";
import Cadastro from "./routes/Cadastro/Cadastro.tsx";
import Termos from "./routes/Termos/Termos.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "login",
//     element: <Login />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "Sobre",
        element: <Sobre />,
      },
      {
        path: "Plataforma",
        element: <Plataforma />,
      },
      {
        path: "Planos",
        element: <Planos />,
      },
      {
        path: "FaleConosco",
        element: <FaleConosco />,
      },
      {
        path: "Cadastro",
        element: <Cadastro />,
      },
      {
        path: "ComeceAgora",
        element: <Cadastro/>,
      },
      {
        path: "Termos",
        element: <Termos />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
