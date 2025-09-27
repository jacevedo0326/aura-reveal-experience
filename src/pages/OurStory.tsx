import { useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import auraHero from '@/assets/aura-hero.jpg';

const OurStory = () => {
  const { animatedElements } = useScrollAnimation();

  useEffect(() => {
    document.title = 'Our Story - Aura Intelligence';
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

      {/* Section 3: The Team */}
      <section className="section-full bg-section-bg">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center">
            <h2 
              className="section-headline fade-in-up mb-6"
              data-animate-id="team-title"
            >
              A Mission Built by Experts.
            </h2>
            <p 
              className="body-large text-muted-foreground max-w-3xl mx-auto fade-in-up"
              data-animate-id="team-subtitle"
              style={{ animationDelay: '0.2s' }}
            >
              We are a team of passionate engineers, drone pilots, and product designers with unique expertise in optical engineering, embedded systems, and AI.
            </p>
          </div>

          {/* Team Grid */}
          <div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-up"
            data-animate-id="team-grid"
            style={{ animationDelay: '0.4s' }}
          >
            {/* Team Member 1 */}
            <div className="bg-card/30 backdrop-blur-sm border border-border/20 rounded-2xl p-8 text-center hover:bg-card/40 transition-all duration-500 hover:scale-105">
              <div className="w-24 h-24 bg-gradient-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-black">AK</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Alex Kim</h3>
              <p className="text-primary font-medium mb-4">CEO & Co-Founder</p>
              <p className="text-muted-foreground leading-relaxed">
                Former aerospace engineer with 12+ years in optical systems design. Led sensor development for next-gen surveillance platforms.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-card/30 backdrop-blur-sm border border-border/20 rounded-2xl p-8 text-center hover:bg-card/40 transition-all duration-500 hover:scale-105">
              <div className="w-24 h-24 bg-gradient-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-black">SR</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Sarah Rodriguez</h3>
              <p className="text-primary font-medium mb-4">CTO & Co-Founder</p>
              <p className="text-muted-foreground leading-relaxed">
                AI and computer vision expert. Previously at Google Research, specializing in real-time image processing and neural networks.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-card/30 backdrop-blur-sm border border-border/20 rounded-2xl p-8 text-center hover:bg-card/40 transition-all duration-500 hover:scale-105">
              <div className="w-24 h-24 bg-gradient-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-black">MJ</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Marcus Johnson</h3>
              <p className="text-primary font-medium mb-4">Head of Hardware</p>
              <p className="text-muted-foreground leading-relaxed">
                Embedded systems architect with expertise in ruggedized electronics. Former lead engineer at DJI Enterprise division.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="bg-card/30 backdrop-blur-sm border border-border/20 rounded-2xl p-8 text-center hover:bg-card/40 transition-all duration-500 hover:scale-105">
              <div className="w-24 h-24 bg-gradient-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-black">LC</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Lisa Chen</h3>
              <p className="text-primary font-medium mb-4">Lead Product Designer</p>
              <p className="text-muted-foreground leading-relaxed">
                UX/UI expert focused on mission-critical interfaces. Previously designed control systems for autonomous vehicle platforms.
              </p>
            </div>

            {/* Team Member 5 */}
            <div className="bg-card/30 backdrop-blur-sm border border-border/20 rounded-2xl p-8 text-center hover:bg-card/40 transition-all duration-500 hover:scale-105">
              <div className="w-24 h-24 bg-gradient-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-black">DT</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">David Thompson</h3>
              <p className="text-primary font-medium mb-4">Flight Operations</p>
              <p className="text-muted-foreground leading-relaxed">
                Commercial drone pilot and former military UAV operator with 8+ years in search & rescue and tactical surveillance missions.
              </p>
            </div>

            {/* Team Member 6 */}
            <div className="bg-card/30 backdrop-blur-sm border border-border/20 rounded-2xl p-8 text-center hover:bg-card/40 transition-all duration-500 hover:scale-105">
              <div className="w-24 h-24 bg-gradient-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-black">EP</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Emma Park</h3>
              <p className="text-primary font-medium mb-4">Software Engineer</p>
              <p className="text-muted-foreground leading-relaxed">
                Full-stack developer specializing in real-time data processing and cloud infrastructure for edge computing applications.
              </p>
            </div>
          </div>

          {/* Company Stats */}
          <div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 fade-in-up"
            data-animate-id="team-stats"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">12</div>
              <div className="text-muted-foreground">Patents Filed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Flight Hours Tested</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-muted-foreground">Years in Development</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: The Invitation */}
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