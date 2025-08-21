import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import { ToastProvider } from './components/contact/ToastContext';

const App = () => {
  return (
    <ToastProvider>
    <div className="container">
      <section id="#home">
        <Hero />
      </section>
      <section id="#services">
        <Services />
      </section>
      {/* <section id="#portfolio"> */}
        <Portfolio />
      {/* </section> */}
      <section id="#contact">
        <Contact />
      </section>
    </div>
    </ToastProvider>
  );
};

export default App