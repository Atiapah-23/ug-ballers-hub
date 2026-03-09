import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const players = [
  { name: "Kwame Asante", team: "Legon Hall", ppg: 24.3, rpg: 8.1, apg: 5.2 },
  { name: "Yaw Mensah", team: "Akuafo Hall", ppg: 22.1, rpg: 6.4, apg: 3.8 },
  { name: "Kofi Adjei", team: "Commonwealth Hall", ppg: 19.8, rpg: 9.2, apg: 2.1 },
  { name: "Nana Osei", team: "Mensah Sarbah Hall", ppg: 18.5, rpg: 4.3, apg: 7.6 },
];

const TopPlayers = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Trophy className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-gold">
              Top Players
            </h2>
          </div>
          <p className="text-muted-foreground mb-8">Season leaders</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {players.map((player, i) => (
              <motion.div
                key={player.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-card border border-border rounded-lg p-6 relative overflow-hidden ${
                  i === 0 ? "glow-gold" : ""
                }`}
              >
                {i === 0 && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
                    MVP
                  </div>
                )}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-primary font-bold text-lg">
                    {player.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground text-lg font-sans">
                      {player.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{player.team}</p>
                    <div className="flex gap-5 mt-3">
                      <div>
                        <p className="text-primary font-bold text-lg font-mono">{player.ppg}</p>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">PPG</p>
                      </div>
                      <div>
                        <p className="text-foreground font-bold text-lg font-mono">{player.rpg}</p>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">RPG</p>
                      </div>
                      <div>
                        <p className="text-foreground font-bold text-lg font-mono">{player.apg}</p>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">APG</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TopPlayers;
