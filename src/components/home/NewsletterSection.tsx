
import { useState, FormEvent } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Thank you for subscribing!",
      description: "You'll now receive our latest news and special offers.",
    });
    
    setEmail('');
    setLoading(false);
  };

  return (
    <section className="py-16 px-4 bg-muted">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center animate-on-scroll">
          <h2 className="text-2xl md:text-3xl font-serif font-medium mb-4">
            Stay Updated with Shory
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter for special offers, new menu items, and upcoming events
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          
          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
}
