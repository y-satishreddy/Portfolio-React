import "./App.css";
import Home from "./pages/Home";
import About from "./pages/AboutMe";
import { Routes, Route } from "react-router-dom";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about-me" element={<About />}></Route>
      <Route path="/experience" element={<Experience />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
    </Routes>
  );
}

export default App;
