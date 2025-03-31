import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Palette, 
  Home, 
  Store, 
  Sparkles, 
  PenTool, 
  LayoutPanelLeft, 
  Lightbulb, 
  Clock,
  ArrowRight,
  CheckCircle
} from "lucide-react";

export default function Services() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-purple-dark to-background">
          <div className="container relative z-10 pt-10">
            <div className="text-center max-w-3xl mx-auto opacity-0 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-serif mt-2 mb-6">
                Comprehensive Design Solutions
              </h1>
              <p className="text-muted-foreground">
                From initial concept to final implementation, we provide end-to-end design and construction services to bring your vision to life.
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Services Section */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {[
                {
                  icon: <Palette className="h-10 w-10" />,
                  title: "Interior Design",
                  description: "We create custom interior designs that reflect your personal style and functional needs, focusing on every detail from spatial planning to the finishing touches.",
                  features: ["Space planning & layout", "Color schemes & palettes", "Material & finish selection", "Custom furniture design", "Lighting design"],
                  delay: 100
                },
                {
                  icon: <Sparkles className="h-10 w-10" />,
                  title: "Renovation & Remodeling",
                  description: "Transform your existing space with our comprehensive renovation services, from minor updates to complete remodels that revolutionize your environment.",
                  features: ["Bathroom & kitchen remodels", "Structural renovations", "Space reconfiguration", "Flooring & ceiling updates", "Wall removal & additions"],
                  delay: 200
                },
                {
                  icon: <LayoutPanelLeft className="h-10 w-10" />,
                  title: "Space Planning",
                  description: "Maximize the potential of your space with our expert planning services that ensure optimal flow, functionality, and aesthetic harmony.",
                  features: ["Functional layout design", "Traffic flow optimization", "Furniture arrangement", "Spatial problem-solving", "Accessibility considerations"],
                  delay: 300
                },
                {
                  icon: <Home className="h-10 w-10" />,
                  title: "Residential Design",
                  description: "Create a home that truly reflects your lifestyle with our residential design services, covering everything from single rooms to entire houses.",
                  features: ["New home design", "Room makeovers", "Multi-room renovations", "Family-friendly spaces", "Luxury home interiors"],
                  delay: 400
                },
                {
                  icon: <Store className="h-10 w-10" />,
                  title: "Commercial Design",
                  description: "Enhance your business environment with our commercial design solutions that balance brand identity, functionality, and employee well-being.",
                  features: ["Office space design", "Retail store layouts", "Restaurant interiors", "Hospitality spaces", "Corporate branding integration"],
                  delay: 500
                },
                {
                  icon: <Clock className="h-10 w-10" />,
                  title: "Project Management",
                  description: "Leave the details to us with our comprehensive project management services that ensure your project is completed on time, within budget, and to the highest standard.",
                  features: ["Timeline development", "Contractor coordination", "Budget management", "Quality control", "Progress reporting"],
                  delay: 600
                },
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: `${service.delay}ms` }}
                >
                  <div className="bg-primary/10 text-primary p-4 rounded-lg inline-block mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-serif mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="section bg-card">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
              <span className="text-primary font-medium">Our Process</span>
              <h2 className="text-3xl font-bold font-serif mt-2 mb-6">
                How We Work
              </h2>
              <p className="text-muted-foreground">
                Our systematic approach ensures that each project progresses smoothly from initial concept to final implementation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "Consultation",
                  description: "We begin by understanding your vision, needs, and budget through an in-depth consultation.",
                  delay: 100
                },
                {
                  number: "02",
                  title: "Concept Development",
                  description: "Our team creates detailed design concepts based on your requirements and preferences.",
                  delay: 200
                },
                {
                  number: "03",
                  title: "Design Refinement",
                  description: "We refine the design based on your feedback, finalizing all details before implementation.",
                  delay: 300
                },
                {
                  number: "04",
                  title: "Implementation",
                  description: "Our skilled team brings the design to life, ensuring quality at every step of the process.",
                  delay: 400
                },
              ].map((step, index) => (
                <div 
                  key={index} 
                  className="glass-card p-8 text-center relative opacity-0 animate-fade-in"
                  style={{ animationDelay: `${step.delay}ms` }}
                >
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold font-serif mt-4 mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section - Update gradient colors */}
        <section className="section bg-gradient-to-r from-purple-dark to-royal-dark relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.2)_0%,rgba(0,0,0,0.5)_100%)]"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center opacity-0 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Contact us today to schedule a consultation and take the first step towards transforming your space.
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
              <span className="text-primary font-medium">FAQ</span>
              <h2 className="text-3xl font-bold font-serif mt-2 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Find answers to common questions about our services and process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  question: "What is the typical timeline for a design project?",
                  answer: "Project timelines vary based on scope and complexity. A room redesign might take 4-6 weeks, while a full home renovation could take 3-6 months. During our initial consultation, we'll provide a more accurate timeline for your specific project.",
                  delay: 100
                },
                {
                  question: "How do you determine pricing for your services?",
                  answer: "Our pricing is based on the scope of work, project size, and level of service required. We offer both flat-fee packages and hourly rates, depending on the project requirements. We provide detailed proposals after the initial consultation.",
                  delay: 200
                },
                {
                  question: "Do you work with clients who already have some design ideas?",
                  answer: "Absolutely! We love collaborating with clients who have a vision for their space. Our job is to refine and enhance your ideas with our professional expertise, ensuring the final result exceeds your expectations.",
                  delay: 300
                },
                {
                  question: "Can you work with my existing furniture and decor?",
                  answer: "Yes, we're experts at incorporating existing pieces into new designs. We'll evaluate your current items and suggest which ones to keep, repurpose, or replace to create a cohesive final look that aligns with your vision.",
                  delay: 400
                },
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${faq.delay}ms` }}
                >
                  <h3 className="text-lg font-bold mb-3 font-serif">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
