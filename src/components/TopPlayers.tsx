import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X, Film } from "lucide-react";
import playerImg1 from "@/assets/player-portrait-1.jpg";
import playerImg2 from "@/assets/player-portrait-2.jpg";
import playerImg3 from "@/assets/player-portrait-3.jpg";
import playerImg4 from "@/assets/player-portrait-4.jpg";

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
  photo: string;
  highlights: Highlight[];
}

const players: Player[] = [
  {
    name: "Kwame Asante",
    team: "Vipers",
    ppg: 24.3,
    rpg: 8.1,
    apg: 5.2,
    photo: playerImg1,
    highlights: [
      { title: "40-Point Game vs Eagles", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "" },
      { title: "Buzzer Beater vs Reapers", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "" },
      { title: "Season Opener Triple-Double", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "" },
    ],
  },
  {
    name: "Yaw Mensah",
    team: "Eagles",
    ppg: 22.1,
    rpg: 6.4,
    apg: 3.8,
    photo: playerImg2,
    highlights: [
      { title: "Crossover & Dunk vs Bulldogs", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "" },
      { title: "35 Points in Semi-Final", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "" },
    ],
  },
  {
    name: "Kofi Adjei",
    team: "Reapers",
    ppg: 19.8,
    rpg: 9.2,
    apg: 2.1,
    photo: playerImg3,
    highlights: [
      { title: "20-Rebound Monster Game", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "" },
      { title: "Back-to-Back Blocks", url: "https://www.youtube.com/embed/dQw4w9WgXcQ", thumbnail: "" },
    ],
  },
  {
    name: "Nana Osei",
    team: "Knight Sharks",
    ppg: 18.5,
    rpg: 4.3,
    apg: 7.6,
    photo: playerImg4,
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
      <section id="highlights" className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-end justify-between mb-8 border-l-4 border-primary pl-4">
              <div>
                <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-1">
                  Stars
                </p>
                <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">
                  Top Players
                </h2>
              </div>
              <span className="hidden sm:inline text-xs text-muted-foreground uppercase tracking-widest">
                Tap a card for highlight reels
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {players.map((player, i) => (
                <motion.button
                  type="button"
                  onClick={() => setSelectedPlayer(player)}
                  key={player.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`group bg-card border border-border rounded overflow-hidden text-left hover:border-primary/60 transition-colors relative ${
                    i === 0 ? "glow-gold" : ""
                  }`}
                >
                  {i === 0 && (
                    <div className="absolute top-0 left-0 bg-primary text-primary-foreground text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-br z-10">
                      MVP
                    </div>
                  )}
                  <div className="aspect-[4/5] relative overflow-hidden bg-muted">
                    <img
                      src={player.photo}
                      alt={`${player.name}, ${player.team}`}
                      width={768}
                      height={1024}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                    <span className="absolute bottom-2 right-3 text-[10px] font-bold uppercase tracking-widest text-primary bg-background/70 px-2 py-0.5 rounded">
                      {player.team}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-extrabold text-foreground text-base leading-tight">
                      {player.name}
                    </h3>
                    <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-border">
                      <div>
                        <p className="text-foreground font-mono font-extrabold">{player.ppg}</p>
                        <p className="text-[9px] uppercase tracking-widest text-muted-foreground">PPG</p>
                      </div>
                      <div>
                        <p className="text-foreground font-mono font-extrabold">{player.rpg}</p>
                        <p className="text-[9px] uppercase tracking-widest text-muted-foreground">RPG</p>
                      </div>
                      <div>
                        <p className="text-foreground font-mono font-extrabold">{player.apg}</p>
                        <p className="text-[9px] uppercase tracking-widest text-muted-foreground">APG</p>
                      </div>
                    </div>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-primary text-[11px] font-bold uppercase tracking-widest group-hover:gap-2 transition-all">
                      <Film className="w-3 h-3" />
                      {player.highlights.length} Reels
                    </div>
                  </div>
                </motion.button>
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
            <div className="flex items-center justify-between p-6 border-b border-border gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <img
                  src={selectedPlayer.photo}
                  alt={selectedPlayer.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover object-top border-2 border-primary flex-shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-foreground font-sans truncate">{selectedPlayer.name}</h3>
                  <p className="text-sm text-muted-foreground">{selectedPlayer.team} • Highlight Reels</p>
                </div>
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
