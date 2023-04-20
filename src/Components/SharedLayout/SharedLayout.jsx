import { Outlet } from "react-router";
import { Suspense } from "react";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <ScrollToTopButton />
      <Suspense>
        <Outlet />
      </Suspense>

      <Footer />
    </>
  );
};

export default SharedLayout;
