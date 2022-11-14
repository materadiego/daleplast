import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import { useEffect, useState } from "react";
import Chat from "./Components/Chat/Chat";
import HomePage from "../src/Pages/HomePage";
import CatalogsPage from "./Pages/CatalogsPage";
import FAQs from "./Pages/FAQs";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "./scss/Style.scss";
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 2f33f629f813c9638e66807336ef90f71ee912b2
=======
>>>>>>> 2f33f629f813c9638e66807336ef90f71ee912b2
import PageLoader from "./Components/PageLoader/PageLoader";

function App() {
  const [pageLoading, setPageLoading] = useState(true);

  const pageLoaded = () => {
    setPageLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      pageLoaded();
    }, 2000);
  });

  return (
    <div className="App">
      {pageLoading ? (
        <PageLoader />
      ) : (
        <BrowserRouter>
          <NavBar />
          <Chat />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Catalogo" element={<CatalogsPage />} />
            <Route path="/FAQs" element={<FAQs />} />
          </Routes>
          <Contact />
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
