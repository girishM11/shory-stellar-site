
import { useState, useEffect } from 'react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Absolutely the best dining experience I've had in years. The truffle risotto is life-changing!",
    name: "Emma Johnson",
    title: "Food Critic",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop"
  },
  {
    quote: "The atmosphere, service, and food quality combine to create a truly memorable experience. Worth every penny.",
    name: "Michael Chen",
    title: "Regular Customer",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1770&auto=format&fit=crop"
  },
  {
    quote: "From the moment we walked in, we were treated like royalty. The chef's recommendations were spectacular.",
    name: "Sophia Rodriguez",
    title: "Food Blogger",
    rating: 4,
    image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=1770&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
    <section className="py-20 px-4 bg-foreground text-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll text-3xl md:text-4xl font-serif font-medium mb-4">
            Guest Experiences
          </h2>
          <p className="animate-on-scroll text-muted-foreground max-w-2xl mx-auto">
            Discover what our guests have to say about their dining experience at Shory
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-on-scroll">
          <div className="relative h-[400px] md:h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 flex flex-col md:flex-row items-center gap-8 p-6 md:p-8 rounded-lg ${
                  index === active 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-32 pointer-events-none'
                }`}
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gold-500 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-center md:text-left">
                  <div className="mb-4 text-gold-500 flex justify-center md:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < testimonial.rating ? 'text-gold-500' : 'text-gray-400'}>
                        ★
                      </span>
                    ))}
                  </div>
                  <blockquote className="text-lg md:text-xl italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="font-serif">
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === active ? 'bg-gold-500 scale-125' : 'bg-gray-500 opacity-50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
