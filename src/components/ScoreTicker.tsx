const tickerGames = [
  { home: "VIP", away: "EAG", hs: 72, as: 65, status: "FINAL" },
  { home: "EAG", away: "KNS", hs: 58, as: 61, status: "FINAL" },
  { home: "REA", away: "BUL", hs: 0, as: 0, status: "TUE 4:00 PM" },
  { home: "KNS", away: "WOL", hs: 0, as: 0, status: "WED 6:00 PM" },
  { home: "KIN", away: "PAN", hs: 81, as: 79, status: "FINAL/OT" },
  { home: "WOL", away: "VIP", hs: 0, as: 0, status: "FRI 7:00 PM" },
  { home: "BUL", away: "EAG", hs: 67, as: 70, status: "FINAL" },
  { home: "PAN", away: "REA", hs: 0, as: 0, status: "SAT 5:00 PM" },
];

const Item = ({ g }: { g: (typeof tickerGames)[number] }) => {
  const isFinal = g.status.startsWith("FINAL");
  return (
    <div className="flex items-center gap-3 px-6 py-2 border-r border-border whitespace-nowrap">
      <div className="flex items-center gap-2 text-xs">
        <span className="font-bold text-foreground tracking-wider">{g.away}</span>
        {isFinal && <span className="font-mono font-bold text-foreground">{g.as}</span>}
      </div>
      <span className="text-muted-foreground text-[10px]">@</span>
      <div className="flex items-center gap-2 text-xs">
        <span className="font-bold text-foreground tracking-wider">{g.home}</span>
        {isFinal && <span className="font-mono font-bold text-foreground">{g.hs}</span>}
      </div>
      <span
        className={`text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded ${
          isFinal
            ? "text-muted-foreground bg-muted"
            : "text-primary bg-primary/10"
        }`}
      >
        {g.status}
      </span>
    </div>
  );
};

const ScoreTicker = () => {
  const loop = [...tickerGames, ...tickerGames];
  return (
    <div className="bg-card border-y border-border overflow-hidden">
      <div className="flex items-stretch">
        <div className="hidden sm:flex items-center gap-2 bg-primary px-4 py-2 text-primary-foreground text-xs font-bold uppercase tracking-widest shrink-0">
          <span className="w-2 h-2 rounded-full bg-white live-dot" />
          Scores
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex ticker-track w-max">
            {loop.map((g, i) => (
              <Item key={i} g={g} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreTicker;
