import { lazy, Suspense } from "react";
import LazyLoad from "react-lazyload";
import { ToastProvider } from "./components/contact/ToastContext";

const Hero = lazy(() => import("./components/hero/Hero"));
const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));

const WavyLoader = () => (
  <div style={{ display: 'grid', placeItems: 'center', minHeight: '40vh' }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150" width="120" height="60" aria-label="Loading">
      <path
        fill="none"
        stroke="#FFCE46"
        strokeWidth="15"
        strokeLinecap="round"
        strokeDasharray="300 385"
        strokeDashoffset="0"
        d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
      >
        <animate
          attributeName="stroke-dashoffset"
          calcMode="spline"
          dur="2s"
          values="685;-685"
          keySplines="0 0 1 1"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  </div>
);

const App = () => {
  return (
    <ToastProvider>
      <div className="container">
        <Suspense fallback={<WavyLoader />}>
          <LazyLoad height={"100vh"} offset={-100}>
            <section id="#home">
              <Hero />
            </section>
          </LazyLoad>
        </Suspense>

        <Suspense fallback={<WavyLoader />}>
          <LazyLoad height={"100vh"} offset={-100}>
            <section id="#services">
              <Services />
            </section>
          </LazyLoad>
        </Suspense>

        <Suspense fallback={<WavyLoader />}>
          <LazyLoad height={"600vh"} offset={-100}>
            <Portfolio />
          </LazyLoad>
        </Suspense>

        <Suspense fallback={<WavyLoader />}>
          <LazyLoad height={"100vh"} offset={-100}>
            <section id="#contact">
              <Contact />
            </section>
          </LazyLoad>
        </Suspense>
      </div>
    </ToastProvider>
  );
};

export default App;
