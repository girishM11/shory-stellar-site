
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = document.querySelectorAll('.reveal');
            elements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('active');
              }, i * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <section id="hero-section" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-10"></div>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <p className="reveal text-gold-300 text-lg md:text-xl uppercase tracking-wider mb-3 font-medium">Welcome to</p>
          <h1 className="reveal reveal-delay-1 text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6">
            <span className="block">Shory</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 font-light text-gold-200">Restaurant & Café</span>
          </h1>
          <p className="reveal reveal-delay-2 text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Experience the perfect blend of extraordinary flavors and elegant ambiance
          </p>
          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
            >
              Explore Menu
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md border border-white/50 bg-transparent px-8 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:scale-105"
            >
              Book a Table
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
