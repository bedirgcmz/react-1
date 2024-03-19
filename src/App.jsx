import { useState } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import styles from "./App.module.css";
import { getImageURL } from "./utils/functions";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [targetCategory, setTargetCategory] = useState("Politics");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <Home
            setTargetCategory={setTargetCategory}
            targetCategory={targetCategory}
            pageTitle="Welcome to Latest News"
          />
        );
      case "about":
        return <About pageTitle="About Me" />;
      case "contact":
        return <Contact pageTitle="Contact Me" />;
      default:
        return (
          <Home
            setTargetCategory={setTargetCategory}
            targetCategory={targetCategory}
            pageTitle="Welcome to Latest News"
          />
        );
    }
  };

  return (
    <div className={styles.app}>
      <header>
        <nav>
          <ul>
            <li onClick={() => setCurrentPage("home")}>Home</li>
            <li onClick={() => setCurrentPage("about")}>About</li>
            <li onClick={() => setCurrentPage("contact")}>Contact</li>
          </ul>
          <img className={styles.logo} src={getImageURL("logo.jpeg")} alt="" />
        </nav>
      </header>
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
