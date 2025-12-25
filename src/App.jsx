import Navbar from "./components/Navbar";
import HeaderContent from "./components/HeaderContent";
import "./index.css";
import InfoSection from "./components/InfoSection";
import CardSection from "./components/CardSection";
import CardsGridSection from "./components/CardsGridSection";
import PriceCard from "./components/PriceCard";

function App() {
  return (
    <div className="w-[1440px] mx-auto bg-white">
      <main className="bg-[var(--color-main-dark)] min-h-screen">
        <Navbar />
        <div className="w-[1880px] -ml-[220px]">
        <HeaderContent />
        </div>
        <InfoSection />
        <CardSection />
        <CardsGridSection />
        <PriceCard />
      </main>

      <footer className="py-8 text-center text-gray-500">© 2025 Demo Test</footer>
    </div>
  );
}

export default App;
