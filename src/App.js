import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages";
import About from "./Pages/About";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/terms" element={<Terms />} />
          <Route exact path="/privacy" element={<Privacy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
