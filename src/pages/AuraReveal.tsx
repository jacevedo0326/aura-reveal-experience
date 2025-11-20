import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import VideoCarousel from '@/components/VideoCarousel';
import auraHero from '@/assets/images/aura-hero.jpg';
import auraLifestyle from '@/assets/images/aura-lifestyle-1.jpg';
import auraSar from '@/assets/videos/video3.mp4';
import auraAI from '@/assets/images/aura-ai-visualization.jpg';
import revealVideo from '@/assets/videos/AURA_AERO _4K_Master_2B.mp4';
import heroShot2 from '@/assets/images/HeroShot.2.png';
import stillImage1 from '@/assets/images/still_image.1.png';

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
            <span className="block gradient-text">Aware 360</span>
          </h1>
          
          {/* Apple-style subtitle */}
          <p className="apple-subheadline mb-12 max-w-3xl mx-auto">
            Revolutionary environmental awareness.<br />
            Professional situational intelligence.
          </p>
          
          {/* Product lineup */}
          <div className="mb-12 space-y-4">
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div className="text-center">
                <p className="apple-headline mb-2">Aura Aware 360</p>
                <p className="text-lg text-muted-foreground">From $2,999</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <p className="apple-headline gradient-text">Aura ISR-360 Pro</p>
                  <span className="inline-flex items-center px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary">
                    Coming Soon
                  </span>
                </div>
                <p className="text-lg text-muted-foreground">From $4,999</p>
              </div>
            </div>
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
              alt="Aura Aware 360 and ISR-360 Pro"
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
              360-degree
              <br />
              <span className="gradient-text">Awareness</span>
            </h2>
            <p className="apple-body mb-8">
              Complete environmental monitoring with AI-powered threat detection. 
              See everything. Miss nothing.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-lg">360° environmental scanning</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-lg">Real-time threat analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-lg">Adaptive intelligence learning</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-lg">ISR-grade surveillance (Pro model)</span>
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
              <span className="gradient-text">Neural Engine</span>
              <br />
              Military-grade intelligence.
            </h2>
            <p className="apple-body mb-16 max-w-3xl mx-auto">
              Advanced AI processing for real-time situational awareness. 
              Professional intelligence at the edge.
            </p>
            
            {/* Performance Stats - Apple Style */}
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div>
                <div className="apple-display-md gradient-text mb-2">360°</div>
                <p className="text-lg text-muted-foreground">Coverage radius</p>
              </div>
              <div>
                <div className="apple-display-md gradient-text mb-2">50m</div>
                <p className="text-lg text-muted-foreground">Detection range</p>
              </div>
              <div>
                <div className="apple-display-md gradient-text mb-2">24/7</div>
                <p className="text-lg text-muted-foreground">Continuous monitoring</p>
              </div>
            </div>
            
            <VideoCarousel 
              slides={[
                {
                  type: 'video',
                  src: revealVideo,
                  alt: 'Aura Aero mission reveal video',
                  holdDuration: 5000,
                },
                {
                  type: 'image',
                  src: heroShot2,
                  alt: 'Aura platform hero shot',
                  holdDuration: 5000,
                },
                {
                  type: 'image',
                  src: stillImage1,
                  alt: 'Aura platform still capture',
                  holdDuration: 5000,
                },
              ]}
              className="w-full max-w-4xl mx-auto h-[600px] shadow-premium"
              playbackSpeed={1}
            />
          </div>
        </div>
      </section>

      {/* Battery Life */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <video 
              src={auraSar} 
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-2xl shadow-premium"
            />
          </div>
          <div ref={batteryRef} className="fade-in-up order-1 lg:order-2">
            <h2 className="apple-display-lg mb-6">
              Mission-critical
              <br />
              <span className="gradient-text">endurance</span>
            </h2>
            <p className="apple-body mb-8">
              Extended operational capability for professional use. 
              Power that matches your mission requirements.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-border/60">
                <span className="text-lg font-medium">Aware 360 - Standard</span>
                <span className="text-lg text-primary">7 days</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border/60">
                <span className="text-lg font-medium">ISR-360 Pro - Surveillance</span>
                <span className="text-lg text-primary">72 hours</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-lg font-medium">Emergency Mode</span>
                <span className="text-lg text-primary">14 days</span>
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
              Professional HUD
              <br />
              <span className="gradient-text">Combat-ready display</span>
            </h2>
            <p className="apple-body mb-16 max-w-3xl mx-auto">
              Military-spec heads-up display. Crystal clear visibility in any environment. 
              Tactical information when you need it most.
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
            <span className="gradient-text">Aura Aware</span>
            <br />
            Professional awareness.
          </h2>
          <p className="apple-subheadline mb-12">
            Two models. Infinite possibilities. 
            <br />
            Choose your level of professional capability.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-center p-6 border border-border rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Aura Aware 360</h3>
              <p className="text-lg text-muted-foreground mb-6">Complete situational awareness for professionals</p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
              >
                Pre-order - $2,999
              </Button>
            </div>
            
            <div className="text-center p-6 border-2 border-primary rounded-2xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">Pro</span>
                <span className="bg-primary/10 border border-primary/20 text-primary px-4 py-1 rounded-full text-sm font-medium">Coming Soon</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Aura ISR-360 Pro</h3>
              <p className="text-lg text-muted-foreground mb-6">Military-grade intelligence and reconnaissance</p>
              <Button 
                size="lg" 
                disabled
                className="bg-muted text-muted-foreground px-8 py-3 text-lg font-medium rounded-full cursor-not-allowed"
              >
                Coming Soon - $4,999
              </Button>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-medium rounded-full transition-all duration-300"
          >
            Compare models
          </Button>
        </div>
      </section>
    </main>
  );
};

export default AuraReveal;