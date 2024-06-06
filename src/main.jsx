import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./routes/Dashboard.jsx";
import Login from "./routes/Login.jsx";
import Register from "./routes/Register.jsx";
import Avatar from "./routes/Avatar.jsx";
import Intro from "./routes/Intro.jsx";
import './styles/main.scss'


const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/dashboard', element: <Dashboard />},
  {path: '/login', element: <Login />},
  {path: '/register', element: <Register />},
  {path: '/avatar', element: <Avatar />},
  {path: '/intro', element: <Intro />}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
