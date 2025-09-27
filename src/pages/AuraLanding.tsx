import { useEffect } from 'react';
import { EmailCapture } from '@/components/EmailCapture';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import auraHero from '@/assets/aura-hero.jpg';
import auraAware from '@/assets/aura-aware.jpg';
import auraLifestyle from '@/assets/aura-lifestyle-1.jpg';
import auraDetailMacro from '@/assets/aura-detail-macro.jpg';
import auraUseCaseSar from '@/assets/aura-use-case-sar.jpg';
import auraUseCaseLaw from '@/assets/aura-use-case-law.jpg';
import auraAiVisualization from '@/assets/aura-ai-visualization.jpg';
import aerialPanorama from '@/assets/aerial-panorama.jpg';
import { Eye, Shield, Cpu, Camera, Zap, Target } from 'lucide-react';

const AuraLanding = () => {
  const { animatedElements } = useScrollAnimation();

  useEffect(() => {
    document.title = 'Aura - Revolutionary 360° Aerial Intelligence Platform';
  }, []);

  const scrollToEmailCapture = () => {
    document.getElementById('email-capture')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: Eye,
      title: "360° Situational Awareness",
      description: "Never lose context with complete spherical vision. See everything, everywhere, all at once."
    },
    {
      icon: Cpu,
      title: "AI-Powered Intelligence",
      description: "Advanced onboard processing turns raw data into actionable intelligence in real-time."
    },
    {
      icon: Shield,
      title: "Mission-Grade Durability",
      description: "Built to perform in the harshest environments where failure is not an option."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      {/* Hero Section - Revolutionary Opening */}
      <section 
        className="min-h-screen relative overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${auraHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <h1 
            className="hero-text mb-8 fade-in-up"
            data-animate-id="hero-title"
          >
            Stop Piloting a Camera.
          </h1>
          <h2 
            className="section-headline mb-12 fade-in-up text-muted-foreground"
            data-animate-id="hero-subtitle"
            style={{ animationDelay: '0.2s' }}
          >
            Start Commanding the Scene.
          </h2>
          <p 
            className="body-large mb-16 fade-in-up max-w-3xl mx-auto"
            data-animate-id="hero-description"
            style={{ animationDelay: '0.4s' }}
          >
            The world's first 360° Aerial Intelligence Platform. Revolutionary drone payload technology that delivers unprecedented situational awareness.
          </p>
          <div 
            className="space-y-6 fade-in-up"
            data-animate-id="hero-ctas"
            style={{ animationDelay: '0.6s' }}
          >
            <button
              onClick={scrollToEmailCapture}
              className="btn-primary text-xl px-12 py-4 rounded-2xl font-semibold tracking-wide font-sf mr-4 mb-4"
            >
              Join the Launch List
            </button>
            <Link
              to="/use-cases"
              className="inline-block text-primary hover:text-primary-glow transition-colors duration-300 text-xl font-medium underline decoration-2 underline-offset-8 hover:decoration-primary-glow"
            >
              See It in Action →
            </Link>
          </div>
        </div>
      </section>

      {/* The Big Idea - Apple Style Introduction */}
      <section className="section-full bg-background">
        <div className="text-center max-w-5xl mx-auto space-y-16">
          <div className="space-y-8">
            <h2 
              className="hero-text gradient-text fade-in-up"
              data-animate-id="big-idea-title"
            >
              Introducing Aura.
            </h2>
            <p 
              className="body-large leading-relaxed fade-in-up text-muted-foreground max-w-4xl mx-auto"
              data-animate-id="big-idea-text"
              style={{ animationDelay: '0.2s' }}
            >
              This is not a better camera. This is a new way to see. A revolutionary aerial intelligence platform that delivers a single, seamless source of truth from every angle, all the time.
            </p>
          </div>
        </div>
      </section>

      {/* Lifestyle Integration */}
      <section 
        className="section-full relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${auraLifestyle})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center max-w-4xl mx-auto space-y-12">
          <h2 
            className="section-headline fade-in-up"
            data-animate-id="lifestyle-title"
          >
            Intelligence at the Speed of Decision
          </h2>
          <p 
            className="body-large fade-in-up"
            data-animate-id="lifestyle-subtitle"
            style={{ animationDelay: '0.2s' }}
          >
            When every second matters, Aura transforms complex data streams into clear, actionable intelligence. Your mission-critical partner in the sky.
          </p>
        </div>
      </section>

      {/* Core Features - Apple Style */}
      <section className="section-full bg-section-bg">
        <div className="max-w-6xl mx-auto space-y-20">
          <div className="text-center">
            <h2 
              className="section-headline fade-in-up mb-6"
              data-animate-id="features-title"
            >
              Revolutionary by Design
            </h2>
            <p 
              className="body-large text-muted-foreground max-w-3xl mx-auto fade-in-up"
              data-animate-id="features-subtitle"
              style={{ animationDelay: '0.2s' }}
            >
              Three breakthrough technologies that redefine what's possible in aerial intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center space-y-6 fade-in-up"
                data-animate-id={`feature-${index}`}
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="mx-auto w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center">
                  <feature.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="feature-headline font-sf">{feature.title}</h3>
                <p className="body-medium text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* God's Eye View Demo */}
      <section 
        className="section-full relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${aerialPanorama})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center max-w-5xl mx-auto space-y-16">
          <div className="space-y-8">
            <h2 
              className="hero-text fade-in-up"
              data-animate-id="vision-title"
            >
              See Everything.
            </h2>
            <h3 
              className="section-headline fade-in-up text-primary"
              data-animate-id="vision-subtitle"
              style={{ animationDelay: '0.2s' }}
            >
              Instantly.
            </h3>
          </div>
          <div 
            className="bg-card/20 backdrop-blur-sm border border-border/20 rounded-3xl p-12 fade-in-up"
            data-animate-id="vision-content"
            style={{ animationDelay: '0.4s' }}
          >
            <p className="body-large leading-relaxed">
              A complete, 4K spherical view means you never lose context. No blind spots. No compromises. The complete picture, exactly when you need it most.
            </p>
          </div>
        </div>
      </section>

      {/* Product Showcase - Two Models */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Aura Aware 360 */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div 
              className="fade-in-up"
              data-animate-id="aware-image"
            >
              <img 
                src={auraAware} 
                alt="Aura Aware 360" 
                className="w-full max-w-lg mx-auto rounded-3xl shadow-premium"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 
                  className="section-headline fade-in-up font-sf"
                  data-animate-id="aware-title"
                  style={{ animationDelay: '0.1s' }}
                >
                  Aura Aware 360
                </h2>
                <h3 
                  className="feature-headline text-primary fade-in-up"
                  data-animate-id="aware-tagline"
                  style={{ animationDelay: '0.2s' }}
                >
                  Master of Reality Capture
                </h3>
              </div>
              <p 
                className="body-large text-muted-foreground leading-relaxed fade-in-up"
                data-animate-id="aware-description"
                style={{ animationDelay: '0.3s' }}
              >
                The ultimate tool for comprehensive site scanning and reality capture. Every detail captured with undisputed clarity, creating digital twins that reveal insights invisible to traditional methods.
              </p>
              <div 
                className="flex items-center space-x-6 fade-in-up"
                data-animate-id="aware-specs"
                style={{ animationDelay: '0.4s' }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary font-sf">4K</div>
                  <div className="text-sm text-muted-foreground">Spherical Video</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary font-sf">280g</div>
                  <div className="text-sm text-muted-foreground">Target Weight</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary font-sf">IP54</div>
                  <div className="text-sm text-muted-foreground">Weather Sealed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Aura ISR-360 Pro */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="lg:order-2 fade-in-up" data-animate-id="isr-image">
              <img 
                src={auraHero} 
                alt="Aura ISR-360 Pro" 
                className="w-full max-w-lg mx-auto rounded-3xl shadow-premium"
              />
            </div>
            <div className="lg:order-1 space-y-8">
              <div className="space-y-4">
                <h2 
                  className="section-headline fade-in-up font-sf"
                  data-animate-id="isr-title"
                  style={{ animationDelay: '0.1s' }}
                >
                  Aura ISR-360 Pro
                </h2>
                <h3 
                  className="feature-headline text-primary fade-in-up"
                  data-animate-id="isr-tagline"
                  style={{ animationDelay: '0.2s' }}
                >
                  The Intelligence Advantage
                </h3>
              </div>
              <p 
                className="body-large text-muted-foreground leading-relaxed fade-in-up"
                data-animate-id="isr-description"
                style={{ animationDelay: '0.3s' }}
              >
                The definitive multi-sensor payload for mission-critical operations. Fusing 360° overwatch with high-resolution thermal imaging and extreme optical zoom for unparalleled intelligence gathering.
              </p>
              <div 
                className="flex items-center space-x-6 fade-in-up"
                data-animate-id="isr-specs"
                style={{ animationDelay: '0.4s' }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary font-sf">25x</div>
                  <div className="text-sm text-muted-foreground">Optical Zoom</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary font-sf">640x512</div>
                  <div className="text-sm text-muted-foreground">Thermal Core</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary font-sf">100 TOPS</div>
                  <div className="text-sm text-muted-foreground">AI Processing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Intelligence Section */}
      <section 
        className="section-full relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url(${auraAiVisualization})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center max-w-5xl mx-auto space-y-16">
          <div className="space-y-8">
            <h2 
              className="hero-text fade-in-up"
              data-animate-id="ai-title"
            >
              Your Cognitive Partner
            </h2>
            <h3 
              className="section-headline fade-in-up text-primary"
              data-animate-id="ai-subtitle"
              style={{ animationDelay: '0.2s' }}
            >
              in the Sky
            </h3>
          </div>
          <div 
            className="bg-card/20 backdrop-blur-sm border border-border/20 rounded-3xl p-12 fade-in-up"
            data-animate-id="ai-content"
            style={{ animationDelay: '0.4s' }}
          >
            <p className="body-large leading-relaxed mb-8">
              Powered by NVIDIA Jetson processing, Aura doesn't just show you pixels—it actively highlights targets of interest, turning overwhelming data streams into actionable intelligence.
            </p>
            <p className="body-medium text-muted-foreground">
              Reducing cognitive load when it matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Preview */}
      <section className="section-full bg-section-bg">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center">
            <h2 
              className="section-headline fade-in-up mb-6"
              data-animate-id="usecases-title"
            >
              Where Lives Depend on Intelligence
            </h2>
            <p 
              className="body-large text-muted-foreground max-w-3xl mx-auto fade-in-up"
              data-animate-id="usecases-subtitle"
              style={{ animationDelay: '0.2s' }}
            >
              From search and rescue to tactical operations, Aura delivers mission-critical capabilities when failure is not an option.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div 
              className="relative overflow-hidden rounded-3xl shadow-premium fade-in-up"
              data-animate-id="usecase-1"
              style={{ animationDelay: '0.1s' }}
            >
              <img 
                src={auraUseCaseSar} 
                alt="Search & Rescue Operations"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="feature-headline font-sf mb-3">Search & Rescue</h3>
                <p className="body-medium text-gray-200">
                  5x larger coverage area. 90% faster detection. Lives saved.
                </p>
              </div>
            </div>

            <div 
              className="relative overflow-hidden rounded-3xl shadow-premium fade-in-up"
              data-animate-id="usecase-2"
              style={{ animationDelay: '0.2s' }}
            >
              <img 
                src={auraUseCaseLaw} 
                alt="Law Enforcement Operations"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="feature-headline font-sf mb-3">Tactical Operations</h3>
                <p className="body-medium text-gray-200">
                  Complete perimeter awareness. Multi-target tracking. Enhanced officer safety.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/use-cases"
              className="inline-block btn-primary text-lg px-10 py-3 rounded-2xl font-semibold font-sf"
            >
              Explore All Use Cases
            </Link>
          </div>
        </div>
      </section>

      {/* Engineering Excellence */}
      <section 
        className="section-full relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${auraDetailMacro})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center max-w-4xl mx-auto space-y-16">
          <div className="space-y-8">
            <h2 
              className="hero-text fade-in-up"
              data-animate-id="engineering-title"
            >
              Engineered for
            </h2>
            <h3 
              className="hero-text fade-in-up text-primary"
              data-animate-id="engineering-subtitle"
              style={{ animationDelay: '0.2s' }}
            >
              the Mission
            </h3>
          </div>
          <div 
            className="bg-card/20 backdrop-blur-sm border border-border/20 rounded-3xl p-12 fade-in-up"
            data-animate-id="engineering-content"
            style={{ animationDelay: '0.4s' }}
          >
            <p className="body-large leading-relaxed">
              From CNC-milled 6061 aluminum to IP54-rated housing, every component is designed to perform in the harshest environments. This is precision engineering that inspires confidence the moment you hold it.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="section-full bg-background">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          <h2 
            className="section-headline fade-in-up mb-16"
            data-animate-id="testimonial-title"
          >
            Trusted by Professionals
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div 
              className="bg-card/20 backdrop-blur-sm border border-border/20 rounded-3xl p-8 fade-in-up"
              data-animate-id="testimonial-1"
            >
              <p className="body-medium text-muted-foreground mb-6 italic">
                "Aura has completely transformed our search and rescue operations. The 360° awareness means we never miss critical details."
              </p>
              <div className="font-semibold">Sarah Chen</div>
              <div className="text-sm text-muted-foreground">SAR Team Leader</div>
            </div>
            <div 
              className="bg-card/20 backdrop-blur-sm border border-border/20 rounded-3xl p-8 fade-in-up"
              data-animate-id="testimonial-2"
              style={{ animationDelay: '0.1s' }}
            >
              <p className="body-medium text-muted-foreground mb-6 italic">
                "The AI-powered target detection has revolutionized our tactical surveillance capabilities. It's like having extra eyes in the sky."
              </p>
              <div className="font-semibold">Marcus Rodriguez</div>
              <div className="text-sm text-muted-foreground">Tactical Operations</div>
            </div>
            <div 
              className="bg-card/20 backdrop-blur-sm border border-border/20 rounded-3xl p-8 fade-in-up"
              data-animate-id="testimonial-3"
              style={{ animationDelay: '0.2s' }}
            >
              <p className="body-medium text-muted-foreground mb-6 italic">
                "The build quality is exceptional. This is professional-grade equipment that performs reliably in demanding conditions."
              </p>
              <div className="font-semibold">Alex Thompson</div>
              <div className="text-sm text-muted-foreground">Infrastructure Security</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Specs Teaser */}
      <section className="section-full bg-section-bg">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          <h2 
            className="section-headline fade-in-up mb-16"
            data-animate-id="specs-teaser-title"
          >
            The Numbers Tell the Story
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div 
              className="fade-in-up"
              data-animate-id="spec-1"
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary font-sf mb-2">360°</div>
              <div className="text-muted-foreground">Complete Coverage</div>
            </div>
            <div 
              className="fade-in-up"
              data-animate-id="spec-2"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary font-sf mb-2">4K</div>
              <div className="text-muted-foreground">Video Resolution</div>
            </div>
            <div 
              className="fade-in-up"
              data-animate-id="spec-3"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary font-sf mb-2">100</div>
              <div className="text-muted-foreground">TOPS AI Power</div>
            </div>
            <div 
              className="fade-in-up"
              data-animate-id="spec-4"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary font-sf mb-2">25x</div>
              <div className="text-muted-foreground">Optical Zoom</div>
            </div>
          </div>
          <Link
            to="/tech-specs"
            className="inline-block btn-primary text-lg px-10 py-3 rounded-2xl font-semibold font-sf"
          >
            Complete Technical Specifications
          </Link>
        </div>
      </section>

      {/* Final CTA - Pre-Launch */}
      <section id="email-capture" className="section-full bg-gradient-hero py-32">
        <div className="text-center max-w-4xl mx-auto space-y-16">
          <div className="space-y-8">
            <h2 
              className="hero-text fade-in-up"
              data-animate-id="final-title"
            >
              The Future is Here
            </h2>
            <p 
              className="body-large fade-in-up max-w-3xl mx-auto"
              data-animate-id="final-subtitle"
              style={{ animationDelay: '0.2s' }}
            >
              Be among the first to own this groundbreaking technology. Join our exclusive list for early access to the Indiegogo campaign and secure your Super Early Bird pricing.
            </p>
          </div>
          <div 
            className="fade-in-up"
            data-animate-id="final-form"
            style={{ animationDelay: '0.4s' }}
          >
            <EmailCapture />
          </div>
          <div 
            className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground fade-in-up"
            data-animate-id="final-benefits"
            style={{ animationDelay: '0.6s' }}
          >
            <span>✓ Exclusive Early Access</span>
            <span>✓ Super Early Bird Pricing</span>
            <span>✓ Priority Shipping</span>
            <span>✓ Lifetime Updates</span>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-card border-t border-border/20 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold font-sf mb-4">Aura Intelligence</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Revolutionizing aerial intelligence with 360° vision and AI-powered insights.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-sm">
                <Link to="/use-cases" className="block text-muted-foreground hover:text-primary">Use Cases</Link>
                <Link to="/tech-specs" className="block text-muted-foreground hover:text-primary">Tech Specs</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm">
                <Link to="/our-story" className="block text-muted-foreground hover:text-primary">Our Story</Link>
                <Link to="/insights" className="block text-muted-foreground hover:text-primary">Insights</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-primary">LinkedIn</a>
                <a href="#" className="block text-muted-foreground hover:text-primary">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuraLanding;