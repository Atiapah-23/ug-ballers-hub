import "@fontsource/oswald/400.css";
import "@fontsource/oswald/700.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Standings from "@/components/Standings";
import Schedule from "@/components/Schedule";
import TopPlayers from "@/components/TopPlayers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <div id="standings">
          <Standings />
        </div>
        <div id="schedule">
          <Schedule />
        </div>
        <div id="players">
          <TopPlayers />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
