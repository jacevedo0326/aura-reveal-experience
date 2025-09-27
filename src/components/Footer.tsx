
import { Linkedin, X as XIcon } from "lucide-react";

const Footer = () => (
  <footer className="w-full bg-black/80 border-t border-white/10 py-12 mt-16">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex flex-col items-start gap-2">
        <span className="text-white text-lg font-bold tracking-wide">AuraAero</span>
        <span className="text-muted-foreground text-sm max-w-xs">
          Revolutionizing aerial intelligence with 360° vision and AI-powered insights.
        </span>
        <div className="flex gap-4 mt-2">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-primary transition-colors" title="LinkedIn">
            <Linkedin size={22} />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-primary transition-colors" title="X (Twitter)">
            <XIcon size={22} />
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-4 text-white text-sm opacity-80">
        <a href="/our-story" className="hover:text-primary transition-colors">Our Story</a>
        <a href="/insights" className="hover:text-primary transition-colors">Insights</a>
        <a href="/reveal" className="hover:text-primary transition-colors">Reveal</a>
        <a href="/tech-specs" className="hover:text-primary transition-colors">Tech Specs</a>
      </div>
      <div className="text-white text-xs opacity-60 text-center md:text-right">
  © {new Date().getFullYear()} AuraAero. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
