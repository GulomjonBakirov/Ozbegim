import Header from "./components/layouts/Header";
import About from "./components/About";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <About />
        <Features />
        <Gallery />
        <Blog />
      </div>
    </Router>
  );
}

export default App;
