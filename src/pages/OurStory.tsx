import { useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import auraHero from '@/assets/aura-hero.jpg';

const OurStory = () => {
  const { animatedElements } = useScrollAnimation();

  useEffect(() => {
  document.title = 'Our Story - AuraAero';
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Section 1: The Question */}
      <section 
        className="section-full relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${auraHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <h1 
            className="hero-text mb-8 fade-in-up"
            data-animate-id="question-title"
          >
            It started with a simple question.
          </h1>
          <p 
            className="body-large mb-12 fade-in-up"
            data-animate-id="question-subtitle"
            style={{ animationDelay: '0.2s' }}
          >
            Why are we forcing our heroes to make decisions with a keyhole view of the world?
          </p>
        </div>
      </section>

      {/* Section 2: The Mission */}
      <section className="section-full bg-background">
        <div className="text-center max-w-4xl mx-auto space-y-12">
          <h2 
            className="section-headline mb-12 fade-in-up gradient-text"
            data-animate-id="mission-title"
          >
            We believe there's a better way.
          </h2>
          <p 
            className="body-large leading-relaxed fade-in-up text-muted-foreground"
            data-animate-id="mission-text"
            style={{ animationDelay: '0.2s' }}
          >
            Our vision is to deliver clarity and context in high-stakes environments. We are not building a better camera; we are building a new way to see.
          </p>
        </div>
      </section>

      {/* Section 3: The Invitation */}
      <section 
        className="section-full relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${auraHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-12">
          <h2 
            className="section-headline fade-in-up"
            data-animate-id="invitation-title"
          >
            Join Us in Building the Future.
          </h2>
          <div 
            className="fade-in-up"
            data-animate-id="invitation-cta"
            style={{ animationDelay: '0.3s' }}
          >
            <button className="btn-primary text-xl px-12 py-4 rounded-2xl font-semibold tracking-wide">
              BACK THIS PROJECT
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OurStory;