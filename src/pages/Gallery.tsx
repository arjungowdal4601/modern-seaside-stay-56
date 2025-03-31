
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Expand, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

// Define image types for filtering
type ImageCategory = "all" | "residential" | "commercial" | "lighting" | "furniture";

// Sample gallery data
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600&auto=format&fit=crop",
    alt: "Modern living room with minimalist furniture",
    category: "residential",
    title: "Minimalist Living Space"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=600&auto=format&fit=crop",
    alt: "Contemporary kitchen design",
    category: "residential",
    title: "Contemporary Kitchen"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=600&auto=format&fit=crop",
    alt: "Office space with modern design",
    category: "commercial",
    title: "Creative Office Hub"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=600&auto=format&fit=crop",
    alt: "Bedroom with elegant design",
    category: "residential",
    title: "Serene Bedroom Retreat"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600&auto=format&fit=crop",
    alt: "Modern bathroom fixtures",
    category: "residential",
    title: "Luxury Bathroom Design"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=600&auto=format&fit=crop",
    alt: "Conference room design",
    category: "commercial",
    title: "Executive Conference Room"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=600&auto=format&fit=crop",
    alt: "Designer pendant lighting",
    category: "lighting",
    title: "Statement Lighting Fixtures"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=600&auto=format&fit=crop",
    alt: "Custom furniture design",
    category: "furniture",
    title: "Bespoke Furniture Collection"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=600&auto=format&fit=crop",
    alt: "Hotel lobby design",
    category: "commercial",
    title: "Boutique Hotel Reception"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=600&auto=format&fit=crop",
    alt: "Dining room with designer table",
    category: "residential",
    title: "Elegant Dining Space"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop",
    alt: "Retail store interior",
    category: "commercial",
    title: "Contemporary Retail Design"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=600&auto=format&fit=crop",
    alt: "Designer chair",
    category: "furniture",
    title: "Artisanal Furniture Piece"
  }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<ImageCategory>("all");
  const [expandedImage, setExpandedImage] = useState<number | null>(null);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // Filter images based on selected category
  const filteredImages = selectedCategory === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-b from-background/30 to-background">
          <div className="container relative z-10 pt-10">
            <div className="text-center max-w-3xl mx-auto opacity-0 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Our Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-serif mt-2 mb-6">
                Project Gallery
              </h1>
              <p className="text-muted-foreground">
                Explore our collection of completed projects, showcasing our expertise in transforming spaces into exceptional environments.
              </p>
            </div>
          </div>
        </section>
        
        {/* Filter Buttons */}
        <section className="py-8">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-4 mb-8 opacity-0 animate-fade-in">
              {[
                { value: "all", label: "All Projects" },
                { value: "residential", label: "Residential" },
                { value: "commercial", label: "Commercial" },
                { value: "lighting", label: "Lighting" },
                { value: "furniture", label: "Furniture" }
              ].map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.value as ImageCategory)}
                  className={cn(
                    "rounded-full px-6",
                    selectedCategory === category.value ? "bg-primary text-white" : "hover:bg-primary/10"
                  )}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Gallery Grid */}
        <section className="pb-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <div 
                  key={image.id} 
                  className="group relative overflow-hidden rounded-lg shadow-md opacity-0 animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setExpandedImage(image.id)}
                >
                  <div className="aspect-square">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-bold font-serif">{image.title}</h3>
                    <p className="text-white/80 text-sm capitalize">{image.category}</p>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <Expand className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredImages.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>
        
        {/* Expanded Image Modal */}
        {expandedImage !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setExpandedImage(null)}
          >
            <div className="relative max-w-5xl max-h-[80vh] animate-scale-in">
              <button 
                className="absolute top-4 right-4 bg-white/20 p-2 rounded-full z-10 hover:bg-white/30 transition-colors"
                onClick={() => setExpandedImage(null)}
              >
                <ExternalLink className="h-6 w-6 text-white" />
              </button>
              
              {galleryImages.find(img => img.id === expandedImage) && (
                <>
                  <img 
                    src={galleryImages.find(img => img.id === expandedImage)?.src} 
                    alt={galleryImages.find(img => img.id === expandedImage)?.alt} 
                    className="max-h-[80vh] w-auto max-w-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4">
                    <h3 className="text-white text-xl font-bold font-serif">
                      {galleryImages.find(img => img.id === expandedImage)?.title}
                    </h3>
                    <p className="text-white/80 text-sm capitalize">
                      {galleryImages.find(img => img.id === expandedImage)?.category}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
