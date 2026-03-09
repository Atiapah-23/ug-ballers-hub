import { motion } from "framer-motion";

const teams = [
  { name: "Vipers", w: 8, l: 1, pts: 17, streak: "W5" },
  { name: "Eagles", w: 7, l: 2, pts: 16, streak: "W3" },
  { name: "Reapers", w: 6, l: 3, pts: 15, streak: "L1" },
  { name: "Knight Sharks", w: 5, l: 4, pts: 14, streak: "W2" },
  { name: "Bulldogs", w: 4, l: 5, pts: 13, streak: "L2" },
  { name: "Kings", w: 3, l: 6, pts: 12, streak: "W1" },
  { name: "Wolves", w: 2, l: 7, pts: 11, streak: "L3" },
  { name: "Panthers", w: 1, l: 8, pts: 10, streak: "L4" },
];

const Standings = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-gold">
            Standings
          </h2>
          <p className="text-muted-foreground mb-8">2025/26 Season Rankings</p>

          <div className="bg-card rounded-lg border border-border overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[auto_1fr_repeat(4,_minmax(0,_60px))] gap-4 px-5 py-3 bg-muted/50 text-xs text-muted-foreground uppercase tracking-wider font-semibold">
              <span className="w-6">#</span>
              <span>Team</span>
              <span className="text-center">W</span>
              <span className="text-center">L</span>
              <span className="text-center">PTS</span>
              <span className="text-center">STK</span>
            </div>

            {/* Rows */}
            {teams.map((team, i) => (
              <motion.div
                key={team.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="grid grid-cols-[auto_1fr_repeat(4,_minmax(0,_60px))] gap-4 px-5 py-4 border-t border-border hover:bg-muted/30 transition-colors"
              >
                <span className="w-6 text-muted-foreground font-mono text-sm">
                  {i + 1}
                </span>
                <span className="font-semibold text-foreground truncate">
                  {team.name}
                </span>
                <span className="text-center text-win font-semibold">{team.w}</span>
                <span className="text-center text-loss font-semibold">{team.l}</span>
                <span className="text-center text-primary font-bold">{team.pts}</span>
                <span
                  className={`text-center text-xs font-mono ${
                    team.streak.startsWith("W") ? "text-win" : "text-loss"
                  }`}
                >
                  {team.streak}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Standings;
