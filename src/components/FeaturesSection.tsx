import React from 'react';
import { Card } from '@/components/ui/card';
const features = [{
  title: "Gestão Completa de Fórmulas",
  description: "Cadastre e gerencia suas fórmulas com controle de custos, margens e rastreabilidade de insumos.",
  icon: "💊"
}, {
  title: "Controle de Estoque Inteligente",
  description: "Automatize seu controle de estoque com alertas de ponto de ressuprimento e previsão de demanda.",
  icon: "📦"
}, {
  title: "Call Center Integrado",
  description: "Ferramenta 100% nativa do OneHealth, sem necessidade de integrações. Agilize o atendimento ao cliente e melhore a experiência.",
  icon: "📞"
}, {
  title: "Sistema 100% Online (SaaS)",
  description: "Acesse de qualquer lugar, sem custos de infraestrutura. Atualizações automáticas e suporte contínuo inclusos.",
  icon: "☁️"
}, {
  title: "Dashboard Financeiro",
  description: "Acompanhe em tempo real o desempenho financeiro da sua farmácia com relatórios personalizáveis.",
  icon: "📊"
}, {
  title: "Atendimento Personalizado",
  description: "Mantenha histórico completo de clientes para oferecer atendimento personalizado e fidelizar pacientes.",
  icon: "👤"
}, {
  title: "Gestão de Redes Franqueadas",
  description: "Controle completo da operação de cada unidade franqueada com padronização de processos e análise comparativa.",
  icon: "🏢"
}, {
  title: "Gestão de Processos RDC",
  description: "Conformidade garantida com todas as regulamentações ANVISA para farmácias de manipulação.",
  icon: "✓"
}];
const FeaturesSection = () => {
  return <section id="features" className="bg-white py-[2px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold mb-4 py-[32px] my-0">
            Funcionalidades <span className="text-gradient">Inovadoras</span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            O OneHealth reúne todas as ferramentas que sua farmácia de manipulação precisa para otimizar operações, 
            garantir conformidade regulatória e expandir seus negócios.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => <Card key={index} className="feature-card hover:border-onehealth-red hover:-translate-y-1">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>)}
        </div>
        
        <div className="mt-12 bg-gray-50 rounded-xl p-8 border border-gray-100 py-[50px]">
          <h3 className="text-4xl font-bold mb-6 text-center">
            <span className="text-gradient py-[34px] my-0">Única Ferramenta pensada para Redes Franqueadoras</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-lg font-bold mb-3 text-onehealth-red">Gestão Centralizada</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-onehealth-red mr-2">✓</span>
                  <span>Controle de todas as unidades em um único painel de gestão</span>
                </li>
                <li className="flex items-start">
                  <span className="text-onehealth-red mr-2">✓</span>
                  <span>Análise comparativa de performance entre franquias</span>
                </li>
                <li className="flex items-start">
                  <span className="text-onehealth-red mr-2">✓</span>
                  <span>Gestão de metas e indicadores por unidade</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-lg font-bold mb-3 text-onehealth-red">Padronização de Processos</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-onehealth-red mr-2">✓</span>
                  <span>Fórmulas e processos padronizados em todas as unidades</span>
                </li>
                <li className="flex items-start">
                  <span className="text-onehealth-red mr-2">✓</span>
                  <span>Controle de qualidade garantido em todas as franquias</span>
                </li>
                <li className="flex items-start">
                  <span className="text-onehealth-red mr-2">✓</span>
                  <span>Replicação automática de boas práticas para toda a rede</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          
        </div>
      </div>
    </section>;
};
export default FeaturesSection;