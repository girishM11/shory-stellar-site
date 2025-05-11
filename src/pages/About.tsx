
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About = () => {
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

  const teamMembers = [
    {
      name: "Alexandre Laurent",
      position: "Executive Chef",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "With over 15 years of experience in Michelin-starred restaurants across Europe, Chef Alexandre brings his passion for innovative cuisine to Shory."
    },
    {
      name: "Sophia Martinez",
      position: "Pastry Chef",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "A graduate of the prestigious Le Cordon Bleu, Sophia creates desserts that are as beautiful as they are delicious."
    },
    {
      name: "James Wilson",
      position: "Sommelier",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "James has curated our exclusive wine collection, focusing on both established vineyards and exciting new winemakers."
    },
    {
      name: "Elena Rossi",
      position: "Restaurant Manager",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Elena ensures that every guest at Shory receives impeccable service and leaves with memories they'll cherish."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Restaurant Interior" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">Our Story</h1>
            <p className="text-white/90 max-w-2xl mx-auto text-lg">
              Discover the passion and dedication behind Shory Restaurant
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="animate-on-scroll mb-12">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-center">The Shory Journey</h2>
              <p className="mb-4 text-lg">
                Founded in 2010, Shory began as a small café with a big vision: to create a space where extraordinary food meets warm hospitality. What started as a passion project by Chef Alexandre Laurent has grown into one of the city's most beloved culinary destinations.
              </p>
              <p className="mb-4">
                Our restaurant is named after Chef Alexandre's grandmother, Shorya, whose cooking inspired his love for food and whose recipes still influence our menu today. Her philosophy was simple: use the finest ingredients, prepare them with care, and share them with love.
              </p>
              <p>
                Today, Shory continues to honor these principles while embracing innovation. We work closely with local farmers and producers to source the freshest seasonal ingredients, supporting sustainable practices that respect both the environment and our community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="animate-on-scroll">
                <img 
                  src="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Restaurant Interior" 
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-serif mb-2">Our Philosophy</h3>
                <p className="text-muted-foreground">
                  At Shory, we believe that dining should be an immersive experience that engages all the senses. Every detail matters – from the selection of ingredients to the presentation of each dish and the ambiance we create.
                </p>
              </div>
              <div className="animate-on-scroll" style={{ transitionDelay: "200ms" }}>
                <img 
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Chef preparing food" 
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-serif mb-2">Our Commitment</h3>
                <p className="text-muted-foreground">
                  We are committed to culinary excellence and exceptional service. Our team continuously explores new techniques and flavors while respecting traditional methods, creating dishes that are both innovative and comforting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 bg-muted">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="animate-on-scroll text-3xl md:text-4xl font-serif mb-4">Meet Our Team</h2>
              <p className="animate-on-scroll text-muted-foreground max-w-2xl mx-auto">
                The passionate professionals who bring the Shory experience to life every day
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="animate-on-scroll bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-serif mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.position}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
