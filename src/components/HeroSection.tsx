
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
              {/* Enhanced shadow effects with multiple layers */}
              <div className="absolute -bottom-10 w-[95%] h-8 bg-gradient-to-t from-gray-900/40 to-transparent rounded-[60%] left-[2.5%] blur-2xl"></div>
              <div className="absolute -bottom-6 w-[90%] h-6 bg-gradient-to-t from-gray-900/30 to-transparent rounded-[50%] left-[5%] blur-lg"></div>
              <div className="absolute -bottom-3 w-[85%] h-3 bg-gradient-to-t from-onehealth-red/30 to-transparent rounded-[50%] left-[7.5%] blur-md"></div>
              
              {/* Enhanced ambient glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-onehealth-red/20 via-blue-500/15 to-green-500/15 rounded-xl blur-2xl scale-125 opacity-60 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-onehealth-red/10 via-transparent to-blue-500/10 rounded-xl blur-xl scale-110 opacity-40"></div>
              
              {/* Floating particles */}
              <div className="absolute -top-4 -left-4 w-2 h-2 bg-onehealth-red/40 rounded-full blur-sm animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
              <div className="absolute -top-2 -right-6 w-1.5 h-1.5 bg-blue-500/40 rounded-full blur-sm animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
              <div className="absolute -bottom-4 -left-6 w-1 h-1 bg-green-500/40 rounded-full blur-sm animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
              <div className="absolute top-1/2 -right-8 w-1.5 h-1.5 bg-purple-500/40 rounded-full blur-sm animate-bounce" style={{animationDelay: '1.5s', animationDuration: '3.5s'}}></div>
              
              {/* Rotating border effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-onehealth-red via-blue-500 to-green-500 opacity-30 blur-sm animate-spin" style={{animationDuration: '20s'}}></div>
              
              {/* Notebook base with enhanced styling */}
              <div className="relative z-10">
                {/* Screen part with enhanced gradient border */}
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-t-lg pt-2 px-2 pb-1 shadow-2xl border-2 border-gradient-to-r from-onehealth-red/30 via-blue-500/30 to-green-500/30" style={{
                aspectRatio: '16/9'
              }}>
                  {/* Enhanced window controls with glow */}
                  <div className="flex space-x-1.5 mb-1 ml-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-lg shadow-red-500/30 animate-pulse" style={{animationDuration: '2s'}}></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg shadow-yellow-500/30 animate-pulse" style={{animationDelay: '0.5s', animationDuration: '2s'}}></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-lg shadow-green-500/30 animate-pulse" style={{animationDelay: '1s', animationDuration: '2s'}}></div>
                  </div>
                  
                  {/* Screen content with enhanced effects */}
                  <div className="overflow-hidden border-t border-gray-600 relative h-[calc(100%-20px)] rounded-sm">
                    {/* Multiple gradient overlays for depth */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 z-10 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-onehealth-red/5 via-transparent to-blue-500/5 z-10 pointer-events-none"></div>
                    
                    {/* Enhanced screen reflection effect */}
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/15 via-white/5 to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/10 to-transparent z-20 pointer-events-none"></div>
                    
                    {/* Dashboard image with enhanced styling - using new reference */}
                    <img 
                      src="/lovable-uploads/a68134c3-d6aa-4e52-ac70-7972b6478df1.png" 
                      alt="OneHealth Dashboard" 
                      onError={e => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80";
                      }} 
                      className="w-full h-full object-fill transform hover:scale-110 transition-all duration-700 ease-out filter brightness-110 contrast-115 saturate-120 hover:brightness-115 hover:contrast-120" 
                    />
                    
                    {/* Enhanced scanline effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/8 to-transparent bg-[length:100%_3px] opacity-40 z-10 pointer-events-none animate-pulse"></div>
                    
                    {/* CRT-style curved edges effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 z-10 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/5 z-10 pointer-events-none"></div>
                  </div>
                </div>
                
                {/* Enhanced keyboard part with more detail */}
                <div className="bg-gradient-to-b from-gray-300 via-gray-350 to-gray-400 h-4 rounded-b-xl mt-[1px] shadow-inner border-t border-gray-400/30"></div>
                <div className="bg-gradient-to-b from-gray-400 via-gray-450 to-gray-500 h-2 w-[80%] mx-auto rounded-b-xl shadow-lg border-t border-gray-500/30"></div>
                <div className="bg-gradient-to-b from-gray-500 to-gray-600 h-1 w-[60%] mx-auto rounded-b-lg shadow-sm"></div>
                
                {/* Enhanced floating elements with varied animations */}
                <div className="absolute -top-3 -right-3 w-5 h-5 bg-onehealth-red/30 rounded-full blur-md animate-ping" style={{animationDuration: '3s'}}></div>
                <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-blue-500/30 rounded-full blur-md animate-ping" style={{animationDelay: '1.5s', animationDuration: '4s'}}></div>
                <div className="absolute top-1/3 -left-4 w-3 h-3 bg-green-500/30 rounded-full blur-sm animate-ping" style={{animationDelay: '2.5s', animationDuration: '5s'}}></div>
                <div className="absolute bottom-1/3 -right-5 w-2 h-2 bg-purple-500/30 rounded-full blur-sm animate-ping" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
                
                {/* Orbiting elements */}
                <div className="absolute inset-0 animate-spin" style={{animationDuration: '30s'}}>
                  <div className="absolute -top-2 left-1/2 w-1 h-1 bg-onehealth-red/50 rounded-full"></div>
                </div>
                <div className="absolute inset-0 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}>
                  <div className="absolute top-1/2 -right-2 w-1 h-1 bg-blue-500/50 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};

export default HeroSection;
