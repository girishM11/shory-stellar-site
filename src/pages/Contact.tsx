
import { useState, useEffect, FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("2");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Reservation Submitted!",
      description: "We'll contact you shortly to confirm your reservation.",
    });
    
    // Reset form
    setName("");
    setEmail("");
    setPhone("");
    setGuests("2");
    setDate(undefined);
    setTime("");
    setMessage("");
    setLoading(false);
  };

  const timeSlots = [
    "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
    "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Restaurant Interior" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">Contact & Reservations</h1>
            <p className="text-white/90 max-w-2xl mx-auto">
              Book your table or get in touch with us
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8 animate-on-scroll">
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif mb-6">Visit Us</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium mb-1">Address</h4>
                        <p className="text-muted-foreground">123 Gourmet Street<br />Foodville, FL 98765</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Phone className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium mb-1">Phone</h4>
                        <p className="text-muted-foreground">(123) 456-7890</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Mail className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium mb-1">Email</h4>
                        <p className="text-muted-foreground">info@shoryrestaurant.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Clock className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium mb-1">Hours</h4>
                        <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 10:00 PM</p>
                        <p className="text-muted-foreground">Saturday - Sunday: 9:00 AM - 11:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="h-64 sm:h-80 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215157063936!2d-73.98784732392266!3d40.75850657138783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258ff77acdb9b%3A0x7dd1f7b25570d75d!2sRestaurant%20Row%2C%20New%20York%2C%20NY%2010036!5e0!3m2!1sen!2sus!4v1684796677787!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    className="border-0" 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Restaurant Location"
                  ></iframe>
                </div>
              </div>
              
              {/* Reservation Form */}
              <div className="lg:col-span-3 animate-on-scroll" style={{ transitionDelay: "200ms" }}>
                <div className="bg-background p-6 md:p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl md:text-3xl font-serif mb-6">Make a Reservation</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="guests" className="block text-sm font-medium">
                          Number of Guests
                        </label>
                        <select
                          id="guests"
                          value={guests}
                          onChange={(e) => setGuests(e.target.value)}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? 'Guest' : 'Guests'}
                            </option>
                          ))}
                          <option value="more">More than 10</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium">
                          Date
                        </label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <button
                              type="button"
                              className={cn(
                                "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                                !date && "text-muted-foreground"
                              )}
                            >
                              {date ? format(date, "PPP") : "Select a date"}
                              <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
                            </button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              disabled={(date) => date < new Date()}
                              initialFocus
                              className={cn("p-3 pointer-events-auto")}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="time" className="block text-sm font-medium">
                          Time
                        </label>
                        <select
                          id="time"
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select a time</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium">
                        Special Requests (Optional)
                      </label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex justify-center items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                    >
                      {loading ? "Submitting..." : "Book Table"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
