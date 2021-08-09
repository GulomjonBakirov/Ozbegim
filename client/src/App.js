import Header from "./components/layouts/Header";
import About from "./components/About";
import Features from "./components/Features";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <About />
        <Features />
      </div>
    </>
  );
}

export default App;
