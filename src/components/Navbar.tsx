
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300", 
      scrolled ? "bg-background/80 backdrop-blur-lg py-3 shadow-md" : "bg-transparent py-5"
    )}>
      <nav className="container flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 font-serif text-white">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-light to-royal-light bg-clip-text text-transparent">
            Purple Octa
          </span>
          <span className="text-sm font-light tracking-wider hidden sm:inline-block">Creation</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <li key={link.name} className="relative">
              <Link 
                to={link.path} 
                className="font-medium transition-colors hover:text-primary link-hover"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <Button asChild className="bg-purple-light hover:bg-purple text-white">
            <Link to="/contact">Book an Appointment</Link>
          </Button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-full">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden transition-opacity duration-300",
        mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <div className={cn(
          "fixed inset-y-0 right-0 w-3/4 max-w-sm bg-card shadow-xl p-6 transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="flex justify-between mb-8">
                <Link to="/" className="font-serif text-xl font-bold">
                  Purple Octa
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} className="rounded-full">
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <ul className="space-y-6">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-lg font-medium transition-colors hover:text-primary" 
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button asChild className="w-full bg-purple-light hover:bg-purple text-white mt-6">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Book an Appointment
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
