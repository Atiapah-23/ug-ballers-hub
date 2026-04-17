import "@fontsource/oswald/400.css";
import "@fontsource/oswald/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScoreTicker from "@/components/ScoreTicker";
import Standings from "@/components/Standings";
import Schedule from "@/components/Schedule";
import TopPlayers from "@/components/TopPlayers";
import StatLeaders from "@/components/StatLeaders";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-[60px]">
        <ScoreTicker />
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
        <StatLeaders />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
