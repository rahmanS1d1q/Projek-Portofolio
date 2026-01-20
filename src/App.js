import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Home setActiveSection={setActiveSection} />;
      case "about":
        return <About />;
      case "resume":
        return <Resume />;
      case "portfolio":
        return <Portfolio />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="App">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      {renderSection()}
    </div>
  );
}

export default App;
