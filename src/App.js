import logo from "./logo.svg";
import "./App.css";
import Welcome from "./Components/Welcome/Welcome";
import Cards from "./Components/Cards/Cards";
import Navbar from "./Components/NavBar/Navbar";

function App() {
  return (
    <div className="App" style={{backgroundColor:"#e9ecef"}}>
      <Navbar />
      <Welcome />
      <Cards/>
      <div className="footer_nav_nivotime">
        <p>© All Rights Reserved By NivoTime</p>
      </div>
    </div>
  );
}

export default App;
