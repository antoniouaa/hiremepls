import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap";

import "./App.css";

import Sidebar from "./Components/Sidebar";
import Homepage from "./Components/Body/Homepage";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="App Wrapper">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
