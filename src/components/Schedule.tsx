import { motion } from "framer-motion";
import { Calendar, MapPin, Tv } from "lucide-react";

const games = [
  { home: "Vipers", away: "Eagles", date: "Mar 12", time: "4:00 PM", venue: "UG Sports Complex", status: "upcoming" },
  { home: "Reapers", away: "Bulldogs", date: "Mar 14", time: "6:00 PM", venue: "UG Sports Complex", status: "upcoming" },
  { home: "Knight Sharks", away: "Wolves", date: "Mar 16", time: "4:00 PM", venue: "UG Sports Complex", status: "upcoming" },
  { home: "Vipers", away: "Reapers", homeScore: 72, awayScore: 65, date: "Mar 7", status: "final" },
  { home: "Eagles", away: "Knight Sharks", homeScore: 58, awayScore: 61, date: "Mar 5", status: "final" },
];

const Schedule = () => {
  const upcoming = games.filter((g) => g.status === "upcoming");
  const results = games.filter((g) => g.status === "final");

  return (
    <section className="py-16 px-6 bg-gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-end justify-between mb-8 border-l-4 border-primary pl-4">
            <div>
              <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-1">
                Games
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">
                Schedule & Scores
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Upcoming */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.25em] text-foreground/60 font-bold mb-4 pb-2 border-b border-border">
                Upcoming
              </h3>
              <div className="space-y-3">
                {upcoming.map((game, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-card border border-border rounded overflow-hidden hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-stretch">
                      <div className="bg-primary text-primary-foreground flex flex-col items-center justify-center px-4 py-3 min-w-[64px]">
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                          {game.date.split(" ")[0]}
                        </span>
                        <span className="text-2xl font-extrabold leading-none">
                          {game.date.split(" ")[1]}
                        </span>
                      </div>
                      <div className="flex-1 p-4 flex flex-col gap-2">
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-bold text-foreground">{game.away}</span>
                          <span className="text-muted-foreground text-xs">@</span>
                          <span className="font-bold text-foreground">{game.home}</span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {game.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {game.venue}
                          </span>
                        </div>
                      </div>
                      <button className="bg-muted hover:bg-primary hover:text-primary-foreground transition-colors px-4 flex items-center text-[10px] font-bold uppercase tracking-widest">
                        <Tv className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.25em] text-foreground/60 font-bold mb-4 pb-2 border-b border-border">
                Recent Results
              </h3>
              <div className="space-y-3">
                {results.map((game, i) => {
                  const homeWon = (game.homeScore ?? 0) > (game.awayScore ?? 0);
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="bg-card border border-border rounded p-4 hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-muted text-muted-foreground text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded">
                          Final
                        </span>
                        <span className="text-[11px] text-muted-foreground">{game.date}</span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className={`font-bold ${!homeWon ? "text-foreground" : "text-muted-foreground"}`}>
                            {game.away}
                          </span>
                          <span className={`font-mono font-extrabold text-xl ${!homeWon ? "text-foreground" : "text-muted-foreground"}`}>
                            {game.awayScore}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className={`font-bold ${homeWon ? "text-foreground" : "text-muted-foreground"}`}>
                            {game.home}
                          </span>
                          <span className={`font-mono font-extrabold text-xl ${homeWon ? "text-foreground" : "text-muted-foreground"}`}>
                            {game.homeScore}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
