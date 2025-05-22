
import React from 'react';
import { ChartContainer } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const benefits = [
  {
    id: 1,
    title: "Aumento de Produtividade",
    description: "Otimize processos operacionais e reduza o tempo gasto em tarefas administrativas em até 65%.",
    metric: "+65%"
  },
  {
    id: 2,
    title: "Redução de Custos",
    description: "Elimine gastos com servidores físicos e suporte técnico presencial, reduzindo drasticamente os custos de infraestrutura de TI.",
    metric: "-30%"
  },
  {
    id: 3,
    title: "Controle de Qualidade",
    description: "Garanta a conformidade com normas regulatórias e eleve o padrão de qualidade dos seus produtos.",
    metric: "100%"
  },
  {
    id: 4,
    title: "Satisfação do Cliente",
    description: "Ofereça atendimento personalizado e ágil, aumentando a satisfação e fidelização dos seus clientes.",
    metric: "+85%"
  }
];

const roiData = [
  { month: 'Mês 1', economia: 10, produtividade: 15 },
  { month: 'Mês 2', economia: 20, produtividade: 25 },
  { month: 'Mês 3', economia: 30, produtividade: 35 },
  { month: 'Mês 4', economia: 40, produtividade: 45 },
  { month: 'Mês 5', economia: 50, produtividade: 60 },
  { month: 'Mês 6', economia: 60, produtividade: 75 },
];

const chartConfig = {
  economia: {
    label: 'Economia',
    color: '#960315' // onehealth-red
  },
  produtividade: {
    label: 'Produtividade',
    color: '#56B589' // green from gradient
  }
};

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-onehealth-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Benefícios <span className="text-gradient">Comprovados</span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            O OneHealth transforma a maneira como sua farmácia de manipulação opera, gerando resultados mensuráveis e impactando diretamente a sua lucratividade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map(benefit => (
            <div key={benefit.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="mb-4 relative z-20">
                <span className="text-4xl font-bold text-onehealth-blue">{benefit.metric}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 relative z-20">{benefit.title}</h3>
              <p className="text-gray-600 relative z-20">{benefit.description}</p>
              
              <div 
                className="absolute top-0 right-0 w-24 h-24 bg-onehealth-blue opacity-5 rounded-bl-full z-10"
              ></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">ROI Garantido</h3>
              <p className="text-gray-700 mb-6">
                Nossos clientes relatam retorno sobre o investimento em menos de 6 meses após implementação do OneHealth, 
                com economia média de 30% nos custos operacionais e aumento de 25% na margem de lucro.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-onehealth-gray rounded-full px-4 py-2 text-sm font-medium">
                  Economia Operacional
                </div>
                <div className="bg-onehealth-gray rounded-full px-4 py-2 text-sm font-medium">
                  Redução de Desperdícios
                </div>
                <div className="bg-onehealth-gray rounded-full px-4 py-2 text-sm font-medium">
                  Aumento de Vendas
                </div>
                <div className="bg-onehealth-gray rounded-full px-4 py-2 text-sm font-medium">
                  Fidelização de Clientes
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <ChartContainer 
                config={chartConfig} 
                className="h-64 w-full"
              >
                <BarChart data={roiData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="economia" fill="#960315" name="Economia" />
                  <Bar dataKey="produtividade" fill="#56B589" name="Produtividade" />
                </BarChart>
              </ChartContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
