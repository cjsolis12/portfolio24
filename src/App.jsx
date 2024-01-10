import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Portfolio">
        <Portfolio />
      </section>
      <section id="Contact">Contact</section>
      <section id="Resume">Resume</section>
    </div>
  );
};

export default App;
