import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2">
          <span className="text-primary text-xl">🏀</span>
          <span className="font-bold text-lg tracking-wide text-foreground">
            UG <span className="text-primary">HOOPS</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
          <a href="#standings" className="text-muted-foreground hover:text-primary transition-colors">Standings</a>
          <a href="#schedule" className="text-muted-foreground hover:text-primary transition-colors">Schedule</a>
          <a href="#players" className="text-muted-foreground hover:text-primary transition-colors">Players</a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4 space-y-3">
          <a href="#standings" onClick={() => setOpen(false)} className="block text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary">Standings</a>
          <a href="#schedule" onClick={() => setOpen(false)} className="block text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary">Schedule</a>
          <a href="#players" onClick={() => setOpen(false)} className="block text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary">Players</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
