import { useEffect, useState, useRef } from 'react';

interface VideoCarouselProps {
  videos: string[];
  className?: string;
  playbackSpeed?: number; // Playback speed (1.0 = normal, 0.5 = half speed)
}

const VideoCarousel = ({ 
  videos, 
  className = '', 
  playbackSpeed = 0.5 
}: VideoCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Handle video end event to advance to next video
  useEffect(() => {
    const currentVideo = videoRefs.current[currentIndex];
    
    const handleVideoEnd = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setIsTransitioning(false);
      }, 500); // Transition duration
    };

    if (currentVideo) {
      currentVideo.addEventListener('ended', handleVideoEnd);
      return () => {
        currentVideo.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, [currentIndex, videos.length]);

  // Play the current video and set playback speed
  useEffect(() => {
    const currentVideo = videoRefs.current[currentIndex];
    if (currentVideo) {
      currentVideo.playbackRate = playbackSpeed;
      currentVideo.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }

    // Pause other videos
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentIndex) {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [currentIndex, playbackSpeed]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {videos.map((video, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex && !isTransitioning
              ? 'opacity-100 z-10'
              : 'opacity-0 z-0'
          }`}
        >
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={video}
            className="w-full h-full object-cover rounded-2xl"
            muted
            playsInline
            preload="auto"
          />
        </div>
      ))}

      {/* Indicator dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentIndex(index);
                setIsTransitioning(false);
              }, 200);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;

