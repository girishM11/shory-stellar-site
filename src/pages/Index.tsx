
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedSection from "@/components/home/FeaturedSection";
import MenuPreview from "@/components/home/MenuPreview";
import Testimonials from "@/components/home/Testimonials";
import NewsletterSection from "@/components/home/NewsletterSection";

const Index = () => {
  useEffect(() => {
    const initAnimations = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
            }
          });
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1,
        }
      );

      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        observer.observe(el);
      });

      return () => {
        elements.forEach((el) => {
          observer.unobserve(el);
        });
      };
    };

    initAnimations();
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <FeaturedSection />
        <MenuPreview />
        <Testimonials />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
