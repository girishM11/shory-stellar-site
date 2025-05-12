
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ChefHat } from "lucide-react";

type ChefSpecial = {
  chefId: number;
  chefName: string;
  chefImage: string;
  dishName: string;
  dishDescription: string;
  dishImage: string;
  dishPrice: string;
};

const chefSpecials: ChefSpecial[] = [
  {
    chefId: 1,
    chefName: "Marcus Chen",
    chefImage: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1887&auto=format&fit=crop",
    dishName: "Truffle Infused Risotto",
    dishDescription: "Arborio rice cooked to perfection with wild mushrooms and finished with truffle oil and aged parmesan.",
    dishImage: "https://images.unsplash.com/photo-1659879003301-ca2d6dd2f5d4?q=80&w=1887&auto=format&fit=crop",
    dishPrice: "$32"
  },
  {
    chefId: 2,
    chefName: "Sophia Rivera",
    chefImage: "https://images.unsplash.com/photo-1607631568211-71f4db875b2f?q=80&w=1887&auto=format&fit=crop",
    dishName: "Chocolate Soufflé",
    dishDescription: "A light and airy chocolate soufflé served with vanilla bean crème anglaise and fresh berries.",
    dishImage: "https://images.unsplash.com/photo-1511715112108-9acc5d3c1360?q=80&w=1887&auto=format&fit=crop",
    dishPrice: "$14"
  },
  {
    chefId: 3,
    chefName: "James Laurent",
    chefImage: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1887&auto=format&fit=crop",
    dishName: "Seared Scallops",
    dishDescription: "Locally harvested sea scallops seared to perfection, served with butternut squash puree and crispy pancetta.",
    dishImage: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1887&auto=format&fit=crop",
    dishPrice: "$36"
  }
];

export default function ChefSpecials() {
  const [activeSpecial, setActiveSpecial] = useState<ChefSpecial>(chefSpecials[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Rotate through chef specials automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        const currentIndex = chefSpecials.findIndex(special => special.chefId === activeSpecial.chefId);
        const nextIndex = (currentIndex + 1) % chefSpecials.length;
        setActiveSpecial(chefSpecials[nextIndex]);
        
        setTimeout(() => {
          setIsAnimating(false);
        }, 300);
      }, 300);
    }, 8000); // Change every 8 seconds
    
    return () => clearInterval(interval);
  }, [activeSpecial]);

  return (
    <div className="mb-16 animate-on-scroll">
      <h2 className="text-2xl font-serif text-center mb-8">Chef's Specials</h2>
      
      <div className={`bg-background/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg transition-all duration-500 ${
        isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-square md:aspect-auto">
            <img 
              src={activeSpecial.dishImage} 
              alt={activeSpecial.dishName} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="h-12 w-12 border-2 border-primary/20">
                  <AvatarImage src={activeSpecial.chefImage} alt={activeSpecial.chefName} />
                  <AvatarFallback>{activeSpecial.chefName.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium">{activeSpecial.chefName}</h4>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <ChefHat size={12} />
                    <span>Executive Chef</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-serif mb-2">{activeSpecial.dishName}</h3>
              <p className="text-muted-foreground mb-4">{activeSpecial.dishDescription}</p>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-xl font-serif text-primary">{activeSpecial.dishPrice}</span>
              <div className="flex">
                {chefSpecials.map((special) => (
                  <div 
                    key={special.chefId}
                    className={`h-2 w-2 rounded-full mx-1 cursor-pointer transition-all ${
                      special.chefId === activeSpecial.chefId 
                        ? 'bg-primary scale-125' 
                        : 'bg-muted hover:bg-muted-foreground'
                    }`}
                    onClick={() => {
                      if (special.chefId !== activeSpecial.chefId) {
                        setIsAnimating(true);
                        setTimeout(() => {
                          setActiveSpecial(special);
                          setTimeout(() => {
                            setIsAnimating(false);
                          }, 300);
                        }, 300);
                      }
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
