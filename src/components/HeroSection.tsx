import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-basketball.jpg";
import actionImg from "@/assets/player-action-1.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[78vh] flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="University of Ghana basketball action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
      </div>

      {/* Side red stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary z-10" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pb-16 pt-28 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-sm">
              Featured
            </span>
            <span className="text-foreground/70 text-xs font-semibold uppercase tracking-widest">
              2025/26 Season • Round 7
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-extrabold leading-[0.9] mb-5">
            <span className="block text-foreground">VIPERS STRIKE</span>
            <span className="block text-gradient-rwb">EAGLES, 72-65</span>
          </h1>

          <p className="text-foreground/80 text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
            Kwame Asante drops a season-high 28 as the Vipers extend their win
            streak to five at the UG Sports Complex. Catch every dunk, dime, and
            dagger from Legon's top hoops league.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#highlights"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              <Play className="w-4 h-4 fill-current" />
              Watch Highlights
            </a>
            <a
              href="#schedule"
              className="inline-flex items-center gap-2 bg-foreground/10 hover:bg-foreground/20 text-foreground border border-border px-6 py-3 rounded text-xs font-bold uppercase tracking-widest transition-colors backdrop-blur-sm"
            >
              Full Schedule
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
