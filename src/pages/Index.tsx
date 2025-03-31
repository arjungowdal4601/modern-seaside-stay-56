
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ChevronDown, 
  Star, 
  Award, 
  Clock, 
  Sparkles, 
  Palette
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Index() {
  useEffect(() => {
    // Force scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          {/* Background image with overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1920&auto=format&fit=crop')",
            }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          
          {/* Content */}
          <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
            <div className="max-w-4xl opacity-0 animate-fade-in">
              <span className="inline-block text-primary/90 text-lg mb-4 tracking-wide font-serif">
                Interior Consultant & Contractor
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-white mb-6 leading-tight">
                Where Every Detail <br className="hidden md:block" />
                <span className="text-outline bg-gradient-to-r from-purple-light via-royal to-purple bg-clip-text text-transparent">
                  Tells a Story
                </span>
              </h1>
              <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                Transforming spaces into extraordinary experiences through thoughtful design and meticulous craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-delay-1">
                <Button asChild size="lg" className="btn-primary min-w-[200px] group">
                  <Link to="/contact">
                    Book an Appointment
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="btn-secondary min-w-[200px]">
                  <Link to="/gallery">
                    Explore Our Work
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Scroll down indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce opacity-0 animate-fade-in-delay-3">
            <a 
              href="#services" 
              className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <ChevronDown className="h-6 w-6" />
            </a>
          </div>
        </section>
        
        {/* Services Overview */}
        <section id="services" className="section bg-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-royal/10 rounded-full blur-3xl"></div>
          
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
              <span className="text-primary font-medium">Our Expertise</span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mt-2 mb-6">
                Comprehensive Design & Construction Services
              </h2>
              <p className="text-muted-foreground">
                From conceptualization to execution, we provide end-to-end solutions for all your interior design and construction needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Palette className="h-8 w-8" />,
                  title: "Interior Design",
                  description: "Thoughtfully crafted interior spaces that reflect your personality and meet your functional needs.",
                  delay: 100
                },
                {
                  icon: <Sparkles className="h-8 w-8" />,
                  title: "Renovation & Remodeling",
                  description: "Transform existing spaces into stunning new environments with our expert renovation services.",
                  delay: 200
                },
                {
                  icon: <Clock className="h-8 w-8" />,
                  title: "Project Management",
                  description: "Comprehensive oversight of your project from initial concept through final implementation.",
                  delay: 300
                }
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="glass-card p-8 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${service.delay}ms` }}
                >
                  <div className="bg-primary/10 text-primary p-3 rounded-lg inline-block mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold font-serif mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Link 
                    to="/services" 
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12 opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <Button asChild variant="outline" className="btn-secondary">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* About Preview Section */}
        <section className="section relative">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative opacity-0 animate-fade-in-left">
                <div className="relative z-10 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop" 
                    alt="Interior Design Team" 
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary/10 w-full h-full rounded-lg -z-10"></div>
              </div>
              
              <div className="opacity-0 animate-fade-in-right">
                <span className="text-primary font-medium">About Us</span>
                <h2 className="text-3xl md:text-4xl font-bold font-serif mt-2 mb-6">
                  We Create Spaces That Inspire
                </h2>
                <p className="text-muted-foreground mb-6">
                  Purple Octa Creation is a premier interior design and construction firm dedicated to creating exceptional spaces that combine aesthetics with functionality. Our team of experienced designers and skilled craftsmen work collaboratively to bring your vision to life.
                </p>
                <p className="text-muted-foreground mb-8">
                  With an unwavering commitment to quality and attention to detail, we transform ordinary spaces into extraordinary environments that reflect your unique style and meet your specific needs.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { number: "10+", label: "Years Experience" },
                    { number: "250+", label: "Projects Completed" },
                    { number: "25", label: "Design Awards" },
                    { number: "100%", label: "Client Satisfaction" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center glass-card py-4 px-2">
                      <p className="text-2xl font-bold text-primary font-serif">{stat.number}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
                
                <Button asChild className="btn-primary">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Projects */}
        <section className="section bg-card relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-1/2 h-1/4 bg-royal/5 rounded-full blur-3xl"></div>
          
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
              <span className="text-primary font-medium">Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mt-2 mb-6">
                Featured Projects
              </h2>
              <p className="text-muted-foreground">
                Explore some of our recent work and discover how we've helped our clients transform their spaces.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
                  title: "Minimalist Apartment",
                  category: "Residential",
                  delay: 100
                },
                {
                  image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=600&auto=format&fit=crop",
                  title: "Modern Office Space",
                  category: "Commercial",
                  delay: 200
                },
                {
                  image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop",
                  title: "Luxury Villa Redesign",
                  category: "Residential",
                  delay: 300
                }
              ].map((project, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-lg opacity-0 animate-fade-in"
                  style={{ animationDelay: `${project.delay}ms` }}
                >
                  <div className="relative h-80">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-primary text-sm">{project.category}</span>
                      <h3 className="text-xl font-bold text-white font-serif">{project.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12 opacity-0 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <Button asChild variant="outline" className="btn-secondary">
                <Link to="/gallery">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="section relative">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-20 h-20 bg-royal/10 rounded-full blur-xl"></div>
          
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
              <span className="text-primary font-medium">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mt-2 mb-6">
                What Our Clients Say
              </h2>
              <p className="text-muted-foreground">
                Don't just take our word for it. Hear what our satisfied clients have to say about their experience working with us.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  content: "Purple Octa Creation transformed our home beyond our expectations. Their attention to detail and commitment to quality is unparalleled.",
                  name: "Sarah Johnson",
                  role: "Homeowner",
                  delay: 100
                },
                {
                  content: "Working with the team was a seamless experience. They listened to our needs and delivered a space that perfectly reflects our company culture.",
                  name: "Michael Chen",
                  role: "CEO, Tech Startups",
                  delay: 200
                },
                {
                  content: "The team's creativity and professionalism made the renovation process stress-free. We're thrilled with our new living space!",
                  name: "Emily Rodriguez",
                  role: "Residential Client",
                  delay: 300
                }
              ].map((testimonial, index) => (
                <div 
                  key={index} 
                  className="glass-card p-8 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${testimonial.delay}ms` }}
                >
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="inline-block h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section bg-gradient-to-r from-purple-dark via-primary to-royal-dark relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.2)_0%,rgba(0,0,0,0.5)_100%)]"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-6">
                Ready to Transform Your Space?
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Let's create something extraordinary together. Get in touch with us today to schedule a consultation and take the first step towards your dream space.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link to="/contact">Book an Appointment</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                  <Link to="/gallery">Explore Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
