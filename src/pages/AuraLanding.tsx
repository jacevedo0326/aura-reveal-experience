import { useEffect } from 'react';
import { EmailCapture } from '@/components/EmailCapture';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import auraHero from '@/assets/aura-hero.jpg';
import auraAware from '@/assets/aura-aware.jpg';
import aerialPanorama from '@/assets/aerial-panorama.jpg';

const AuraLanding = () => {
  const { animatedElements } = useScrollAnimation();

  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Update page title
    document.title = 'Aura - The Future of Aerial Intelligence';
  }, []);

  const scrollToEmailCapture = () => {
    document.getElementById('email-capture')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Section 1: The Vision - Hero */}
      <section 
        className="section-full relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${auraHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <h1 
            className="hero-text mb-8 fade-in-up"
            data-animate-id="hero-title"
          >
            Stop Piloting a Camera.
          </h1>
          <p 
            className="body-large mb-12 fade-in-up"
            data-animate-id="hero-subtitle"
            style={{ animationDelay: '0.2s' }}
          >
            Start Commanding the Scene.
          </p>
          <button
            onClick={scrollToEmailCapture}
            className="fade-in-up text-primary hover:text-primary-glow transition-colors duration-300 text-xl font-medium underline decoration-2 underline-offset-8 hover:decoration-primary-glow"
            data-animate-id="hero-cta"
            style={{ animationDelay: '0.4s' }}
          >
            Join the Launch List →
          </button>
        </div>
      </section>

      {/* Section 2: The Core Idea */}
      <section className="section-full bg-section-bg">
        <div className="text-center max-w-4xl mx-auto">
          <h2 
            className="section-headline mb-12 fade-in-up gradient-text"
            data-animate-id="intro-title"
          >
            Introducing Aura.
          </h2>
          <p 
            className="body-large leading-relaxed fade-in-up"
            data-animate-id="intro-text"
            style={{ animationDelay: '0.2s' }}
          >
            The world's first 360° Aerial Intelligence Platform. A revolutionary drone payload that delivers a single, seamless source of truth. This is not a better camera. This is a new way to see.
          </p>
        </div>
      </section>

      {/* Section 3: God's Eye View */}
      <section className="section-full relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${aerialPanorama})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <h2 
            className="section-headline mb-16 fade-in-up"
            data-animate-id="vision-title"
          >
            See Everything. Instantly.
          </h2>
          <div 
            className="bg-card/20 backdrop-blur-sm border border-border/20 rounded-2xl p-8 fade-in-up"
            data-animate-id="vision-content"
            style={{ animationDelay: '0.3s' }}
          >
            <p className="body-large">
              A complete, 4K spherical view means you never lose context. No blind spots. No compromises.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4a: Aura Aware 360 */}
      <section className="section-full bg-gradient-subtle">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div 
            className="fade-in-up"
            data-animate-id="aware-image"
          >
            <img 
              src={auraAware} 
              alt="Aura Aware 360" 
              className="w-full max-w-md mx-auto rounded-2xl shadow-premium"
            />
          </div>
          <div className="space-y-8">
            <h2 
              className="section-headline fade-in-up"
              data-animate-id="aware-title"
              style={{ animationDelay: '0.2s' }}
            >
              Aura Aware 360
            </h2>
            <p 
              className="body-large text-muted-foreground fade-in-up"
              data-animate-id="aware-text"
              style={{ animationDelay: '0.4s' }}
            >
              The ultimate tool for comprehensive site scanning and reality capture. Capture everything with undisputed clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4b: Aura ISR-360 Pro */}
      <section className="section-full bg-hero-bg">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="md:order-2 fade-in-up" data-animate-id="isr-image">
            <img 
              src={auraHero} 
              alt="Aura ISR-360 Pro" 
              className="w-full max-w-md mx-auto rounded-2xl shadow-premium"
            />
          </div>
          <div className="md:order-1 space-y-8">
            <h2 
              className="section-headline fade-in-up"
              data-animate-id="isr-title"
              style={{ animationDelay: '0.2s' }}
            >
              Aura ISR-360 Pro
            </h2>
            <p 
              className="body-large text-muted-foreground fade-in-up"
              data-animate-id="isr-text"
              style={{ animationDelay: '0.4s' }}
            >
              The definitive multi-sensor payload for mission-critical ISR. Fusing 360° overwatch with high-resolution thermal and extreme optical zoom.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: AI Features */}
      <section className="section-full bg-section-bg">
        <div className="text-center max-w-4xl mx-auto space-y-12">
          <h2 
            className="section-headline fade-in-up gradient-text"
            data-animate-id="ai-title"
          >
            Your Cognitive Partner in the Sky.
          </h2>
          <p 
            className="body-large text-muted-foreground leading-relaxed fade-in-up"
            data-animate-id="ai-text"
            style={{ animationDelay: '0.3s' }}
          >
            A powerful onboard NVIDIA Jetson processor works as your partner. It doesn't just show you pixels; it actively highlights targets of interest, turning a flood of data into actionable intelligence. It reduces cognitive load when it matters most.
          </p>
        </div>
      </section>

      {/* Section 6: Build Quality */}
      <section className="section-full bg-gradient-hero">
        <div className="text-center max-w-4xl mx-auto space-y-12">
          <h2 
            className="section-headline fade-in-up"
            data-animate-id="quality-title"
          >
            Engineered for the Mission.
          </h2>
          <p 
            className="body-large text-muted-foreground leading-relaxed fade-in-up"
            data-animate-id="quality-text"
            style={{ animationDelay: '0.3s' }}
          >
            From the CNC-milled 6061 aluminum of the ISR-360 Pro to the IP54-rated housing, Aura is built to endure. It's a professional tool designed for unforgiving environments, inspiring confidence the moment you hold it.
          </p>
        </div>
      </section>

      {/* Section 7: Tech Specs */}
      <section className="section-full bg-background">
        <div className="max-w-6xl mx-auto space-y-16">
          <h2 
            className="section-headline text-center fade-in-up gradient-text"
            data-animate-id="specs-title"
          >
            Tech Specs
          </h2>
          
          {/* Product Images Side by Side */}
          <div 
            className="grid md:grid-cols-2 gap-12 mb-16 fade-in-up"
            data-animate-id="specs-images"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="text-center">
              <img 
                src={auraAware} 
                alt="Aura Aware 360" 
                className="w-full max-w-sm mx-auto rounded-2xl shadow-premium mb-6"
              />
              <h3 className="text-2xl font-semibold">Aura Aware 360</h3>
            </div>
            <div className="text-center">
              <img 
                src={auraHero} 
                alt="Aura ISR-360 Pro" 
                className="w-full max-w-sm mx-auto rounded-2xl shadow-premium mb-6"
              />
              <h3 className="text-2xl font-semibold">Aura ISR-360 Pro</h3>
            </div>
          </div>

          {/* Specifications Grid */}
          <div 
            className="space-y-12 fade-in-up"
            data-animate-id="specs-content"
            style={{ animationDelay: '0.4s' }}
          >
            {/* 360° Vision System */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-primary border-b border-border/20 pb-2">
                360° Vision System
              </h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="body-medium text-muted-foreground">2x 12MP sensors</p>
                  <p className="body-medium text-muted-foreground">4K spherical video @ 30fps</p>
                  <p className="body-medium text-muted-foreground">Real-time stitching</p>
                </div>
                <div>
                  <p className="body-medium text-muted-foreground">2x 12MP sensors</p>
                  <p className="body-medium text-muted-foreground">4K spherical video @ 30fps</p>
                  <p className="body-medium text-muted-foreground">Real-time stitching</p>
                </div>
              </div>
            </div>

            {/* Forward Sensor Suite */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-primary border-b border-border/20 pb-2">
                Forward Sensor Suite
              </h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="body-medium text-muted-foreground">—</p>
                </div>
                <div>
                  <p className="body-medium text-muted-foreground">Thermal Core: 640x512 @ 60Hz</p>
                  <p className="body-medium text-muted-foreground">25x Optical Zoom</p>
                  <p className="body-medium text-muted-foreground">Stabilized gimbal system</p>
                </div>
              </div>
            </div>

            {/* Image Processing & AI */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-primary border-b border-border/20 pb-2">
                Image Processing & AI
              </h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="body-medium text-muted-foreground">Aura Clarity Engine</p>
                  <p className="body-medium text-muted-foreground">ARM Cortex-A78AE</p>
                  <p className="body-medium text-muted-foreground">Real-time enhancement</p>
                </div>
                <div>
                  <p className="body-medium text-muted-foreground">Aura Clarity Engine</p>
                  <p className="body-medium text-muted-foreground">NVIDIA Jetson Orin NX</p>
                  <p className="body-medium text-muted-foreground">AI target detection</p>
                </div>
              </div>
            </div>

            {/* Construction & Environmental */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-primary border-b border-border/20 pb-2">
                Construction & Environmental
              </h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="body-medium text-muted-foreground">Carbon fiber housing</p>
                  <p className="body-medium text-muted-foreground">IP54 rated</p>
                  <p className="body-medium text-muted-foreground">Target weight: 280g</p>
                </div>
                <div>
                  <p className="body-medium text-muted-foreground">CNC-milled 6061 aluminum</p>
                  <p className="body-medium text-muted-foreground">IP54 rated</p>
                  <p className="body-medium text-muted-foreground">Target weight: 420g</p>
                </div>
              </div>
            </div>

            {/* Integration */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-primary border-b border-border/20 pb-2">
                Integration
              </h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="body-medium text-muted-foreground">DJI Payload SDK</p>
                  <p className="body-medium text-muted-foreground">MAVLink compatible</p>
                  <p className="body-medium text-muted-foreground">Universal mount system</p>
                </div>
                <div>
                  <p className="body-medium text-muted-foreground">DJI Payload SDK</p>
                  <p className="body-medium text-muted-foreground">MAVLink compatible</p>
                  <p className="body-medium text-muted-foreground">Universal mount system</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section id="email-capture" className="section-full bg-background py-24">
        <div className="text-center max-w-3xl mx-auto space-y-12">
          <div className="space-y-8">
            <h2 
              className="section-headline fade-in-up"
              data-animate-id="final-title"
            >
              The Future of Aerial Intelligence is Here.
            </h2>
            <p 
              className="body-large text-muted-foreground fade-in-up"
              data-animate-id="final-subtitle"
              style={{ animationDelay: '0.2s' }}
            >
              Be one of the first to own this groundbreaking technology. Join our exclusive list to be notified the moment our Indiegogo campaign launches and secure your Super Early Bird discount.
            </p>
          </div>
          <div 
            className="fade-in-up"
            data-animate-id="email-form"
            style={{ animationDelay: '0.4s' }}
          >
            <EmailCapture />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border/20 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Aura Intelligence. All Rights Reserved. | Privacy Policy
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AuraLanding;