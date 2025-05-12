
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParallaxHero from "@/components/home/ParallaxHero";
import ParallaxFeatured from "@/components/home/ParallaxFeatured";
import ParallaxMenuPreview from "@/components/home/ParallaxMenuPreview";
import ParallaxTestimonials from "@/components/home/ParallaxTestimonials";
import ParallaxNewsletter from "@/components/home/ParallaxNewsletter";
import ParallaxChefs from "@/components/home/ParallaxChefs";
import { setupScrollAnimations } from "@/lib/animation";
import { commonBg } from "@/assets/images";

const Index = () => {
  useEffect(() => {
    const cleanup = setupScrollAnimations();
    return cleanup;
  }, []);

  return (
    <div className="relative bg-background">
      {/* Fixed common background - optional approach */}
      <div 
        className="fixed inset-0 w-full h-full z-0" 
        style={{
          backgroundImage: `url(${commonBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 0.15 // Very subtle background
        }}
      />
      
      <Navbar />
      <main className="min-h-screen relative z-10">
        <ParallaxHero />
        <ParallaxFeatured />
        <ParallaxMenuPreview />
        <ParallaxChefs />
        <ParallaxTestimonials />
        <ParallaxNewsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
