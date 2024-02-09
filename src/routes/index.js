import React, { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";
import DashboardLayout from "../layouts/dashboard";


const Loadable = (Component) => (props) => {
    return (
      <Suspense fallback={<LoadingScreen />}>
        <Component {...props} />
      </Suspense>
    );
  };

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "app", element: <GeneralApp /> },

        { path: "404", element: <Page404/> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
};

export default Router;

const GeneralApp = Loadable(
    lazy(() => import("../pages/dashboard/GeneralApp")),
  );
  const Page404 = Loadable(lazy(() => import("../pages/Page404")));
  
