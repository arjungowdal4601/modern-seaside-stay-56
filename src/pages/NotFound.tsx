
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20 flex items-center">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center py-20">
            <h1 className="text-9xl font-bold font-serif text-primary mb-4 opacity-0 animate-fade-in">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Page Not Found
            </h2>
            <p className="text-muted-foreground text-lg mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
              The page you are looking for doesn't exist or has been moved.
            </p>
            
            <div className="space-x-4 opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <Button asChild className="btn-primary">
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild variant="outline" className="btn-secondary">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
