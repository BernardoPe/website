import { Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/home";
import { Route } from "react-router-dom";
import Header from "./components/Layouts/Header";
import Education from "./components/Pages/education";
import Skills from "./components/Pages/skills";
import Footer from "./components/Layouts/footer";
import Projects from "./components/Pages/projects";
import About from "./components/Pages/about";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
