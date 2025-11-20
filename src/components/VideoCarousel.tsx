import { useEffect, useRef, useState } from 'react';

type CarouselSlide = {
  type: 'video' | 'image';
  src: string;
  alt?: string;
  holdDuration?: number;
};

interface VideoCarouselProps {
  slides: CarouselSlide[];
  className?: string;
  playbackSpeed?: number; // Playback speed (1.0 = normal, 0.5 = half speed)
  imageDisplayDuration?: number;
}

const TRANSITION_DURATION = 500;

const VideoCarousel = ({
  slides,
  className = '',
  playbackSpeed = 0.5,
  imageDisplayDuration = 5000,
}: VideoCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const slideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearScheduledAdvance = () => {
    if (slideTimeoutRef.current) {
      clearTimeout(slideTimeoutRef.current);
      slideTimeoutRef.current = null;
    }
  };

  const triggerTransition = (targetIndex: number, duration = TRANSITION_DURATION) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(targetIndex);
      setIsTransitioning(false);
    }, duration);
  };

  const scheduleAdvance = (delay: number, overrideIndex?: number) => {
    clearScheduledAdvance();
    slideTimeoutRef.current = setTimeout(() => {
      const nextIndex =
        typeof overrideIndex === 'number'
          ? overrideIndex
          : (currentIndex + 1) % slides.length;
      triggerTransition(nextIndex);
    }, delay);
  };

  // Handle video playback control
  useEffect(() => {
    if (!slides.length) return;

    const currentSlide = slides[currentIndex];

    // Pause and reset all other videos
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentIndex) {
        video.pause();
        video.currentTime = 0;
      }
    });

    if (currentSlide?.type === 'video') {
      const currentVideo = videoRefs.current[currentIndex];
      if (currentVideo) {
        currentVideo.playbackRate = playbackSpeed;
        currentVideo.play().catch((error) => {
          console.log('Video autoplay failed:', error);
        });
      }
    }
  }, [currentIndex, playbackSpeed, slides]);

  // Handle automatic advancement between slides
  useEffect(() => {
    if (!slides.length) return undefined;
    const currentSlide = slides[currentIndex];

    if (currentSlide.type === 'video') {
      const currentVideo = videoRefs.current[currentIndex];
      if (!currentVideo) return undefined;

      const handleVideoEnd = () => {
        const holdDuration = currentSlide.holdDuration ?? 5000;
        scheduleAdvance(holdDuration);
      };

      currentVideo.addEventListener('ended', handleVideoEnd);

      return () => {
        currentVideo.removeEventListener('ended', handleVideoEnd);
        clearScheduledAdvance();
      };
    } else {
      const holdDuration = currentSlide.holdDuration ?? imageDisplayDuration;
      scheduleAdvance(holdDuration);

      return () => {
        clearScheduledAdvance();
      };
    }
  }, [currentIndex, slides, imageDisplayDuration]);

  // Clear timers on unmount
  useEffect(() => {
    return () => clearScheduledAdvance();
  }, []);

  if (!slides.length) {
    return null;
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {slides.map((slide, index) => (
        <div
          key={`${slide.src}-${index}`}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex && !isTransitioning
              ? 'opacity-100 z-10'
              : 'opacity-0 z-0'
          } flex items-center justify-center bg-black rounded-2xl`}
        >
          {slide.type === 'video' ? (
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={slide.src}
              className="w-full h-full object-contain rounded-2xl"
              muted
              playsInline
              preload="auto"
            />
          ) : (
            <img
              src={slide.src}
              alt={slide.alt ?? 'Aura reveal slide'}
              className="w-full h-full object-cover rounded-2xl"
            />
          )}
        </div>
      ))}

      {/* Indicator dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={`${index}-indicator`}
            onClick={() => {
              clearScheduledAdvance();
              triggerTransition(index, 200);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;

