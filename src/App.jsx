import React from "react";
import Navbar from "./components/Navbar";
import HeaderContent from "./components/HeaderContent";
import Separator from "./components/Separator";
import "./index.css";
import InfoSection from "./components/InfoSection";

function App() {
  return (
    <div className="w-[1440px] mx-auto bg-white">
      <main className="bg-[var(--color-main-dark)] min-h-screen">
        <Navbar />
        <div className="w-[1880px] -ml-[220px]">
          <HeaderContent />
        </div>
        <InfoSection />
      </main>

      <footer className="py-8 text-center text-gray-500">© 2025 Demo Test</footer>
    </div>
  );
}

export default App;
