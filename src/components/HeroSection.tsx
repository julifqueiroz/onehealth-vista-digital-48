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
              <p className="text-sm text-gray-600 font-bold">OFERTA ESPECIAL: Condições exclusivas até 30 de Julho 2025</p>
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
              <div className="absolute -top-4 -left-4 w-2 h-2 bg-onehealth-red/40 rounded-full blur-sm animate-bounce" style={{
              animationDelay: '0s',
              animationDuration: '3s'
            }}></div>
              <div className="absolute -top-2 -right-6 w-1.5 h-1.5 bg-blue-500/40 rounded-full blur-sm animate-bounce" style={{
              animationDelay: '1s',
              animationDuration: '4s'
            }}></div>
              <div className="absolute -bottom-4 -left-6 w-1 h-1 bg-green-500/40 rounded-full blur-sm animate-bounce" style={{
              animationDelay: '2s',
              animationDuration: '5s'
            }}></div>
              <div className="absolute top-1/2 -right-8 w-1.5 h-1.5 bg-purple-500/40 rounded-full blur-sm animate-bounce" style={{
              animationDelay: '1.5s',
              animationDuration: '3.5s'
            }}></div>
              
              {/* Modern MacBook-style laptop base */}
              <div className="relative z-10">
                {/* Screen part with ultra-modern design */}
                <div className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-lg pt-1 px-1 pb-0.5 shadow-2xl border border-gray-600/30" style={{
                aspectRatio: '16/10'
              }}>
                  {/* Modern ultra-thin bezel */}
                  <div className="relative bg-black rounded-md overflow-hidden h-full">
                    {/* Notch/camera area (modern MacBook style) */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-900 rounded-b-lg z-30"></div>
                    
                    {/* Screen content with enhanced effects */}
                    <div className="relative h-full">
                      {/* Multiple gradient overlays for depth */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 z-10 pointer-events-none"></div>
                      <div className="absolute inset-0 bg-gradient-to-tr from-onehealth-red/5 via-transparent to-blue-500/5 z-10 pointer-events-none"></div>
                      
                      {/* Enhanced screen reflection effect */}
                      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 via-white/3 to-transparent z-20 pointer-events-none rounded-t-md"></div>
                      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/8 to-transparent z-20 pointer-events-none"></div>
                      
                      {/* Dashboard image with enhanced styling */}
                      <img alt="OneHealth Dashboard" onError={e => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80";
                    }} className="w-full h-full object-cover rounded-md transform hover:scale-105 transition-all duration-700 ease-out filter brightness-105 contrast-110 saturate-110 hover:brightness-110 hover:contrast-115" src="/lovable-uploads/e7c42d0f-d1ee-410e-a2b3-bda1836304c9.png" />
                      
                      {/* Subtle scanline effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent bg-[length:100%_2px] opacity-30 z-10 pointer-events-none animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                {/* Modern MacBook-style base with premium aluminum look */}
                <div className="relative">
                  {/* Main base */}
                  <div className="bg-gradient-to-b from-gray-200 via-gray-250 to-gray-300 h-3 rounded-b-lg shadow-lg border-t border-gray-300/50"></div>
                  
                  {/* Trackpad area */}
                  <div className="bg-gradient-to-b from-gray-300 via-gray-350 to-gray-400 h-1.5 w-[85%] mx-auto rounded-b-lg shadow-inner border-t border-gray-400/30"></div>
                  
                  {/* Bottom edge */}
                  <div className="bg-gradient-to-b from-gray-400 to-gray-500 h-0.5 w-[70%] mx-auto rounded-b-md shadow-sm"></div>
                  
                  {/* Apple logo effect */}
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full opacity-60"></div>
                </div>
                
                {/* Enhanced floating elements with varied animations */}
                <div className="absolute -top-3 -right-3 w-5 h-5 bg-onehealth-red/30 rounded-full blur-md animate-ping" style={{
                animationDuration: '3s'
              }}></div>
                <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-blue-500/30 rounded-full blur-md animate-ping" style={{
                animationDelay: '1.5s',
                animationDuration: '4s'
              }}></div>
                <div className="absolute top-1/3 -left-4 w-3 h-3 bg-green-500/30 rounded-full blur-sm animate-ping" style={{
                animationDelay: '2.5s',
                animationDuration: '5s'
              }}></div>
                <div className="absolute bottom-1/3 -right-5 w-2 h-2 bg-purple-500/30 rounded-full blur-sm animate-ping" style={{
                animationDelay: '0.5s',
                animationDuration: '3.5s'
              }}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HeroSection;