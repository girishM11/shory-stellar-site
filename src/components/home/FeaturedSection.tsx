
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function FeaturedSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll text-3xl md:text-4xl font-serif font-medium mb-4">
            Exquisite Dining Experience
          </h2>
          <p className="animate-on-scroll text-muted-foreground max-w-2xl mx-auto">
            Experience our carefully crafted dishes made with the finest ingredients,
            presented in an elegant ambiance that makes every meal a memorable occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              title: "Culinary Excellence",
              description: "Our award-winning chefs create masterpieces that blend traditional techniques with innovative ideas.",
              image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
              delay: 200
            },
            {
              title: "Elegant Atmosphere",
              description: "Immerse yourself in our tastefully designed interior, creating the perfect backdrop for your dining experience.",
              image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
              delay: 400
            },
            {
              title: "Perfect Moments",
              description: "Whether it's a romantic dinner, family gathering, or special celebration, we create memories that last.",
              image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
              delay: 600
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="animate-on-scroll overflow-hidden rounded-lg bg-background shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{ transitionDelay: `${feature.delay}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105 duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif mb-2">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-on-scroll">
          <Link
            to="/about"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Discover Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
