import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Layout } from "./Layout/Layout";

export const App = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: "ua" | "en") => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<>Home page</>} />
          <Route path="/news" element={<>News page</>} />
          <Route path="/profile" element={<>User page</>} />
          <Route path="*" element={<>Not found</>} />
        </Route>
      </Routes>
    </>
  );
};
