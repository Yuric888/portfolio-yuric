import logo from "./logo.svg";
import "./App.scss";
import { FaBeer } from "react-icons/fa";
import { Button } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="circle">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <FaBeer />
        <Button variant="success">yuric</Button>
      </header>
    </div>
  );
}

export default App;
