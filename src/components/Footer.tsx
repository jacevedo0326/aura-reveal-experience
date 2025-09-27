const Footer = () => (
  <footer className="w-full bg-black/80 border-t border-white/10 py-8 mt-16">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-white text-sm opacity-80">
        © {new Date().getFullYear()} Aura Intelligence. All rights reserved.
      </div>
      <div className="flex gap-6 text-white text-sm opacity-80">
        <a href="/our-story" className="hover:text-primary transition-colors">Our Story</a>
        <a href="/insights" className="hover:text-primary transition-colors">Insights</a>
        <a href="/reveal" className="hover:text-primary transition-colors">Reveal</a>
        <a href="/tech-specs" className="hover:text-primary transition-colors">Tech Specs</a>
      </div>
    </div>
  </footer>
);

export default Footer;
