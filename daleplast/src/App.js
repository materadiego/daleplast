import NavBar from "./Components/NavBar/NavBar";
import Homepage from "./Pages/HomePage";
import Footer from "./Components/Footer/Footer";
import "./scss/Style.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
