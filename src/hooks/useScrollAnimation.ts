import { useEffect, useState } from 'react';

export const useScrollAnimation = () => {
  const [elements, setElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          const elementId = element.dataset.animateId;
          
          if (!elementId) return;

          if (entry.isIntersecting) {
            element.classList.add('animate');
            setElements((prev) => new Set(prev).add(elementId));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-50px 0px',
      }
    );

    // Observe all elements with fade-in animations
    const animatedElements = document.querySelectorAll('[data-animate-id]');
    animatedElements.forEach((element) => observer.observe(element));

    return () => {
      animatedElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return { animatedElements: elements };
};