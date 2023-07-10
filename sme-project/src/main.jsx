import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import Root from "./routes/root";
import GetStarted from "./routes/getstarted";
import BusinessDetails from "./routes/businessdetails";
import PersonalDetails from "./routes/personaldetails";
import MailSent from "./routes/mailsent";
import Login from "./routes/login";
import Profile from "./routes/profile";
import AdditionalInfo from "./routes/additionalinfo";
import CreateProduct from "./routes/createproduct";
import Products from "./routes/products";
import Loans from "./routes/loans";
import GetLoans from "./routes/getloans";
import SwiftCash from "./routes/swiftcash";
// import Choose from "./routes/choose";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/getstarted",
    element: <GetStarted />,
  },
  {
    path: "/getstarted/businessdetails",
    element: <BusinessDetails />,
  },
  {
    path: "/getstarted/businessdetails/personaldetails",
    element: <PersonalDetails />,
  },
  {
    path: "/getstarted/businessdetails/personaldetails/mailsent",
    element: <MailSent />,
  },
  {
    path: "/getstarted/businessdetails/personaldetails/mailsent/login",
    element: <Login />,
  },
  {
    path: "/getstarted/businessdetails/personaldetails/mailsent/login/profile",
    element: <Profile />,
    // children: [

    // ],
  },
  {
    path: "/getstarted/businessdetails/personaldetails/mailsent/login/profile/additionalinfo",
    element: <AdditionalInfo />,
  },
  {
    path: "/getstarted/businessdetails/personaldetails/mailsent/login/profile/additionalinfo/createproduct",
    element: <CreateProduct />,
    // children: [],
  },
  {
    path: "/getstarted/businessdetails/personaldetails/mailsent/login/profile/additionalinfo/createproduct/products",
    element: <Products />,
  },
  {
    path: "/getstarted/businessdetails/personaldetails/mailsent/login/profile/additionalinfo/createproduct/loans",
    element: <Loans />,
  },
  // {
  //   path: "/getstarted/businessdetails/personaldetails/mailsent/login/profile/additionalinfo/createproduct/loans/getloans",
  //   element: <GetLoans />,
  // },
  {
    path: "/getstarted/businessdetails/personaldetails/mailsent/login/profile/additionalinfo/createproduct/loans/getloans",
    element: <GetLoans />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
