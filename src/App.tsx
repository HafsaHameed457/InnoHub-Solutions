import "./App.css";
import { MyDiv } from "./App.styled";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <MyDiv>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div />} />
          <Route path="/contact" element={<div />} />
          <Route path="/solution" element={<div />} />
          <Route path="/insights" element={<div />} />
        </Routes>
      </MyDiv>
    </Router>
  );
}

export default App;
