import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom"


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
    element: <div>Login</div>,
  },
  {
    path: "/register",
    element: <div>Register</div>,
  },
  {
    path: "/check-email",
    element: <div>Check email</div>
  },
  {
    path: "/set-new-password",
    element: <div>Set new password</div>
  },
  {
    path: "/forgot-password",
    element: <div>Set new password</div>
  },
  {
    path: "/profile",
    element: <div>Set new password</div>
  },
  {
    path: "/packs",
    element: <div>Set new password</div>
  },
  {
    path: "/cards",
    element: <div>Set new password</div>
  },
  {
    path: "/learn",
    element: <div>Set new password</div>
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/*<App />*/}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
