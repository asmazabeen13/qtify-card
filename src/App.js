import "./styles.css";
import Navbar from "./Components/Navbar";
import "./index.css";
import HeroSection from "./Components/HeroSection";
import Card from "./Components/Card";

export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <Card />
      </div>
    </>
  );
}
