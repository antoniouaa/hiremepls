import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap";

import "./App.css";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="App Wrapper">
        <p>Hello world</p>
      </div>
    </div>
  );
}

export default App;
