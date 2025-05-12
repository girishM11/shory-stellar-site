
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChefSpecials from "@/components/menu/ChefSpecials";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  tags?: string[];
};

type Category = "All" | "Breakfast" | "Lunch" | "Dinner" | "Desserts" | "Drinks";

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Eggs Benedict",
    description: "Poached eggs, hollandaise sauce, english muffin, ham",
    price: "$16",
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Signature", "Popular"]
  },
  {
    id: 2,
    name: "Avocado Toast",
    description: "Sourdough bread, avocado, cherry tomatoes, feta cheese",
    price: "$14",
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1603046891744-76176c4d1aba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Truffle Risotto",
    description: "Arborio rice, wild mushrooms, truffle oil, parmesan",
    price: "$24",
    category: "Lunch",
    image: "https://images.unsplash.com/photo-1659879003301-ca2d6dd2f5d4?q=80&w=1887&auto=format&fit=crop",
    tags: ["Vegetarian", "Signature"]
  },
  {
    id: 4,
    name: "Lobster Ravioli",
    description: "Handmade pasta, lobster filling, saffron cream sauce",
    price: "$32",
    category: "Lunch",
    image: "https://images.unsplash.com/photo-1589227365533-cee630bd59bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Signature"]
  },
  {
    id: 5,
    name: "Filet Mignon",
    description: "Grass-fed beef, garlic mashed potatoes, seasonal vegetables",
    price: "$42",
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Popular"]
  },
  {
    id: 6,
    name: "Seared Salmon",
    description: "Atlantic salmon, quinoa, roasted vegetables, lemon butter",
    price: "$28",
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "Chocolate Soufflé",
    description: "Rich dark chocolate, vanilla bean ice cream",
    price: "$14",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1511715112108-9acc5d3c1360?q=80&w=1887&auto=format&fit=crop",
    tags: ["Popular"]
  },
  {
    id: 8,
    name: "Crème Brûlée",
    description: "Classic vanilla custard, caramelized sugar",
    price: "$12",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    name: "Signature Cocktail",
    description: "House-infused vodka, elderflower, citrus, fresh berries",
    price: "$16",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=1886&auto=format&fit=crop",
    tags: ["Signature"]
  },
  {
    id: 10,
    name: "Classic Mojito",
    description: "White rum, fresh mint, lime, soda water",
    price: "$14",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>(menuItems);
  
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(menuItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

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
  }, [filteredItems]);

  const categories: Category[] = ["All", "Breakfast", "Lunch", "Dinner", "Desserts", "Drinks"];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Food spread" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">Our Menu</h1>
            <p className="text-white/90 max-w-2xl mx-auto">
              Explore our carefully crafted dishes made with the finest ingredients
            </p>
          </div>
        </section>

        {/* Menu Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            {/* Chef Specials Section */}
            <ChefSpecials />
            
            {/* Categories Filter */}
            <div className="mb-12 animate-on-scroll">
              <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted hover:bg-muted/80'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="animate-on-scroll bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-60">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    {item.tags && item.tags.length > 0 && (
                      <div className="absolute top-2 right-2 flex flex-col gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-2 py-1 rounded-md text-xs font-medium ${
                              tag === 'Signature' 
                                ? 'bg-primary/90 text-primary-foreground' 
                                : tag === 'Popular' 
                                ? 'bg-gold-500/90 text-black' 
                                : 'bg-secondary/90 text-secondary-foreground'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-serif">{item.name}</h3>
                      <span className="font-serif text-primary font-medium">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground mb-3 text-sm">{item.description}</p>
                    <span className="inline-block px-3 py-1 bg-muted text-xs font-medium rounded-full">
                      {item.category}
                    </span>
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

export default Menu;
