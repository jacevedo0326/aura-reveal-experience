import { useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import auraUseCaseSar from '@/assets/video1_red.mp4';
import auraUseCaseLaw from '@/assets/aura-use-case-law.jpg';
import auraHero from '@/assets/Draft animation and renders_/Visuals/Renders/HeroShot.1.png';
import auraAware from '@/assets/Draft animation and renders_/Visuals/Renders/still image.1.png';
import aerialPanorama from '@/assets/aerial-panorama.jpg';
import auraAiVisualization from '@/assets/aura-ai-visualization.jpg';
import { Shield, Search, Eye, MapPin, Clock, Target, Users, Music, Globe } from 'lucide-react';

const UseCases = () => {
  const { animatedElements } = useScrollAnimation();

  useEffect(() => {
  document.title = 'Use Cases - AuraAero';
  }, []);

  const useCases = [
    {
      title: "Search & Rescue",
      subtitle: "Find faster. Save lives.",
      description: "In search and rescue operations, every second counts. Aura's 360° overwatch capability means no blind spots, no missed opportunities. SAR teams can simultaneously scan vast areas while maintaining detailed focus on potential targets.",
      image: auraUseCaseSar,
      icon: Search,
      stats: [
        { label: "Coverage Area", value: "5x Larger" },
        { label: "Detection Time", value: "90% Faster" },
        { label: "Mission Success", value: "40% Higher" }
      ]
    },
    {
      title: "Law Enforcement & Security",
      subtitle: "Situational awareness redefined.",
      description: "For tactical operations and security surveillance, Aura provides unprecedented situational awareness. Officers can monitor entire perimeters while simultaneously tracking specific targets with thermal and optical zoom capabilities.",
      image: auraUseCaseLaw,
      icon: Shield,
      stats: [
        { label: "Perimeter Coverage", value: "360° Complete" },
        { label: "Target Tracking", value: "Multi-Simultaneous" },
        { label: "Officer Safety", value: "Enhanced" }
      ]
    },
    {
      title: "Critical Infrastructure",
      subtitle: "Monitor what matters most.",
      description: "Protect critical infrastructure with comprehensive monitoring that never sleeps. Aura's AI-powered detection can identify anomalies, intrusions, and potential threats across entire facilities simultaneously.",
      image: auraHero,
      icon: Eye,
      stats: [
        { label: "Facility Coverage", value: "Complete 360°" },
        { label: "Threat Detection", value: "AI-Powered" },
        { label: "Response Time", value: "Immediate" }
      ]
    },
    {
      title: "Smart Meeting Rooms",
      subtitle: "Redefining hybrid collaboration.",
      description: "Transform your meeting spaces with Aura's intelligent 360° coverage. One camera captures every participant simultaneously with AI-powered speaker tracking and automatic framing. Enable truly immersive remote participation for hybrid teams without complex multi-camera setups.",
      image: auraAware,
      icon: Users,
      stats: [
        { label: "Participant Coverage", value: "100% Visibility" },
        { label: "Speaker Tracking", value: "AI-Powered" },
        { label: "Setup Time", value: "Under 5 Minutes" }
      ]
    },
    {
      title: "Live Performance & Cultural Events",
      subtitle: "Capture every moment, every angle.",
      description: "From orchestra halls to art galleries, Aura delivers museum-quality documentation and immersive experiences. Create virtual tours that bring culture to global audiences, archive performances for posterity, and enable interactive exploration of exhibits from anywhere in the world.",
      image: auraAiVisualization,
      icon: Music,
      stats: [
        { label: "Video Quality", value: "Museum-Grade" },
        { label: "Experience", value: "360° Immersive" },
        { label: "Global Reach", value: "Unlimited" }
      ]
    },
    {
      title: "Virtual Tours & Experiences",
      subtitle: "Showcase spaces like never before.",
      description: "Revolutionize how you present properties, venues, and educational spaces. Aura's professional 360° capture creates interactive virtual tours that engage visitors and drive decisions. Real estate showings, campus tours, and venue marketing—all accessible 24/7 from a single capture.",
      image: aerialPanorama,
      icon: Globe,
      stats: [
        { label: "Tour Creation", value: "10x Faster" },
        { label: "Availability", value: "24/7 Access" },
        { label: "Engagement", value: "3x Higher" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      {/* Hero Section */}
      <section className="section-full">
        <div className="text-center max-w-5xl mx-auto space-y-8">
          <h1 
            className="hero-text mb-8 fade-in-up gradient-text"
            data-animate-id="hero-title"
          >
            Transforming Vision Across Industries
          </h1>
          <p 
            className="body-large text-muted-foreground fade-in-up"
            data-animate-id="hero-subtitle"
            style={{ animationDelay: '0.2s' }}
          >
            From life-saving missions to cultural experiences and immersive collaboration—discover how Aura's 360° vision technology is revolutionizing the way we see and share our world.
          </p>
        </div>
      </section>

      {/* Use Cases */}
      {useCases.map((useCase, index) => (
        <section 
          key={useCase.title}
          className={`section-full ${index % 2 === 0 ? 'bg-section-bg' : 'bg-background'}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div 
                className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} fade-in-up`}
                data-animate-id={`usecase-${index}-image`}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-premium">
                  {useCase.title === "Search & Rescue" ? (
                    <video 
                      src={useCase.image} 
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-[400px] lg:h-[500px] object-cover"
                    />
                  ) : useCase.title === "Live Performance & Cultural Events" ? (
                    <div className="w-full h-[400px] lg:h-[500px] bg-gradient-to-br from-primary/20 via-background to-background" />
                  ) : (
                    <img 
                      src={useCase.image} 
                      alt={useCase.title}
                      className="w-full h-[400px] lg:h-[500px] object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-primary/20 backdrop-blur-sm rounded-lg">
                        <useCase.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-primary font-semibold">{useCase.title}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div 
                className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} space-y-8`}
              >
                <div className="space-y-6">
                  <h2 
                    className="section-headline fade-in-up"
                    data-animate-id={`usecase-${index}-title`}
                    style={{ animationDelay: '0.1s' }}
                  >
                    {useCase.title}
                  </h2>
                  <h3 
                    className="feature-headline text-primary fade-in-up"
                    data-animate-id={`usecase-${index}-subtitle`}
                    style={{ animationDelay: '0.2s' }}
                  >
                    {useCase.subtitle}
                  </h3>
                  <p 
                    className="body-medium text-muted-foreground leading-relaxed fade-in-up"
                    data-animate-id={`usecase-${index}-description`}
                    style={{ animationDelay: '0.3s' }}
                  >
                    {useCase.description}
                  </p>
                </div>

                {/* Stats */}
                <div 
                  className="grid grid-cols-3 gap-6 pt-8 border-t border-border/20 fade-in-up"
                  data-animate-id={`usecase-${index}-stats`}
                  style={{ animationDelay: '0.4s' }}
                >
                  {useCase.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-2xl lg:text-3xl font-bold text-primary font-sf mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-full bg-gradient-hero">
        <div className="text-center max-w-4xl mx-auto space-y-12">
          <h2 
            className="section-headline fade-in-up"
            data-animate-id="cta-title"
          >
            Ready to Transform Your Operations?
          </h2>
          <p 
            className="body-large text-muted-foreground fade-in-up"
            data-animate-id="cta-subtitle"
            style={{ animationDelay: '0.2s' }}
          >
            Join the revolution in aerial intelligence. Be among the first to experience the future of mission-critical surveillance.
          </p>
          <div 
            className="fade-in-up"
            data-animate-id="cta-button"
            style={{ animationDelay: '0.4s' }}
          >
            <button className="btn-primary text-xl px-12 py-4 rounded-2xl font-semibold tracking-wide font-sf">
              Join the Launch List
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default UseCases;