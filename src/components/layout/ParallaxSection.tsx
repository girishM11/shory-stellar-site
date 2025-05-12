
import React, { useRef, useEffect, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ParallaxSectionProps {
  backgroundImage: string;
  children: ReactNode;
  className?: string;
  overlayOpacity?: number;
  blurAmount?: number;
  speed?: number;
  minHeight?: string;
}

export default function ParallaxSection({
  backgroundImage,
  children,
  className,
  overlayOpacity = 0.5,
  blurAmount = 0,
  speed = 0.15,
  minHeight = "min-h-screen",
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const section = sectionRef.current;
    const background = bgRef.current;
    
    if (!section || !background) return;
    
    const handleScroll = () => {
      if (!section || !background) return;
      
      const sectionRect = section.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const sectionTop = sectionRect.top + scrollPosition;
      const viewportHeight = window.innerHeight;
      
      // Check if section is visible in viewport
      if (
        sectionRect.bottom > 0 &&
        sectionRect.top < viewportHeight
      ) {
        // Calculate how far we've scrolled into the section
        const scrollIntoSection = Math.max(0, scrollPosition - sectionTop + viewportHeight);
        const parallaxOffset = scrollIntoSection * speed;
        
        // Apply transform with scale for subtle zoom effect
        background.style.transform = `translate3d(0, ${parallaxOffset}px, 0) scale(${1 + speed/3})`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial position
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);
  
  return (
    <section 
      ref={sectionRef}
      className={cn(
        "relative overflow-hidden",
        minHeight,
        className
      )}
    >
      {/* Background Image with Parallax Effect */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full transition-transform duration-100 will-change-transform"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
          backdropFilter: blurAmount > 0 ? `blur(${blurAmount}px)` : 'none',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </section>
  );
}
