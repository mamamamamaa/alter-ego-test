import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Layout } from "./Layout/Layout";
import { FC, lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage"));
const NewsPage = lazy(() => import("../pages/NewsPage"));
const UserPage = lazy(() => import("../pages/UserPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

export const App: FC = () => {
  const { i18n } = useTranslation();
  console.log(i18n.language);
  const changeLanguage = (language: "ua" | "en") => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/profile" element={<UserPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
