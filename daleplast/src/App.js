import NavBar from "./Components/NavBar/NavBar";
import Chat from "./Components/Chat/Chat";
import Homepage from "./Pages/HomePage";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "./scss/Style.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Chat />
      <Homepage />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
