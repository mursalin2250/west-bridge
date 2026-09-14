import { useEffect } from "react";
import { Navbar } from "./components/layout/Navbar.jsx";
import { Footer } from "./components/layout/Footer.jsx";
import { HomePage } from "./components/HomePage.jsx";
import { initLenis, destroyLenis } from "./lenis.js";
import { initSmoothScroll } from "./smooth-scroll.js";

export default function App() {
  useEffect(() => {
    initLenis();
    initSmoothScroll();
    return () => destroyLenis();
  }, []);

  return (
    <div className="min-h-dvh bg-bg">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}
