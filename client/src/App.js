import Header from "./components/layouts/Header";
import About from "./components/About";
import Features from "./components/Features";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <About />
        <Features />
        <Gallery />
      </div>
    </>
  );
}

export default App;
