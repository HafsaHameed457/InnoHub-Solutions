import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { MyDiv } from "./App.styled";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Solution from "./pages/Solution/Solution";
import Insights from "./pages/Insights/Insights";
import Contact from "./pages/Contact/Contact";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <MyDiv>
        <Navbar />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solution />} />

          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </MyDiv>
    </Router>
  );
}

export default App;
