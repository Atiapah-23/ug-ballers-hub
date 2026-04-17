import { motion } from "framer-motion";
import heroImg from "@/assets/hero-basketball.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Basketball action"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-semibold tracking-[0.3em] text-sm mb-4">
            UNIVERSITY OF GHANA
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6">
            <span className="text-gradient-gold">BASKETBALL</span>
            <br />
            <span className="text-foreground">LEAGUE</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-8">
            Legon basketball league
          </p>
          <div className="flex gap-4 justify-center">
            <span className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold tracking-wide text-sm uppercase cursor-pointer hover:opacity-90 transition-opacity">
              View Schedule
            </span>
            <span className="border border-primary text-primary px-6 py-3 rounded-md font-semibold tracking-wide text-sm uppercase cursor-pointer hover:bg-primary/10 transition-colors">
              Standings
            </span>
          </div>
        </motion.div>

        {/* Season Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 inline-flex items-center gap-2 bg-muted/50 border border-border rounded-full px-5 py-2"
        >
          <span className="w-2 h-2 rounded-full bg-win animate-pulse-gold" />
          <span className="text-sm text-muted-foreground">
            2025/26 Season — Now Live
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
