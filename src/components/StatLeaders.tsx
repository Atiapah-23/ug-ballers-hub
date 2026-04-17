import { motion } from "framer-motion";

const leaders = [
  {
    category: "Points",
    abbr: "PPG",
    list: [
      { name: "Kwame Asante", team: "Vipers", value: 24.3 },
      { name: "Yaw Mensah", team: "Eagles", value: 22.1 },
      { name: "Kofi Adjei", team: "Reapers", value: 19.8 },
    ],
  },
  {
    category: "Rebounds",
    abbr: "RPG",
    list: [
      { name: "Kofi Adjei", team: "Reapers", value: 9.2 },
      { name: "Kwame Asante", team: "Vipers", value: 8.1 },
      { name: "Yaw Mensah", team: "Eagles", value: 6.4 },
    ],
  },
  {
    category: "Assists",
    abbr: "APG",
    list: [
      { name: "Nana Osei", team: "Knight Sharks", value: 7.6 },
      { name: "Kwame Asante", team: "Vipers", value: 5.2 },
      { name: "Yaw Mensah", team: "Eagles", value: 3.8 },
    ],
  },
];

const StatLeaders = () => {
  return (
    <section id="stats" className="py-16 px-6 bg-card/40 border-y border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-8 border-l-4 border-primary pl-4">
          <div>
            <p className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-1">
              Numbers
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">
              Stat Leaders
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {leaders.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card border border-border rounded overflow-hidden"
            >
              <div className="flex items-center justify-between px-4 py-3 bg-muted">
                <h3 className="font-extrabold text-sm uppercase tracking-widest text-foreground">
                  {cat.category}
                </h3>
                <span className="text-[10px] font-bold tracking-widest text-primary">
                  {cat.abbr}
                </span>
              </div>
              <div className="divide-y divide-border">
                {cat.list.map((p, i) => (
                  <div
                    key={p.name}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-muted/40 transition-colors"
                  >
                    <span
                      className={`font-mono font-bold text-sm w-5 ${
                        i === 0 ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-foreground font-bold text-xs flex-shrink-0">
                      {p.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm text-foreground truncate">
                        {p.name}
                      </p>
                      <p className="text-[11px] text-muted-foreground">{p.team}</p>
                    </div>
                    <span className="font-mono font-extrabold text-lg text-foreground">
                      {p.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatLeaders;
