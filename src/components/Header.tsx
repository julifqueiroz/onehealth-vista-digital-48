
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                <span className="text-onehealth-blue">One</span>
                <span className="text-onehealth-green">Health</span>
              </span>
            </div>
          </div>
          
          <nav className="hidden md:flex gap-6 items-center">
            <a href="#features" className="text-gray-800 hover:text-onehealth-blue transition-colors">Funcionalidades</a>
            <a href="#benefits" className="text-gray-800 hover:text-onehealth-blue transition-colors">Benefícios</a>
            <a href="#testimonials" className="text-gray-800 hover:text-onehealth-blue transition-colors">Depoimentos</a>
            <a href="#promotion" className="text-gray-800 hover:text-onehealth-blue transition-colors">Promoções</a>
          </nav>
          
          <Button 
            className="bg-onehealth-blue hover:bg-onehealth-darkblue transition-colors"
            onClick={() => {
              window.open("https://api.whatsapp.com/send?phone=5512981008888&text=Olá! Estou interessado em conhecer o OneHealth para minha farmácia de manipulação", "_blank");
            }}
          >
            Falar com Consultor
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
