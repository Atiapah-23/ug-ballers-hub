import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

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
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-end justify-between mb-8 border-l-4 border-primary pl-4">
            <div>
              <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-1">
                League
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">
                Standings
              </h2>
            </div>
            <span className="hidden sm:inline text-xs text-muted-foreground uppercase tracking-widest">
              2025/26 Regular Season
            </span>
          </div>

          <div className="bg-card rounded border border-border overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[40px_1fr_60px_60px_60px_70px] md:grid-cols-[50px_1fr_70px_70px_70px_80px_80px] gap-2 px-4 py-3 bg-muted text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
              <span>Rank</span>
              <span>Team</span>
              <span className="text-center">W</span>
              <span className="text-center">L</span>
              <span className="text-center">PCT</span>
              <span className="text-center">PTS</span>
              <span className="text-center hidden md:block">STK</span>
            </div>

            {/* Rows */}
            {teams.map((team, i) => {
              const pct = (team.w / (team.w + team.l)).toFixed(3).replace(/^0/, "");
              const isTop = i < 4;
              const rising = team.streak.startsWith("W");
              return (
                <motion.div
                  key={team.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="grid grid-cols-[40px_1fr_60px_60px_60px_70px] md:grid-cols-[50px_1fr_70px_70px_70px_80px_80px] gap-2 px-4 py-3.5 border-t border-border hover:bg-muted/40 transition-colors items-center"
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-1 h-6 rounded-sm ${isTop ? "bg-primary" : "bg-border"}`} />
                    <span className="font-mono font-bold text-sm text-foreground">
                      {i + 1}
                    </span>
                  </div>
                  <span className="font-bold text-foreground truncate text-sm">
                    {team.name}
                  </span>
                  <span className="text-center font-mono font-bold text-foreground">{team.w}</span>
                  <span className="text-center font-mono font-bold text-muted-foreground">{team.l}</span>
                  <span className="text-center font-mono text-sm text-muted-foreground">{pct}</span>
                  <span className="text-center text-primary font-extrabold">{team.pts}</span>
                  <span
                    className={`hidden md:flex items-center justify-center gap-1 text-xs font-mono font-bold ${
                      rising ? "text-win" : "text-loss"
                    }`}
                  >
                    {rising ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {team.streak}
                  </span>
                </motion.div>
              );
            })}
          </div>

          <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-4">
            <span className="inline-block w-2 h-2 bg-primary rounded-sm mr-2 align-middle" />
            Top 4 advance to playoffs
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Standings;
