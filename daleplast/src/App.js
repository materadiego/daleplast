import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Chat from "./Components/Chat/Chat";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import PageLoader from "./Components/PageLoader/PageLoader";
import "./scss/Style.scss";

const LazyHomePage = React.lazy(() => import("./Pages/HomePage"));
const LazyAboutUsPage = React.lazy(() => import("./Pages/AboutUsPage"));
const LazyCatalogsPage = React.lazy(() => import("./Pages/CatalogsPage"));
const LazyServicesPage = React.lazy(() => import("./Pages/ServicesPage"));
const LazyFAQs = React.lazy(() => import("./Pages/FAQs"));
const LazyCompromisePage = React.lazy(() => import("./Pages/CompromisePage"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Chat />
        <Routes>
          <Route
            path="/daleplast"
            element={
              <Suspense fallback={<PageLoader />}>
                <LazyHomePage />
              </Suspense>
            }
          />
          <Route
            path="/Nosotros"
            element={
              <Suspense fallback={<PageLoader />}>
                <LazyAboutUsPage />
              </Suspense>
            }
          />
          <Route
            path="/Catalogo"
            element={
              <Suspense fallback={<PageLoader />}>
                <LazyCatalogsPage />
              </Suspense>
            }
          />
          <Route
            path="/Servicios"
            element={
              <Suspense fallback={<PageLoader />}>
                <LazyServicesPage />
              </Suspense>
            }
          />
          <Route
            path="/FAQs"
            element={
              <Suspense fallback={<PageLoader />}>
                <LazyFAQs />
              </Suspense>
            }
          />
          <Route
            path="/Compromiso"
            element={
              <Suspense fallback={<PageLoader />}>
                <LazyCompromisePage />
              </Suspense>
            }
          />
        </Routes>
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
