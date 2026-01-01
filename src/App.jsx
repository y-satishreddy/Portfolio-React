import "./App.css";
import Home from "./pages/Home";
import About from "./pages/AboutMe";
import { Routes, Route } from "react-router-dom";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Header from "./components/Navbar";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-me" element={<About />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
