import Header from "./components/layouts/Header";
import About from "./components/About";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <About />
        <Features />
        <Gallery />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
