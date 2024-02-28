import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AuthRoute from './components/AuthRoute';
import ListAttendanceComponent from './components/ListAttendanceComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import AddAttendanceComponent from './components/AddAttendanceComponent';
import AppContextProvider from './context/AppContextProvider';

const router = createBrowserRouter([
  {
    path:"/",
    element:<AuthRoute/>,
    errorElement:<AuthRoute/>,
    children:[
    {
      path:"/",
      element:<ListEmployeeComponent/>,
    },
    {
      path:"/employees",
      element:<ListEmployeeComponent/>,
    },
    {
      path:"/attendance",
      element:<ListAttendanceComponent/>,
    },
    {
      path:"/add-employee",
      element:<AddEmployeeComponent/>,
    },
    {
      path:"/edit-employee/:id",
      element:<AddEmployeeComponent/>,
    },
    {
      path:"/add-attendance",
      element:<AddAttendanceComponent/>,
    },
    {
      path:"*",
      element:<ListEmployeeComponent/>,
    },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextProvider>
    <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
