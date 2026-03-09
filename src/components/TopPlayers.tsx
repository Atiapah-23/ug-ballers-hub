import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Play, X, Film } from "lucide-react";

interface Highlight {
  title: string;
  url: string;
  thumbnail: string;
}

interface Player {
  name: string;
  team: string;
  ppg: number;
  rpg: number;
  apg: number;
  highlights: Highlight[];
}

const players: Player[] = [
  {
    name: "Kwame Asante",
    team: "Legon Hall",
    ppg: 24.3,
    rpg: 8.1,
    apg: 5.2,
    highlights: [
      { title: "40-Point Game vs Akuafo", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "" },
      { title: "Buzzer Beater vs Commonwealth", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "" },
      { title: "Season Opener Triple-Double", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "" },
    ],
  },
  {
    name: "Yaw Mensah",
    team: "Akuafo Hall",
    ppg: 22.1,
    rpg: 6.4,
    apg: 3.8,
    highlights: [
      { title: "Crossover & Dunk vs Volta", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "" },
      { title: "35 Points in Semi-Final", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "" },
    ],
  },
  {
    name: "Kofi Adjei",
    team: "Commonwealth Hall",
    ppg: 19.8,
    rpg: 9.2,
    apg: 2.1,
    highlights: [
      { title: "20-Rebound Monster Game", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "" },
      { title: "Back-to-Back Blocks", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "" },
    ],
  },
  {
    name: "Nana Osei",
    team: "Mensah Sarbah Hall",
    ppg: 18.5,
    rpg: 4.3,
    apg: 7.6,
    highlights: [
      { title: "12 Assists Masterclass", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "" },
    ],
  },
];

const TopPlayers = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
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
                      {/* Highlights Button */}
                      <button
                        onClick={() => setSelectedPlayer(player)}
                        className="mt-4 inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors"
                      >
                        <Film className="w-3.5 h-3.5" />
                        Highlights ({player.highlights.length})
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Modal */}
      {selectedPlayer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-background/90 backdrop-blur-sm"
            onClick={() => { setSelectedPlayer(null); setActiveVideo(null); }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-card border border-border rounded-xl w-full max-w-2xl max-h-[85vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h3 className="text-xl font-bold text-foreground font-sans">{selectedPlayer.name}</h3>
                <p className="text-sm text-muted-foreground">{selectedPlayer.team} • Highlight Reels</p>
              </div>
              <button
                onClick={() => { setSelectedPlayer(null); setActiveVideo(null); }}
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player */}
            {activeVideo && (
              <div className="aspect-video bg-background">
                <iframe
                  src={activeVideo}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Highlight video"
                />
              </div>
            )}

            {/* Highlights List */}
            <div className="p-6 space-y-3">
              {selectedPlayer.highlights.map((highlight, i) => (
                <button
                  key={i}
                  onClick={() => setActiveVideo(highlight.url)}
                  className={`w-full flex items-center gap-4 p-4 rounded-lg border transition-colors text-left ${
                    activeVideo === highlight.url
                      ? "bg-primary/10 border-primary/40"
                      : "bg-muted/30 border-border hover:bg-muted/50"
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Play className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground text-sm">{highlight.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Highlight Reel #{i + 1}</p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default TopPlayers;
