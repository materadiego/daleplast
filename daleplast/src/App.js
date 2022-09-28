import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import logo from "./logo.svg";
import "./scss/Style.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
