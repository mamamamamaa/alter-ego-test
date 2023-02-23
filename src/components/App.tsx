import { Outlet, Route, Routes } from "react-router-dom";
import { Suspense } from "react";

export const App = () => {
  return (
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
  );
};
