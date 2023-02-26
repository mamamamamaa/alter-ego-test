import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { FC, lazy } from "react";
import { PrivateRoute } from "../helpers/PrivateRoute";
import { RestrictedRoute } from "../helpers/RestrictedRoute";

const HomePage = lazy(() => import("../pages/HomePage"));
const NewsPage = lazy(() => import("../pages/NewsPage"));
const UserPage = lazy(() => import("../pages/UserPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

export const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route
            path="/profile"
            element={<PrivateRoute component={UserPage} redirectTo="/" />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={LoginPage} redirectTo="/" />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
