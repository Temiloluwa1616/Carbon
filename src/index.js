import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
// import App from './App';
import Dashboard from './pages/dashboard';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     // element: 
//   },
//   {
//     path: "/activity",
//     element: <Activity/>,
//   },
//   {
//     path: "/bill",
//     element: <Bills/>,
//   },
//   {
//     path: "/transactions",
//     element: <Transactions/>,
//   },
//   {
//     path: "/complaints",
//     element: <Complaints/>,
//   },
//   {
//     path: "/settings",
//     element: <Settings/>,
//   },
//   {
//     path: "/logout",
//     element: <Dashboard/>,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <Dashboard/>
  </React.StrictMode>
);

reportWebVitals();
