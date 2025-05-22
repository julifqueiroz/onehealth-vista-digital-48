
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 lg:px-12",
      scrolled ? "bg-white shadow-md py-3" : "bg-transparent"
    )}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/onehealth-logo.png" 
              alt="OneHealth" 
              onError={(e) => {
                // Fallback to text if logo image fails to load
                e.currentTarget.style.display = 'none';
                document.getElementById('logo-text')!.style.display = 'block';
              }}
              className="h-10"
            />
            <div id="logo-text" className="hidden">
              <span className="font-bold text-2xl">
                <span className="text-onehealth-red">One</span>
                <span className="text-onehealth-burgundy">Health</span>
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            <a href="#features" className="text-gray-800 hover:text-onehealth-red transition-colors">Funcionalidades</a>
            <a href="#benefits" className="text-gray-800 hover:text-onehealth-red transition-colors">Benefícios</a>
            <a href="#testimonials" className="text-gray-800 hover:text-onehealth-red transition-colors">Depoimentos</a>
            <a href="#promotion" className="text-gray-800 hover:text-onehealth-red transition-colors">Promoções</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="p-2">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-onehealth-red hover:bg-onehealth-darkred transition-colors"
              onClick={() => {
                window.open("https://api.whatsapp.com/send?phone=5512981008888&text=Olá! Estou interessado em conhecer o OneHealth para minha farmácia de manipulação", "_blank");
              }}
            >
              Falar com Consultor
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col gap-3">
              <a 
                href="#features" 
                className="text-gray-800 hover:text-onehealth-red transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Funcionalidades
              </a>
              <a 
                href="#benefits" 
                className="text-gray-800 hover:text-onehealth-red transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Benefícios
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-800 hover:text-onehealth-red transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a 
                href="#promotion" 
                className="text-gray-800 hover:text-onehealth-red transition-colors px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Promoções
              </a>
              <div className="px-4 pt-2">
                <Button 
                  className="bg-onehealth-red hover:bg-onehealth-darkred transition-colors w-full"
                  onClick={() => {
                    window.open("https://api.whatsapp.com/send?phone=5512981008888&text=Olá! Estou interessado em conhecer o OneHealth para minha farmácia de manipulação", "_blank");
                    setMobileMenuOpen(false);
                  }}
                >
                  Falar com Consultor
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
