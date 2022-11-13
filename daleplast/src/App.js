import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Chat from "./Components/Chat/Chat";
import HomePage from "../src/Pages/HomePage";
import CatalogsPage from "./Pages/CatalogsPage";
import FAQs from "./Pages/FAQs";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "./scss/Style.scss";
import HomeAboutUs from "./Components/HomeAboutUs/HomeAboutUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Chat />
        <Routes>
          <Route path="/daleplast" element={<HomePage />} />

          <Route path="/Catalogo" element={<CatalogsPage />} />
          <Route path="/FAQs" element={<FAQs />} />
        </Routes>
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
