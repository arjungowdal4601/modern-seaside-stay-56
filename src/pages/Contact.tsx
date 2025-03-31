
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Check,
  Calendar
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  
  const { toast } = useToast();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll respond to your message shortly.",
        variant: "default"
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-background/30 to-background">
          <div className="container relative z-10 pt-10">
            <div className="text-center max-w-3xl mx-auto opacity-0 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-serif mt-2 mb-6">
                Get In Touch
              </h1>
              <p className="text-muted-foreground">
                Have a project in mind or questions about our services? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Info & Form Section */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-4 opacity-0 animate-fade-in-left">
                <h2 className="text-2xl font-bold font-serif mb-6">Contact Information</h2>
                <div className="space-y-6 mb-10">
                  <div className="flex items-start">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg mr-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Our Location</h3>
                      <p className="text-muted-foreground">
                        123 Design Street<br />
                        Creative District<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg mr-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@purpleocta.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg mr-4">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button asChild className="w-full btn-primary">
                  <a href="#appointment" className="flex items-center justify-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book an Appointment
                  </a>
                </Button>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-8 opacity-0 animate-fade-in-right">
                <div className="glass-card p-8">
                  <h2 className="text-2xl font-bold font-serif mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium">
                          Full Name <span className="text-primary">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="w-full"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium">
                          Email Address <span className="text-primary">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Your email address"
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                          className="w-full"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="service" className="block text-sm font-medium">
                          Service You're Interested In <span className="text-primary">*</span>
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-foreground shadow-sm h-10"
                        >
                          <option value="" disabled>Select a service</option>
                          <option value="Interior Design">Interior Design</option>
                          <option value="Renovation">Renovation & Remodeling</option>
                          <option value="Space Planning">Space Planning</option>
                          <option value="Residential Design">Residential Design</option>
                          <option value="Commercial Design">Commercial Design</option>
                          <option value="Project Management">Project Management</option>
                          <option value="Other">Other (specify in message)</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium">
                        Message <span className="text-primary">*</span>
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your project or inquiry"
                        rows={5}
                        className="w-full"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="btn-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Appointment Section */}
        <section id="appointment" className="section bg-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-1/4 bg-royal/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple/10 rounded-full blur-3xl"></div>
          
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
              <span className="text-primary font-medium">Book an Appointment</span>
              <h2 className="text-3xl font-bold font-serif mt-2 mb-6">
                Schedule a Consultation
              </h2>
              <p className="text-muted-foreground">
                Ready to take the first step towards transforming your space? Schedule a consultation with our design experts to discuss your project.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto glass-card p-8 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="app-name" className="block text-sm font-medium">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="app-name"
                      required
                      placeholder="Your full name"
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="app-email" className="block text-sm font-medium">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="app-email"
                      type="email"
                      required
                      placeholder="Your email address"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="app-phone" className="block text-sm font-medium">
                      Phone Number <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="app-phone"
                      required
                      placeholder="Your phone number"
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="app-date" className="block text-sm font-medium">
                      Preferred Date <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="app-date"
                      type="date"
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="app-time" className="block text-sm font-medium">
                      Preferred Time <span className="text-primary">*</span>
                    </label>
                    <select
                      id="app-time"
                      required
                      className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-foreground shadow-sm h-10"
                    >
                      <option value="" disabled selected>Select a time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="app-service" className="block text-sm font-medium">
                      Service Type <span className="text-primary">*</span>
                    </label>
                    <select
                      id="app-service"
                      required
                      className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-foreground shadow-sm h-10"
                    >
                      <option value="" disabled selected>Select a service</option>
                      <option value="Initial Consultation">Initial Consultation</option>
                      <option value="Design Presentation">Design Presentation</option>
                      <option value="Project Discussion">Project Discussion</option>
                      <option value="Site Visit">Site Visit</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="app-notes" className="block text-sm font-medium">
                    Additional Notes
                  </label>
                  <Textarea
                    id="app-notes"
                    placeholder="Tell us more about your project or any specific requirements"
                    rows={3}
                    className="w-full"
                  />
                </div>
                
                <Button type="submit" className="btn-primary">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Appointment
                </Button>
              </form>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="h-[400px] relative">
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="glass-card p-6 text-center max-w-md opacity-0 animate-fade-in">
              <h3 className="text-xl font-bold font-serif mb-2">Visit Our Studio</h3>
              <p className="text-muted-foreground mb-4">
                123 Design Street<br />
                Creative District<br />
                New York, NY 10001
              </p>
              <Button asChild className="btn-primary">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1663244060929!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0, filter: "grayscale(1) contrast(1.2) opacity(0.8)" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Purple Octa Creation Location"
          ></iframe>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
