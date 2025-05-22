import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
const HeroSection = () => {
  return <section className="hero-pattern min-h-screen flex items-center pt-24 pb-12">
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
              window.open("https://api.whatsapp.com/send?phone=5512981008888&text=Olá! Quero agendar uma demonstração do OneHealth para minha farmácia de manipulação", "_blank");
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
              <p className="text-sm text-gray-600 font-bold">Oferta Especial: Condições exclusivas até 30 de Junho 2025</p>
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
            <div className="relative mx-auto max-w-sm">
              {/* Notebook base/desk effect */}
              <div className="absolute -bottom-4 w-[85%] h-3 bg-gradient-to-t from-gray-800 to-gray-600 rounded-[50%] left-[7.5%] blur-md opacity-40"></div>
              
              {/* Notebook base */}
              <div className="relative">
                {/* Screen part */}
                <div className="bg-gray-800 rounded-t-lg pt-2 px-2 pb-1 shadow-lg">
                  <div className="flex space-x-1.5 mb-1 ml-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <div className="overflow-hidden border-t border-gray-700 relative">
                    {/* Dashboard image filling the screen */}
                    <img src="/lovable-uploads/a007032f-c9a8-4de8-9e6c-db1c0cd23576.png" alt="OneHealth Dashboard" className="w-full h-full object-cover" onError={e => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80";
                  }} />
                  </div>
                </div>
                
                {/* Keyboard part */}
                <div className="bg-gray-300 h-2 rounded-b-xl mt-[1px]"></div>
                <div className="bg-gray-400 h-1 w-[70%] mx-auto rounded-b-xl"></div>
              </div>
              
              {/* Stats badge */}
              <div className="absolute -right-4 -bottom-8 bg-onehealth-red rounded-lg p-3 shadow-lg text-white text-xs">
                <p className="font-bold">+ de 500</p>
                <p>farmácias utilizando</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default HeroSection;