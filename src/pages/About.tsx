
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Award, Users, Briefcase } from "lucide-react";

export default function About() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-background/30 to-background">
          <div className="container relative z-10 pt-10">
            <div className="text-center max-w-3xl mx-auto opacity-0 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-serif mt-2 mb-6">
                Our Story & Mission
              </h1>
              <p className="text-muted-foreground">
                Get to know the team behind Purple Octa Creation and what drives our passion for exceptional design.
              </p>
            </div>
          </div>
        </section>
        
        {/* Story Section */}
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 opacity-0 animate-fade-in-left">
                <span className="text-primary font-medium">Our Story</span>
                <h2 className="text-3xl font-bold font-serif mt-2 mb-6">
                  Founded on Passion & Expertise
                </h2>
                <p className="text-muted-foreground mb-4">
                  Purple Octa Creation was established in 2012 by a team of passionate designers and craftsmen who shared a vision of creating spaces that seamlessly blend aesthetics with functionality.
                </p>
                <p className="text-muted-foreground mb-4">
                  Over the years, we've grown from a small studio to a comprehensive design and construction firm, but our core values remain unchanged: attention to detail, commitment to quality, and a client-focused approach.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our name, Purple Octa Creation, reflects our philosophy: like the color purple, we combine the stability of blue with the energy of red to create balanced designs; "Octa" represents our multifaceted approach to each project; and "Creation" embodies our commitment to bringing innovative ideas to life.
                </p>
              </div>
              
              <div className="order-1 lg:order-2 relative opacity-0 animate-fade-in-right">
                <div className="relative z-10 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800&auto=format&fit=crop" 
                    alt="Our Team" 
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary/10 w-full h-full rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="section bg-card">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
              <span className="text-primary font-medium">Our Values</span>
              <h2 className="text-3xl font-bold font-serif mt-2 mb-6">
                What Drives Us
              </h2>
              <p className="text-muted-foreground">
                Our core values shape every aspect of our work, from initial concept to final implementation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Award className="h-8 w-8" />,
                  title: "Excellence",
                  description: "We hold ourselves to the highest standards in every project, ensuring that each detail meets our exacting criteria for quality and design integrity.",
                  delay: 100
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Collaboration",
                  description: "We believe in the power of collaboration, working closely with clients to incorporate their vision while providing expert guidance.",
                  delay: 200
                },
                {
                  icon: <Briefcase className="h-8 w-8" />,
                  title: "Integrity",
                  description: "Honesty and transparency guide all our interactions, ensuring that clients can trust us to deliver on our promises and meet deadlines.",
                  delay: 300
                }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="glass-card p-8 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${value.delay}ms` }}
                >
                  <div className="bg-primary/10 text-primary p-3 rounded-lg inline-block mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold font-serif mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
              <span className="text-primary font-medium">Our Team</span>
              <h2 className="text-3xl font-bold font-serif mt-2 mb-6">
                Meet the Experts
              </h2>
              <p className="text-muted-foreground">
                Our talented team combines diverse expertise with a shared passion for innovative design and quality craftsmanship.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
                  name: "Emily Chen",
                  role: "Principal Designer",
                  delay: 100
                },
                {
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
                  name: "David Williams",
                  role: "Construction Manager",
                  delay: 200
                },
                {
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
                  name: "Sarah Johnson",
                  role: "Senior Architect",
                  delay: 300
                },
                {
                  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
                  name: "Michael Rodriguez",
                  role: "Project Manager",
                  delay: 400
                }
              ].map((member, index) => (
                <div 
                  key={index} 
                  className="text-center opacity-0 animate-fade-in"
                  style={{ animationDelay: `${member.delay}ms` }}
                >
                  <div className="relative mb-4 overflow-hidden rounded-lg group">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-xl font-bold font-serif">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="section bg-gradient-to-r from-purple-dark to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0.5)_100%)]"></div>
          
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="opacity-0 animate-fade-in-left">
                <span className="text-primary font-medium">Why Choose Us</span>
                <h2 className="text-3xl font-bold font-serif mt-2 mb-6 text-white">
                  What Sets Us Apart
                </h2>
                <p className="text-white/80 mb-8">
                  At Purple Octa Creation, we combine creative design with technical expertise to deliver exceptional results that exceed our clients' expectations.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Tailored design solutions that reflect your unique style and needs",
                    "Comprehensive project management from concept to completion",
                    "Skilled craftsmen and industry-leading partners",
                    "Commitment to quality and attention to detail",
                    "Transparent communication throughout the process"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-primary/20 p-1 rounded-full mr-3 mt-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-white/80">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 opacity-0 animate-fade-in-right">
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400&auto=format&fit=crop" 
                    alt="Interior Design" 
                    className="rounded-lg h-48 w-full object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=400&auto=format&fit=crop" 
                    alt="Interior Design" 
                    className="rounded-lg h-64 w-full object-cover"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=400&auto=format&fit=crop" 
                    alt="Interior Design" 
                    className="rounded-lg h-64 w-full object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1556702571-3e11dd2b1a92?q=80&w=400&auto=format&fit=crop" 
                    alt="Interior Design" 
                    className="rounded-lg h-48 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
