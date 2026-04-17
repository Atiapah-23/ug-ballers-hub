import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import ugHoopsLogo from "@/assets/ug-hoops-logo.png";

const navItems = [
  { label: "Standings", href: "#standings" },
  { label: "Schedule", href: "#schedule" },
  { label: "Players", href: "#players" },
  { label: "Highlights", href: "#highlights" },
  { label: "Stats", href: "#stats" },
  { label: "Teams", href: "#standings" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top accent bar */}
      <div className="h-1 nba-stripe" />

      <div className="container mx-auto px-6 flex items-center justify-between h-14">
        <a href="/" className="flex items-center gap-2.5">
          <img
            src={ugHoopsLogo}
            alt="UG Hoops basketball logo"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />
          <span className="font-bold text-base tracking-wider text-foreground leading-none">
            UG <span className="text-primary">HOOPS</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-7 text-[13px] font-bold uppercase tracking-wider">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors relative py-5"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="hidden md:inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <Search className="w-4 h-4" />
          </button>
          <a
            href="#schedule"
            className="hidden md:inline-flex bg-primary text-primary-foreground px-4 py-2 rounded text-[11px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Watch Live
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="lg:hidden text-foreground"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-bold uppercase tracking-wider text-foreground/80 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
