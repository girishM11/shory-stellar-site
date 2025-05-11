
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
}

const featuredItems: MenuItem[] = [
  {
    name: "Truffle Risotto",
    description: "Arborio rice, wild mushrooms, truffle oil, parmesan",
    price: "$24",
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1659879003301-ca2d6dd2f5d4?q=80&w=1887&auto=format&fit=crop"
  },
  {
    name: "Pan-Seared Scallops",
    description: "Atlantic scallops, cauliflower purée, crispy pancetta",
    price: "$28",
    category: "Appetizer",
    image: "https://images.unsplash.com/photo-1626509653291-18d9a934b9db?q=80&w=1887&auto=format&fit=crop"
  },
  {
    name: "Chocolate Soufflé",
    description: "Rich dark chocolate, vanilla bean ice cream",
    price: "$14",
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1511715112108-9acc5d3c1360?q=80&w=1887&auto=format&fit=crop"
  },
  {
    name: "Signature Cocktail",
    description: "House-infused vodka, elderflower, citrus, fresh berries",
    price: "$16",
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=1886&auto=format&fit=crop"
  }
];

export default function MenuPreview() {
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
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll text-3xl md:text-4xl font-serif font-medium mb-4">
            Our Signature Dishes
          </h2>
          <p className="animate-on-scroll text-muted-foreground max-w-2xl mx-auto">
            A preview of our exquisite menu featuring seasonal ingredients and chef's specialties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredItems.map((item, index) => (
            <div
              key={index}
              className="animate-on-scroll flex flex-col md:flex-row items-center gap-6 bg-muted rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-full md:w-1/3 h-48 md:h-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                />
              </div>
              <div className="p-6 w-full md:w-2/3">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif">{item.name}</h3>
                  <span className="font-serif text-primary text-lg">{item.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                <span className="inline-block px-3 py-1 bg-background text-xs font-medium rounded-full">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <Link
            to="/menu"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
