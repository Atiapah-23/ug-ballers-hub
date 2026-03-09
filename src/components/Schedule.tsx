import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

const games = [
  { home: "Vipers", away: "Eagles", date: "Mar 12, 2026", time: "4:00 PM", venue: "UG Sports Complex", status: "upcoming" },
  { home: "Reapers", away: "Bulldogs", date: "Mar 14, 2026", time: "6:00 PM", venue: "UG Sports Complex", status: "upcoming" },
  { home: "Knight Sharks", away: "Wolves", date: "Mar 16, 2026", time: "4:00 PM", venue: "UG Sports Complex", status: "upcoming" },
  { home: "Vipers", away: "Reapers", homeScore: 72, awayScore: 65, date: "Mar 7, 2026", status: "final" },
  { home: "Eagles", away: "Knight Sharks", homeScore: 58, awayScore: 61, date: "Mar 5, 2026", status: "final" },
];

const Schedule = () => {
  const upcoming = games.filter((g) => g.status === "upcoming");
  const results = games.filter((g) => g.status === "final");

  return (
    <section className="py-16 px-6 bg-gradient-hero">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gradient-gold">
            Schedule
          </h2>
          <p className="text-muted-foreground mb-10">Upcoming games & recent results</p>

          {/* Upcoming */}
          <h3 className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">
            Upcoming
          </h3>
          <div className="space-y-3 mb-12">
            {upcoming.map((game, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-5 flex flex-col md:flex-row md:items-center gap-4"
              >
                <div className="flex-1 flex items-center gap-3">
                  <span className="font-bold text-foreground">{game.home}</span>
                  <span className="text-muted-foreground text-sm">vs</span>
                  <span className="font-bold text-foreground">{game.away}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {game.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {game.time}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Results */}
          <h3 className="text-sm uppercase tracking-widest text-primary font-semibold mb-4">
            Recent Results
          </h3>
          <div className="space-y-3">
            {results.map((game, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-5 flex flex-col md:flex-row md:items-center gap-4"
              >
                <div className="flex-1 flex items-center gap-3">
                  <span
                    className={`font-bold ${
                      (game.homeScore ?? 0) > (game.awayScore ?? 0) ? "text-win" : "text-foreground"
                    }`}
                  >
                    {game.home}
                  </span>
                  <span className="text-primary font-bold text-lg font-mono">
                    {game.homeScore} - {game.awayScore}
                  </span>
                  <span
                    className={`font-bold ${
                      (game.awayScore ?? 0) > (game.homeScore ?? 0) ? "text-win" : "text-foreground"
                    }`}
                  >
                    {game.away}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="bg-muted px-2 py-0.5 rounded text-xs uppercase font-semibold">
                    Final
                  </span>
                  <span>{game.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;
