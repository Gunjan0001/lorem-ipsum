import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Backtotop from "./components/Backtotop";
import Preloader from "./components/Preloader";
import Rarity from "./components/Rarity";
import Roadmap from "./components/Roadmap";
import Faq from "./components/Faq";
import AOS from "aos";
import "aos/dist/aos.css";
import Tokemonics from "./components/Tokemonics";
import Footer from "./components/Footer";
function App() {
  const [preload, setpreload] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setpreload(false);
      document.body.classList.remove("overflow_hidden_preloder");
    }, 2800);
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <div className="overflow_hidden_preloder">
        {preload && <Preloader />}
        <Header />
        <Tokemonics />
        <Backtotop />
        <Rarity />
        <Roadmap />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default App;
