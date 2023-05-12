import { Suspense } from "react";
import css from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import { AppContainer } from "../AppContainer/AppContainer";

export const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <AppContainer />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  )
};  

// <main className={css.container}>
//   {children}
// </main>