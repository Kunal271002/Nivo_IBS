import logo from "./logo.svg";
import "./App.css";
import Welcome from "./Components/Welcome/Welcome";
import Cards from "./Components/Cards/Cards";
import Navbar from "./Components/NavBar/Navbar";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#e9ecef" }}>
      <Navbar />
      <Welcome />
      <Cards />
      <div className="footer_nav_nivotime">
        <p style={{color:"#ffff",margin:"0 auto", padding:"15px 0",textAlign:"center"}}>© All Rights Reserved By NivoTime</p>
      </div>
    </div>
  );
}

export default App;
