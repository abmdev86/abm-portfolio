import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { useState } from "react";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";

function App() {
  const [showProjects, setShowProjects] = useState(false);

  const handleShowProjects = () => {
    setShowProjects(!showProjects);
  };
  return (
    <div className="container">
      <NavBar swapComponents={handleShowProjects} />
      {showProjects ? <ProjectList /> : <Main />}
      <Footer />
    </div>
  );
}

export default App;
