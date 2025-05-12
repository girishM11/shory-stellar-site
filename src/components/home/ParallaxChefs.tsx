
import { Link } from 'react-router-dom';
import ParallaxSection from '../layout/ParallaxSection';
import { aboutBg } from '@/assets/images';
import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { ChefHat, ArrowRight } from 'lucide-react';

type Chef = {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialDish: {
    name: string;
    description: string;
    image: string;
  };
};

const chefs: Chef[] = [
  {
    id: 1,
    name: "Marcus Chen",
    role: "Executive Chef",
    bio: "With 15 years of culinary expertise, Chef Marcus brings innovative flavor combinations from around the world.",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1887&auto=format&fit=crop",
    specialDish: {
      name: "Truffle Infused Risotto",
      description: "Arborio rice cooked to perfection with wild mushrooms and finished with truffle oil and aged parmesan.",
      image: "https://images.unsplash.com/photo-1659879003301-ca2d6dd2f5d4?q=80&w=1887&auto=format&fit=crop"
    }
  },
  {
    id: 2,
    name: "Sophia Rivera",
    role: "Pastry Chef",
    bio: "Award-winning pastry chef known for creating delectable desserts that are as beautiful as they are delicious.",
    image: "https://images.unsplash.com/photo-1607631568211-71f4db875b2f?q=80&w=1887&auto=format&fit=crop",
    specialDish: {
      name: "Chocolate Soufflé",
      description: "A light and airy chocolate soufflé served with vanilla bean crème anglaise and fresh berries.",
      image: "https://images.unsplash.com/photo-1511715112108-9acc5d3c1360?q=80&w=1887&auto=format&fit=crop"
    }
  },
  {
    id: 3,
    name: "James Laurent",
    role: "Head Chef",
    bio: "Specializing in sustainable seafood cuisine, Chef James creates memorable dishes with locally-sourced ingredients.",
    image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1887&auto=format&fit=crop",
    specialDish: {
      name: "Seared Scallops",
      description: "Locally harvested sea scallops seared to perfection, served with butternut squash puree and crispy pancetta.",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1887&auto=format&fit=crop"
    }
  }
];

export default function ParallaxChefs() {
  const [activeChef, setActiveChef] = useState<Chef>(chefs[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const changeChef = (chef: Chef) => {
    if (chef.id === activeChef.id) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveChef(chef);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }, 300);
  };

  useEffect(() => {
    // Auto rotate chefs every 10 seconds
    const interval = setInterval(() => {
      const nextChefIndex = (chefs.findIndex(c => c.id === activeChef.id) + 1) % chefs.length;
      changeChef(chefs[nextChefIndex]);
    }, 10000);
    
    return () => clearInterval(interval);
  }, [activeChef]);
  
  return (
    <ParallaxSection 
      backgroundImage={aboutBg}
      overlayOpacity={0.75}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll text-3xl md:text-4xl font-serif font-medium mb-4 text-white">
            Our Culinary Team
          </h2>
          <p className="animate-on-scroll text-white/80 max-w-2xl mx-auto">
            Meet the talented chefs behind our exceptional cuisine, each bringing their unique expertise and passion to create an unforgettable dining experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Chef Selector */}
          <div className="lg:col-span-1 animate-on-scroll">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
              <h3 className="text-xl font-serif text-white mb-6">Our Chefs</h3>
              <div className="space-y-4">
                {chefs.map((chef) => (
                  <div 
                    key={chef.id}
                    onClick={() => changeChef(chef)}
                    className={`flex items-center gap-4 p-3 rounded-lg transition-all cursor-pointer ${
                      chef.id === activeChef.id 
                        ? 'bg-white/20 shadow-lg' 
                        : 'hover:bg-white/5'
                    }`}
                  >
                    <Avatar className="h-12 w-12 border-2 border-white/50">
                      <AvatarImage src={chef.image} alt={chef.name} />
                      <AvatarFallback>{chef.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white">{chef.name}</h4>
                      <p className="text-sm text-white/70">{chef.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Chef Details & Special Dish */}
          <div className={`lg:col-span-2 animate-on-scroll transition-opacity duration-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Chef Bio */}
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-16 w-16 border-2 border-white/50">
                    <AvatarImage src={activeChef.image} alt={activeChef.name} />
                    <AvatarFallback>{activeChef.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-serif text-white">{activeChef.name}</h3>
                    <p className="text-white/70">{activeChef.role}</p>
                  </div>
                </div>
                <p className="text-white/80 mb-4">{activeChef.bio}</p>
                <div className="flex items-center gap-2">
                  <ChefHat className="text-gold-300" size={18} />
                  <span className="text-gold-300 text-sm">Signature Dish: {activeChef.specialDish.name}</span>
                </div>
              </div>
              
              {/* Special Dish */}
              <div className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={activeChef.specialDish.image} 
                    alt={activeChef.specialDish.name}
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-700"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-serif text-white mb-2">{activeChef.specialDish.name}</h4>
                  <p className="text-white/70 text-sm mb-4">{activeChef.specialDish.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center animate-on-scroll">
          <Link to="/menu">
            <Button variant="outline" className="border-white/50 text-white hover:bg-white/10">
              Explore Full Menu <ArrowRight className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </ParallaxSection>
  );
}
