import "./App.css";
import About from "./components/About";
import ContactDetail from "./components/ContactDetail";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Project />
      <ContactDetail />
    </>
  );
}

export default App;
