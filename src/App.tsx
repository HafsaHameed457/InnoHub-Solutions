import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { MyDiv } from "./App.styled";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Solution from "./pages/Solution/Solution";
import Insights from "./pages/Insights/Insights";
function App() {
  return (
    <Router>
      <MyDiv>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solution />} />

          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<div />} />
        </Routes>
      </MyDiv>
    </Router>
  );
}

export default App;
