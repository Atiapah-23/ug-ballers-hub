import { Instagram, Twitter, Facebook } from "lucide-react";

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/ughoops",
    icon: Instagram,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/ughoops",
    icon: Twitter,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/ughoops",
    icon: Facebook,
  },
  {
    name: "Snapchat",
    href: "https://snapchat.com/add/ughoops",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M12 2c3.3 0 5.6 2.4 5.6 5.7 0 .9-.1 1.8-.2 2.6.4.2.9.3 1.4.3.5 0 .9-.1 1.2-.2.2-.1.4-.1.5-.1.4 0 .8.3.8.7 0 .5-.4.8-1.4 1.2-.5.2-1.1.4-1.2.7-.1.2 0 .5.1.7.4.9 1.5 2.4 3.5 2.7.3 0 .5.3.5.6 0 .8-1.7 1.4-3.4 1.6-.1.2-.2.7-.3 1-.1.2-.3.3-.5.3h-.1c-.3 0-.7-.1-1.4-.1-.4 0-.8 0-1.2.1-.8.1-1.5.7-2.3 1.3-.8.6-1.7 1.2-2.9 1.2s-2.1-.6-2.9-1.2c-.8-.6-1.5-1.2-2.3-1.3-.4-.1-.8-.1-1.2-.1-.7 0-1.1.1-1.4.1-.3 0-.5-.2-.6-.4-.1-.3-.2-.8-.3-1-1.7-.2-3.4-.8-3.4-1.6 0-.3.2-.5.5-.6 2-.3 3.1-1.8 3.5-2.7.1-.2.2-.5.1-.7-.1-.3-.7-.5-1.2-.7-1-.4-1.4-.7-1.4-1.2 0-.4.4-.7.8-.7.1 0 .3 0 .5.1.3.1.7.2 1.2.2.5 0 1-.1 1.4-.3-.1-.8-.2-1.7-.2-2.6C6.4 4.4 8.7 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@ughoops",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.83a8.16 8.16 0 0 0 4.77 1.52V6.93a4.85 4.85 0 0 1-1.84-.24z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span>© 2026 University of Ghana Basketball League</span>
        <nav aria-label="Social media" className="flex items-center gap-3">
          {socials.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow UG Hoops on ${name}`}
              className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Icon />
            </a>
          ))}
        </nav>
        <span>Built with 🏀 at Legon</span>
      </div>
    </footer>
  );
};

export default Footer;
