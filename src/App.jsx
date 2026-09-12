import { Navbar } from "./components/layout/Navbar.jsx";
import { Footer } from "./components/layout/Footer.jsx";
import { HomePage } from "./components/HomePage.jsx";

export default function App() {
  return (
    <div className="min-h-dvh overflow-x-clip bg-bg">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}
