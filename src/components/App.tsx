import { Outlet, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

export const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: "ua" | "en") => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              Layout
              <Suspense>
                <Outlet />
              </Suspense>
            </>
          }
        >
          <Route index element={<>Home page</>} />
          <Route path="/news" element={<>News page</>} />
          <Route path="/profile" element={<>User page</>} />
          <Route path="*" element={<>Not found</>} />
        </Route>
      </Routes>
    </>
  );
};

// <Routes>
//     <Route
//         path="/"
//         element={
//             <>
//                 Layout
//                 <Suspense>
//                     <Outlet />
//                 </Suspense>
//             </>
//         }
//     >
//         <Route index element={<>Home page</>} />
//         <Route path="/news" element={<>News page</>} />
//         <Route path="/profile" element={<>User page</>} />
//         <Route path="*" element={<>Not found</>} />
//     </Route>
// </Routes>
