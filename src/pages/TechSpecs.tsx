import React, { useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import auraHero from '@/assets/images/aura-hero.jpg';
import auraAware from '@/assets/images/aura-aware.jpg';
import auraDetailMacro from '@/assets/images/aura-detail-macro.jpg';
import { Camera, Cpu, Globe, Package, Shield, Sun, Thermometer, Wifi } from 'lucide-react';

const TechSpecs = () => {
  const { animatedElements } = useScrollAnimation();

  useEffect(() => {
    document.title = 'Technical Specifications - AuraAero';
  }, []);

  const productCards = [
    {
      name: "Aura Aware 360",
      description: "Site Scanning & Reality Capture",
      statusLabel: null,
      cta: "Starting at $499",
      image: auraAware,
      alt: "Aura Aware 360"
    },
    {
      name: "Aura ISR-360 Pro",
      description: "Mission-Critical Intelligence",
      cta: "Coming Soon",
      image: auraHero,
      alt: "Aura ISR-360 Pro"
    }
  ];

  const specifications = [
    {
      category: "360° Vision System",
      icon: Camera,
      specs: [
        {
          feature: "Cameras",
          aware: "2x 12MP CMOS sensors",
          pro: "2x 12MP CMOS sensors (fixed position)"
        },
        {
          feature: "Stitched Output",
          aware: "Real-time 4K spherical video (3840x1920 @ 30fps)",
          pro: "Real-time 4K spherical video (3840x1920 @ 30fps)"
        }
      ]
    },
    {
      category: "Image Processing & AI",
      icon: Cpu,
      specs: [
        {
          feature: "Onboard Processor",
          aware: "High-performance embedded AI processor",
          pro: "High-performance embedded AI processor (NVIDIA Jetson series)"
        },
        {
          feature: "AI Capabilities",
          aware: "Real-time object detection (persons, vehicles)",
          pro: "Multi-object detection, slew-to-cue tracking, fused thermal/visual display"
        }
      ]
    },
    {
      category: "Forward Sensor Suite",
      icon: Thermometer,
      specs: [
        {
          feature: "Housing",
          aware: "—",
          pro: "Integrated thermal & zoom cameras in a single articulated payload"
        },
        {
          feature: "Thermal Imaging",
          aware: "—",
          pro: "640x512 uncooled VOx microbolometer, 12μm pixel pitch"
        },
        {
          feature: "Zoom Imaging",
          aware: "—",
          pro: "4K UHD CMOS sensor, 25x optical zoom"
        }
      ]
    },
    {
      category: "Stabilization & Articulation",
      icon: Shield,
      specs: [
        {
          feature: "System",
          aware: "Advanced electronic stabilization",
          pro: "High-performance 3-axis brushless gimbal"
        },
        {
          feature: "Function",
          aware: "Digitally compensates for aircraft movement to keep frames level",
          pro: "Stabilizes and directs the forward sensor suite"
        },
        {
          feature: "Range of Motion",
          aware: "—",
          pro: "Continuous 360° pan, +30° to -90° tilt"
        }
      ]
    },
    {
      category: "Integration & Output",
      icon: Wifi,
      specs: [
        {
          feature: "Primary Mounts",
          aware: "DJI Payload SDK, MAVLink",
          pro: "DJI Payload SDK, MAVLink"
        },
        {
          feature: "Video Output",
          aware: "Low-latency H.264/H.265 stream via RTSP",
          pro: "Low-latency 4K H.264/H.265 stream via RTSP"
        }
      ]
    },
    {
      category: "Physical Profile",
      icon: Package,
      specs: [
        {
          feature: "Target Weight",
          aware: "~550g (1.21 lbs)",
          pro: "~850g (1.87 lbs)"
        },
        {
          feature: "Housing",
          aware: "Lightweight, high-strength composite",
          pro: "CNC-milled 6061 aluminum alloy"
        }
      ]
    },
    {
      category: "Environmental Readiness",
      icon: Sun,
      specs: [
        {
          feature: "Ingress Protection",
          aware: "IP54 rated (dust & water resistant)",
          pro: "IP54 rated (dust & water resistant)"
        },
        {
          feature: "Operational Temperature",
          aware: "-10°C to 45°C (14°F to 113°F)",
          pro: "-20°C to 50°C (-4°F to 122°F)"
        }
      ]
    },
    {
      category: "Platform Compatibility",
      icon: Globe,
      specs: [
        {
          feature: "Supported Platforms",
          aware: "Professional fixed-wing & multi-rotor drones",
          pro: "Professional fixed-wing drones & light manned aircraft (certified mount)"
        }
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
            Technical Specifications
          </h1>
          <p 
            className="body-large text-muted-foreground fade-in-up"
            data-animate-id="hero-subtitle"
            style={{ animationDelay: '0.2s' }}
          >
            Deep dive into the engineering excellence that powers Aura's revolutionary capabilities.
          </p>
        </div>
      </section>

      {/* Product Comparison Header */}
      <section className="section-full bg-section-bg">
        <div className="max-w-6xl mx-auto">
          <div 
            className="grid md:grid-cols-2 gap-12 mb-16 fade-in-up items-start"
            data-animate-id="product-comparison"
          >
            {productCards.map((product) => (
              <div key={product.name} className="text-center flex flex-col items-center">
                <div className="relative mb-8 w-full max-w-sm">
                  <div className="relative rounded-3xl shadow-premium overflow-hidden aspect-[4/3] bg-muted/10">
                    <img 
                      src={product.image} 
                      alt={product.alt} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none">
                      {product.statusLabel ? (
                        <span className="inline-flex items-center px-4 py-1.5 bg-primary text-primary-foreground rounded-full text-sm font-medium shadow-lg">
                          {product.statusLabel}
                        </span>
                      ) : (
                        <span 
                          aria-hidden="true" 
                          className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium opacity-0"
                        >
                          placeholder
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <h2 className="feature-headline font-sf mb-2">{product.name}</h2>
                <p className="text-primary font-semibold text-lg">{product.description}</p>
                <div className="mt-6 inline-flex items-center px-6 py-2 bg-primary/10 border border-primary/20 rounded-full">
                  <span className="text-primary font-medium">{product.cta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Specifications */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto space-y-20">
          {specifications.map((category, index) => (
            <div 
              key={category.category}
              className="fade-in-up"
              data-animate-id={`spec-category-${index}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-primary/10 rounded-2xl">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="feature-headline font-sf">{category.category}</h3>
              </div>

              {/* Specs Table */}
              <div className="bg-card/20 backdrop-blur-sm border border-border/20 rounded-3xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/10">
                  {/* Header */}
                  <div className="bg-card/30 p-6">
                    <div className="font-semibold text-muted-foreground">Feature</div>
                  </div>
                  <div className="bg-card/30 p-6 text-center">
                    <div className="font-semibold">Aura Aware 360</div>
                  </div>
                  <div className="bg-card/30 p-6 text-center">
                    <div className="font-semibold flex items-center justify-center gap-2">
                      <span>Aura ISR-360 Pro</span>
                      <span className="text-xs font-normal bg-primary/10 text-primary px-2 py-1 rounded-full">Coming Soon</span>
                    </div>
                  </div>

                  {/* Specifications */}
                  {category.specs.map((spec, specIndex) => (
                    <React.Fragment key={specIndex}>
                      <div className="bg-card/10 p-6">
                        <div className="font-medium">{spec.feature}</div>
                      </div>
                      <div className="bg-card/10 p-6 text-center">
                        <div className={spec.aware === '—' ? 'text-muted-foreground' : 'font-medium'}>
                          {spec.aware}
                        </div>
                      </div>
                      <div className="bg-card/10 p-6 text-center">
                        <div className={spec.pro === '—' ? 'text-muted-foreground' : 'font-medium'}>
                          {spec.pro}
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
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
        <div className="text-center max-w-4xl mx-auto space-y-12">
          <h2 
            className="section-headline fade-in-up"
            data-animate-id="engineering-title"
          >
            Engineered for Excellence
          </h2>
          <p 
            className="body-large fade-in-up"
            data-animate-id="engineering-subtitle"
            style={{ animationDelay: '0.2s' }}
          >
            Every component is meticulously designed and tested to deliver uncompromising performance in the most demanding environments.
          </p>
          <div 
            className="fade-in-up"
            data-animate-id="engineering-cta"
            style={{ animationDelay: '0.4s' }}
          >
            <button className="btn-primary text-xl px-12 py-4 rounded-2xl font-semibold tracking-wide font-sf">
              Reserve Your Aura
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TechSpecs;