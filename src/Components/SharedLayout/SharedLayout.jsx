import { Outlet } from "react-router";
import { Suspense } from "react";
import Header from "../Header/Header";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
