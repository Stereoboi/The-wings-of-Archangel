import { Outlet } from "react-router";
import { Suspense } from "react";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
