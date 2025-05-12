
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParallaxHero from "@/components/home/ParallaxHero";
import ParallaxFeatured from "@/components/home/ParallaxFeatured";
import ParallaxMenuPreview from "@/components/home/ParallaxMenuPreview";
import ParallaxTestimonials from "@/components/home/ParallaxTestimonials";
import ParallaxNewsletter from "@/components/home/ParallaxNewsletter";
import { setupScrollAnimations } from "@/lib/animation";

const Index = () => {
  useEffect(() => {
    const cleanup = setupScrollAnimations();
    return cleanup;
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <ParallaxHero />
        <ParallaxFeatured />
        <ParallaxMenuPreview />
        <ParallaxTestimonials />
        <ParallaxNewsletter />
      </main>
      <Footer />
    </>
  );
};

export default Index;
