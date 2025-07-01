
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const HeroSection = () => {
  return <section className="hero-pattern min-h-screen flex items-center pt-24 pb-12 px-[50px] mx-0 py-[50px] my-0 rounded-none">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Revolucione sua <span className="text-gradient">Farmácia de Manipulação</span> com o <span className="text-onehealth-red">OneHealth</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              O sistema ERP mais completo e inovador do mercado, desenvolvido especialmente para farmácias de manipulação que buscam excelência operacional e crescimento sustentável.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-onehealth text-white hover:opacity-90 transition-all duration-300 text-base px-8" onClick={() => {
              window.open("https://api.whatsapp.com/send?phone=5571996073520&text=Olá! Quero agendar uma demonstração do OneHealth para minha farmácia de manipulação", "_blank");
            }}>
                Agendar Demonstração
              </Button>
              
              <Button size="lg" variant="outline" className="border-onehealth-red text-onehealth-red hover:bg-onehealth-red hover:text-white transition-all duration-300 text-base" onClick={() => {
              window.location.href = "#features";
            }}>
                Conhecer Recursos
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-2">
              <p className="text-sm text-gray-600 font-bold">OFERTA ESPECIAL: Condições exclusivas até 30 de Junho 2025</p>
              <span className="animate-pulse-scale inline-flex h-3 w-3 rounded-full bg-onehealth-red"></span>
            </div>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="lg:w-1/2">
            <div className="relative mx-auto max-w-md">
              {/* Enhanced shadow effects */}
              <div className="absolute -bottom-6 w-[90%] h-4 bg-gradient-to-t from-gray-900/30 to-transparent rounded-[50%] left-[5%] blur-lg"></div>
              <div className="absolute -bottom-2 w-[85%] h-2 bg-gradient-to-t from-onehealth-red/20 to-transparent rounded-[50%] left-[7.5%] blur-sm"></div>
              
              {/* Ambient glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-onehealth-blue/10 via-onehealth-red/10 to-onehealth-green/10 rounded-xl blur-xl scale-110 opacity-50"></div>
              
              {/* Notebook base with enhanced styling */}
              <div className="relative">
                {/* Screen part with gradient border */}
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-t-lg pt-2 px-2 pb-1 shadow-2xl border border-gray-700" style={{
                aspectRatio: '16/9'
              }}>
                  {/* Enhanced window controls */}
                  <div className="flex space-x-1.5 mb-1 ml-1">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-sm"></div>
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-sm"></div>
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-sm"></div>
                  </div>
                  
                  {/* Screen content with multiple effects */}
                  <div className="overflow-hidden border-t border-gray-600 relative h-[calc(100%-16px)] rounded-sm">
                    {/* Gradient overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 z-10 pointer-events-none"></div>
                    
                    {/* Screen reflection effect */}
                    <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/10 to-transparent z-20 pointer-events-none"></div>
                    
                    {/* Dashboard image with enhanced styling */}
                    <img 
                      src="/lovable-uploads/a007032f-c9a8-4de8-9e6c-db1c0cd23576.png" 
                      alt="OneHealth Dashboard" 
                      onError={e => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80";
                      }} 
                      className="w-full h-full object-fill transform hover:scale-105 transition-transform duration-500 ease-out filter brightness-105 contrast-110 saturate-110" 
                    />
                    
                    {/* Subtle scanline effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent bg-[length:100%_4px] opacity-30 z-10 pointer-events-none"></div>
                  </div>
                </div>
                
                {/* Enhanced keyboard part */}
                <div className="bg-gradient-to-b from-gray-300 to-gray-400 h-3 rounded-b-xl mt-[1px] shadow-inner"></div>
                <div className="bg-gradient-to-b from-gray-400 to-gray-500 h-1.5 w-[80%] mx-auto rounded-b-xl shadow-sm"></div>
                
                {/* Floating elements for extra visual appeal */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-onehealth-red/20 rounded-full blur-sm animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-onehealth-blue/20 rounded-full blur-sm animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};

export default HeroSection;
