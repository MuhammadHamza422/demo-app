import Navbar from "./components/Navbar";
import HeaderContent from "./components/HeaderContent";
import "./index.css";
import InfoSection from "./components/InfoSection";
import CardSection from "./components/CardSection";
import CardsGridSection from "./components/CardsGridSection";
import PriceCard from "./components/PriceCard";
import Footer from "./components/Footer";

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
      {/* Footer Component is outside the main section as per figma*/}
      <Footer />
    </div>
  );
}

export default App;
