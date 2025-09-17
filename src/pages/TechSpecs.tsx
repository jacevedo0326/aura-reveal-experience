import React, { useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import auraHero from '@/assets/aura-hero.jpg';
import auraAware from '@/assets/aura-aware.jpg';
import auraDetailMacro from '@/assets/aura-detail-macro.jpg';
import { Cpu, Camera, Shield, Zap, Wifi, Thermometer } from 'lucide-react';

const TechSpecs = () => {
  const { animatedElements } = useScrollAnimation();

  useEffect(() => {
    document.title = 'Technical Specifications - Aura Intelligence';
  }, []);

  const specifications = [
    {
      category: "360° Vision System",
      icon: Camera,
      specs: [
        {
          feature: "Sensor Resolution",
          aware: "2x 12MP Sony IMX586",
          pro: "2x 12MP Sony IMX586"
        },
        {
          feature: "Video Capture",
          aware: "4K spherical @ 30fps",
          pro: "4K spherical @ 30fps"
        },
        {
          feature: "Field of View",
          aware: "Full 360° x 180°",
          pro: "Full 360° x 180°"
        },
        {
          feature: "Stitching",
          aware: "Real-time hardware",
          pro: "Real-time hardware"
        }
      ]
    },
    {
      category: "Forward Sensor Suite",
      icon: Thermometer,
      specs: [
        {
          feature: "Thermal Imaging",
          aware: "—",
          pro: "640x512 FLIR Boson+"
        },
        {
          feature: "Thermal Refresh",
          aware: "—",
          pro: "60Hz continuous"
        },
        {
          feature: "Optical Zoom",
          aware: "—",
          pro: "25x hybrid zoom"
        },
        {
          feature: "Stabilization",
          aware: "—",
          pro: "3-axis mechanical gimbal"
        }
      ]
    },
    {
      category: "AI & Processing",
      icon: Cpu,
      specs: [
        {
          feature: "Main Processor",
          aware: "ARM Cortex-A78AE",
          pro: "NVIDIA Jetson Orin NX"
        },
        {
          feature: "AI Performance",
          aware: "2 TOPS",
          pro: "100 TOPS"
        },
        {
          feature: "Image Enhancement",
          aware: "Aura Clarity Engine",
          pro: "Aura Clarity Engine Pro"
        },
        {
          feature: "Target Detection",
          aware: "Basic object detection",
          pro: "Advanced AI recognition"
        }
      ]
    },
    {
      category: "Construction",
      icon: Shield,
      specs: [
        {
          feature: "Housing Material",
          aware: "Carbon fiber composite",
          pro: "CNC-milled 6061 aluminum"
        },
        {
          feature: "Environmental Rating",
          aware: "IP54 (dust/splash resistant)",
          pro: "IP54 (dust/splash resistant)"
        },
        {
          feature: "Operating Temperature",
          aware: "-10°C to +50°C",
          pro: "-20°C to +60°C"
        },
        {
          feature: "Target Weight",
          aware: "280g",
          pro: "420g"
        }
      ]
    },
    {
      category: "Power & Connectivity",
      icon: Zap,
      specs: [
        {
          feature: "Power Consumption",
          aware: "12W typical",
          pro: "18W typical"
        },
        {
          feature: "Operating Voltage",
          aware: "12-24V DC",
          pro: "12-24V DC"
        },
        {
          feature: "Data Transmission",
          aware: "WiFi 6, USB-C",
          pro: "WiFi 6, Ethernet, USB-C"
        },
        {
          feature: "Storage",
          aware: "64GB internal + microSD",
          pro: "128GB internal + microSD"
        }
      ]
    },
    {
      category: "Integration",
      icon: Wifi,
      specs: [
        {
          feature: "Drone Compatibility",
          aware: "DJI Payload SDK",
          pro: "DJI Payload SDK"
        },
        {
          feature: "Flight Controller",
          aware: "MAVLink compatible",
          pro: "MAVLink compatible"
        },
        {
          feature: "Mounting System",
          aware: "Universal quick-release",
          pro: "Universal quick-release"
        },
        {
          feature: "Ground Control",
          aware: "Mobile app, web interface",
          pro: "Professional ground station"
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
            className="grid md:grid-cols-2 gap-12 mb-16 fade-in-up"
            data-animate-id="product-comparison"
          >
            <div className="text-center">
              <div className="relative mb-8">
                <img 
                  src={auraAware} 
                  alt="Aura Aware 360" 
                  className="w-full max-w-sm mx-auto rounded-3xl shadow-premium"
                />
              </div>
              <h2 className="feature-headline font-sf mb-4">Aura Aware 360</h2>
              <p className="text-primary font-semibold text-lg">Site Scanning & Reality Capture</p>
              <div className="mt-6 inline-flex items-center px-6 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-primary font-medium">Starting at $2,299</span>
              </div>
            </div>
            <div className="text-center">
              <div className="relative mb-8">
                <img 
                  src={auraHero} 
                  alt="Aura ISR-360 Pro" 
                  className="w-full max-w-sm mx-auto rounded-3xl shadow-premium"
                />
              </div>
              <h2 className="feature-headline font-sf mb-4">Aura ISR-360 Pro</h2>
              <p className="text-primary font-semibold text-lg">Mission-Critical Intelligence</p>
              <div className="mt-6 inline-flex items-center px-6 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-primary font-medium">Starting at $4,899</span>
              </div>
            </div>
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
                    <div className="font-semibold">Aura ISR-360 Pro</div>
                  </div>

                  {/* Specifications */}
                  {category.specs.map((spec, specIndex) => (
                    <React.Fragment key={specIndex}>
                      <div className="bg-card/10 p-6">
                        <div className="font-medium">{spec.feature}</div>
                      </div>
                      <div className="bg-card/10 p-6 text-center">
                        <div className={spec.aware === '—' ? 'text-muted-foreground' : ''}>
                          {spec.aware}
                        </div>
                      </div>
                      <div className="bg-card/10 p-6 text-center">
                        <div className={spec.pro === '—' ? 'text-muted-foreground' : 'text-primary font-medium'}>
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

export default TechSpecs;