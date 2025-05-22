
import React from 'react';
import { Card } from '@/components/ui/card';

const testimonials = [
  {
    name: "Dra. Marina Silva",
    position: "Proprietária, Farmácia Vitafarma",
    quote: "Implementar o OneHealth foi a melhor decisão que tomamos. O sistema simplificou nossos processos e aumentou nossa produtividade em 40%. O controle de estoque é incomparável!",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Paulo Mendes",
    position: "Diretor, Rede PharmaPure",
    quote: "Após tentar vários sistemas no mercado, o OneHealth se destacou pela facilidade de uso e recursos específicos para manipulação. O suporte técnico é excepcional.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Fernanda Costa",
    position: "Farmacêutica, Farmácia Integrale",
    quote: "A integração com prescrições digitais mudou completamente nossa rotina. Hoje conseguimos atender mais clientes, com mais qualidade e menos erros. Recomendo fortemente!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Nossos <span className="text-gradient">Clientes Dizem</span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Veja como farmácias de manipulação de todo o Brasil estão transformando seus negócios com o OneHealth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${testimonial.name.replace(' ', '+')}&background=005CB9&color=fff`;
                  }} 
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-2 -top-2 text-4xl text-onehealth-blue opacity-20">"</div>
                <p className="text-gray-700 relative z-10 pl-4">{testimonial.quote}</p>
                <div className="absolute -right-2 bottom-0 text-4xl text-onehealth-blue opacity-20">"</div>
              </div>
              
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="#contact" 
            className="inline-block bg-onehealth-blue text-white py-3 px-6 rounded-md hover:bg-onehealth-darkblue transition-colors"
          >
            Seja o Próximo Caso de Sucesso
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
