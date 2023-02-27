import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { FC, lazy, useEffect } from "react";
import { PrivateRoute } from "../helpers/PrivateRoute";
import { RestrictedRoute } from "../helpers/RestrictedRoute";
import { useAppDispatch } from "../redux/hooks";
import { changeNewsLanguage } from "../redux/news/newsSlice";
import { useTranslation } from "react-i18next";

const HomePage = lazy(() => import("../pages/HomePage"));
const NewsPage = lazy(() => import("../pages/NewsPage"));
const UserPage = lazy(() => import("../pages/UserPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

export const App: FC = () => {
  const dispatch = useAppDispatch();
  const { i18n } = useTranslation();

  useEffect(() => {
    dispatch(changeNewsLanguage(i18n.language));
  }, [dispatch]);

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
