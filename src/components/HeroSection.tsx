
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="hero-pattern min-h-screen flex items-center pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Revolucione sua <span className="text-gradient">Farmácia de Manipulação</span> com o <span className="text-onehealth-blue">OneHealth</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              O sistema ERP mais completo e inovador do mercado, desenvolvido especialmente para farmácias de manipulação que buscam excelência operacional e crescimento sustentável.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                className="bg-gradient-onehealth text-white hover:opacity-90 transition-all duration-300 text-base px-8"
                onClick={() => {
                  window.open("https://api.whatsapp.com/send?phone=5512981008888&text=Olá! Quero agendar uma demonstração do OneHealth para minha farmácia de manipulação", "_blank");
                }}
              >
                Agendar Demonstração
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-onehealth-blue text-onehealth-blue hover:bg-onehealth-blue hover:text-white transition-all duration-300 text-base"
                onClick={() => {
                  window.location.href = "#features";
                }}
              >
                Conhecer Recursos
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-2">
              <p className="text-sm text-gray-600 font-medium">
                Oferta Especial: Condições exclusivas até 30 de Junho/2025
              </p>
              <span className="animate-pulse-scale inline-flex h-3 w-3 rounded-full bg-onehealth-green"></span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-onehealth-blue opacity-10 rounded-xl"></div>
              <img 
                src="/dashboard-mockup.png" 
                alt="OneHealth Dashboard" 
                className="rounded-xl shadow-2xl relative z-10 w-full"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/600x400?text=OneHealth+Dashboard";
                }}
              />
              
              <div className="absolute -right-5 -bottom-5 bg-onehealth-green rounded-lg p-4 shadow-lg text-white">
                <p className="font-bold">+ de 500</p>
                <p className="text-sm">farmácias utilizando</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
