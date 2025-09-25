import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import auraHero from '@/assets/aura-hero.jpg';
import auraDetail from '@/assets/aura-detail-macro.jpg';
import auraLifestyle from '@/assets/aura-lifestyle-1.jpg';
import auraSar from '@/assets/aura-use-case-sar.jpg';
import auraAI from '@/assets/aura-ai-visualization.jpg';

const AuraReveal = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroRef = useRef<HTMLDivElement>(null);
  const chipRef = useRef<HTMLDivElement>(null);
  const batteryRef = useRef<HTMLDivElement>(null);
  const displayRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-50px 0px',
      }
    );

    const refs = [heroRef, chipRef, batteryRef, displayRef, aiRef];
    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <main className="bg-background overflow-x-hidden">
      {/* Hero Section - Apple Style */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
        <div 
          ref={heroRef}
          className="text-center fade-in-up max-w-6xl mx-auto"
        >
          {/* Apple-style tagline */}
          <div className="mb-8">
            <span className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
              Built for the future
            </span>
          </div>
          
          {/* Massive Apple-style headline */}
          <h1 className="apple-display-xl mb-6">
            <span className="block">Aura</span>
            <span className="block gradient-text">Wearable</span>
          </h1>
          
          {/* Apple-style subtitle */}
          <p className="apple-subheadline mb-12 max-w-3xl mx-auto">
            Revolutionary. Personal. Powerful.
          </p>
          
          {/* Pricing - Apple style */}
          <div className="mb-12">
            <p className="apple-headline mb-2">From $2,999</p>
            <p className="text-lg text-muted-foreground">or $249.92/mo. for 12 mo.*</p>
          </div>
          
          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-glow"
          >
            Pre-order now
          </Button>
        </div>
        
        {/* Hero Image */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          >
            <img 
              src={auraHero} 
              alt="Aura Wearable Device"
              className="w-full h-full object-cover opacity-40"
            />
          </div>
        </div>
      </section>

      {/* Feature Gallery - Apple Style Sections */}
      
      {/* AI Intelligence */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div ref={aiRef} className="fade-in-up">
            <h2 className="apple-display-lg mb-6">
              Built for
              <br />
              <span className="gradient-text">AI Intelligence</span>
            </h2>
            <p className="apple-body mb-8">
              Personal, private, powerful AI processing at the edge. 
              Experience the future of augmented intelligence.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-lg">Real-time environmental analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-lg">Predictive health monitoring</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-lg">Adaptive behavior learning</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src={auraAI} 
              alt="AI Visualization"
              className="w-full rounded-2xl shadow-premium"
            />
          </div>
        </div>
      </section>

      {/* Chip Performance */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-section-bg">
        <div className="max-w-7xl mx-auto text-center">
          <div ref={chipRef} className="fade-in-up">
            <h2 className="apple-display-lg mb-6">
              <span className="gradient-text">A18 Bionic</span>
              <br />
              Impossible made possible.
            </h2>
            <p className="apple-body mb-16 max-w-3xl mx-auto">
              The most advanced neural engine ever created. 
              Ready for whatever's impossible.
            </p>
            
            {/* Performance Stats - Apple Style */}
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div>
                <div className="apple-display-md gradient-text mb-2">50%</div>
                <p className="text-lg text-muted-foreground">Faster processing</p>
              </div>
              <div>
                <div className="apple-display-md gradient-text mb-2">10x</div>
                <p className="text-lg text-muted-foreground">Better efficiency</p>
              </div>
              <div>
                <div className="apple-display-md gradient-text mb-2">24/7</div>
                <p className="text-lg text-muted-foreground">Always-on capability</p>
              </div>
            </div>
            
            <img 
              src={auraDetail} 
              alt="Aura Detail"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-premium"
            />
          </div>
        </div>
      </section>

      {/* Battery Life */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img 
              src={auraSar} 
              alt="Search and Rescue Use Case"
              className="w-full rounded-2xl shadow-premium"
            />
          </div>
          <div ref={batteryRef} className="fade-in-up order-1 lg:order-2">
            <h2 className="apple-display-lg mb-6">
              Longest battery life
              <br />
              <span className="gradient-text">ever in a wearable</span>
            </h2>
            <p className="apple-body mb-8">
              Up to 7 days of all-day use. 
              The power to keep going, whatever the mission.
            </p>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-medium">Normal Use</span>
                  <span className="text-lg text-primary">7 days</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-medium">Intensive Mode</span>
                  <span className="text-lg text-primary">48 hours</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-4/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Display */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-section-bg">
        <div className="max-w-7xl mx-auto text-center">
          <div ref={displayRef} className="fade-in-up">
            <h2 className="apple-display-lg mb-6">
              Retina Display
              <br />
              <span className="gradient-text">Brilliant in any light</span>
            </h2>
            <p className="apple-body mb-16 max-w-3xl mx-auto">
              2000 nits peak brightness. True-to-life colors. 
              Optimized for outdoor visibility and all-day comfort.
            </p>
            
            <div className="relative max-w-4xl mx-auto">
              <img 
                src={auraLifestyle} 
                alt="Aura Lifestyle"
                className="w-full rounded-2xl shadow-premium"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="apple-display-xl mb-8">
            <span className="gradient-text">Aura</span>
            <br />
            The future is here.
          </h2>
          <p className="apple-subheadline mb-12">
            Revolutionary wearable technology. 
            <br />
            Available for pre-order now.
          </p>
          
          <div className="space-y-6">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow text-primary-foreground px-12 py-4 text-xl font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-glow mr-4"
            >
              Pre-order Aura
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-12 py-4 text-xl font-medium rounded-full transition-all duration-300"
            >
              Learn more
            </Button>
          </div>
          
          <p className="text-lg text-muted-foreground mt-8">
            From $2,999 or $249.92/mo. for 12 mo.*
          </p>
        </div>
      </section>
    </main>
  );
};

export default AuraReveal;