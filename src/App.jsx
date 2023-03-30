import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import SharedLayout from "./Components/SharedLayout/SharedLayout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AboutOurBrigadePage = lazy(() =>
  import("./pages/AboutOurBrigadePage/AboutOurBrigadePage")
);
const AboutUsPage = lazy(() => import("./pages/AboutUsPage/AboutUsPage"));
const PurchasesPage = lazy(() => import("./pages/PurchasesPage/PurchasesPage"));
const RequisitesPage = lazy(() =>
  import("./pages/RequisitesPage/RequisitesPage")
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about-bridge" element={<AboutOurBrigadePage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="purchases" element={<PurchasesPage />} />
        <Route path="requisites" element={<RequisitesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
