import { useState } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { articles } from "./assets/data/articles";
import { getImageURL } from "./utils/functions";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <header>
        <nav>
          <ul>
            <li onClick={() => setCurrentPage("home")}>Home</li>
            <li onClick={() => setCurrentPage("about")}>About</li>
            <li onClick={() => setCurrentPage("contact")}>Contact</li>
          </ul>
        </nav>
        <img src={getImageURL("climate.jpeg")} alt="" />
      </header>
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
