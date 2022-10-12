import Contact from "./Components/Contact/Contact";
import NavBar from "./Components/NavBar/NavBar";
import Homepage from "./Pages/HomePage";
import "./scss/Style.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Homepage />
      <Contact />
    </div>
  );
}

export default App;
