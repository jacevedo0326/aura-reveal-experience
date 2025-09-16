import { useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import auraHero from '@/assets/aura-hero.jpg';
import auraAware from '@/assets/aura-aware.jpg';
import aerialPanorama from '@/assets/aerial-panorama.jpg';

const AuraInsights = () => {
  const { animatedElements } = useScrollAnimation();

  useEffect(() => {
    document.title = 'Aura Insights - Aerial Intelligence Blog';
  }, []);

  const articles = [
    {
      id: 1,
      title: "The Tyranny of the Keyhole View: Why Modern ISR Needs a Paradigm Shift",
      excerpt: "Exploring the cognitive load created by traditional surveillance systems and introducing the concept of a 'live digital twin' as the solution.",
      image: aerialPanorama,
      date: "March 15, 2025"
    },
    {
      id: 2,
      title: "90 Seconds to ID: A Search & Rescue Case Study",
      excerpt: "The story of SAR Commander Sarah and how 360° overwatch revolutionized emergency response workflows.",
      image: auraAware,
      date: "March 10, 2025"
    },
    {
      id: 3,
      title: "Under the Hood: The Aura Clarity Engine",
      excerpt: "A technical deep dive into our proprietary software that cuts through haze and challenging light to reveal critical details.",
      image: auraHero,
      date: "March 5, 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <section className="section-full bg-gradient-subtle">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h1 
            className="hero-text fade-in-up gradient-text"
            data-animate-id="insights-title"
          >
            Aura Insights
          </h1>
          <p 
            className="body-large text-muted-foreground fade-in-up"
            data-animate-id="insights-subtitle"
            style={{ animationDelay: '0.2s' }}
          >
            Deeper dives into the technology and tactics behind the future of aerial intelligence.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-full bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article 
                key={article.id}
                className="bg-card border border-border/20 rounded-2xl overflow-hidden shadow-subtle hover:shadow-glow transition-all duration-300 fade-in-up group cursor-pointer"
                data-animate-id={`article-${article.id}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground body-medium leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="pt-2">
                    <span className="text-primary font-medium group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border/20 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Aura Intelligence. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AuraInsights;