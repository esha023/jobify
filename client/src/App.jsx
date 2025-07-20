import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  AllJobs,
  Stats,
  Profile,
  Admin,
  EditJob,
} from './assets/pages';

import {action as registerAction} from './assets/pages/Register.jsx';
import {action as loginAction} from './assets/pages/Login.jsx';
import {action as addJob} from './assets/pages/AddJob.jsx';
import {action as editJob} from './assets/pages/EditJob.jsx';
import {action as addImage} from './assets/pages/Profile.jsx';
import {loader as DashboardLoader} from './assets/pages/DashboardLayout.jsx';
import {loader as JobsLoader} from './assets/pages/AllJobs.jsx';
import {loader as EditJobLoader} from './assets/pages/EditJob.jsx';
import {loader as AdminLoader} from './assets/pages/Admin.jsx';
import {loader as StatsLoader} from './assets/pages/Stats.jsx';

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("dark-theme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: '/register',
        element: <Register />,
        action: registerAction,
      },
      {
        path: '/login',
        element: <Login />,
        action: loginAction,
      },
      {
        path: '/dashboard',
        element: <DashboardLayout />,
        loader: DashboardLoader,
        children: [
          {
            index: true,
            element: <AddJob />,
            action: addJob,
          },
          {
            path: 'all-jobs',
            element: <AllJobs />,
            loader: JobsLoader,
          },
          {
            path: 'stats',
            element: <Stats />,
            loader: StatsLoader,
          },
          {
            path: 'profile',
            element: <Profile />,
            action: addImage,
          },
          {
            path: 'admin',
            element: <Admin />,
            loader: AdminLoader,
          },
          {
            path: 'edit-job/:id',
            element: <EditJob/>,
            action: editJob,
            loader: EditJobLoader,
          },
        ]
      },
    ]
  },
  
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App
