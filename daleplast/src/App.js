import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Chat from "./Components/Chat/Chat";
import Homepage from "./Pages/HomePage";
import CatalogsPage from "./Pages/CatalogsPage";
import FAQs from "./Pages/FAQs";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "./scss/Style.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Chat />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/Catalogo" element={<CatalogsPage />}></Route>
          <Route path="/FAQs" element={<FAQs />}></Route>
        </Routes>
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
