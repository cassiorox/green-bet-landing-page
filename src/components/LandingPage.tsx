
import React from 'react';
import { Button } from "./ui/button";
import { Shield, ShieldCheck, Users } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-700">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Apostas esportivas com especialistas
          </h1>
          <p className="text-xl text-green-100 mb-8">
            Junte-se à comunidade líder em palpites certeiros
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative w-full max-w-4xl mx-auto mb-12">
          <img
            src="/lovable-uploads/f6cbf8a6-efb6-4f56-9f88-f3134e015a3c.png"
            alt="Jogadores profissionais"
            className="w-full object-cover rounded-lg shadow-2xl"
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
          <Button
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg"
            onClick={() => window.open('https://whatsapp.com', '_blank')}
          >
            Entrar no Grupo do WhatsApp
          </Button>
          <Button
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg"
            onClick={() => window.open('https://telegram.org', '_blank')}
          >
            Entrar no Grupo do Telegram
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <div className="flex flex-col items-center text-center text-white p-6 rounded-lg bg-green-800/50">
            <Shield className="w-12 h-12 mb-4 text-green-400" />
            <h3 className="text-xl font-semibold mb-2">Apostas seguras</h3>
            <p className="text-green-100">Análises profissionais</p>
          </div>
          <div className="flex flex-col items-center text-center text-white p-6 rounded-lg bg-green-800/50">
            <ShieldCheck className="w-12 h-12 mb-4 text-green-400" />
            <h3 className="text-xl font-semibold mb-2">Suporte das 07h ás 22h</h3>
            <p className="text-green-100">Atendimento humano personalizado</p>
          </div>
          <div className="flex flex-col items-center text-center text-white p-6 rounded-lg bg-green-800/50">
            <Users className="w-12 h-12 mb-4 text-green-400" />
            <h3 className="text-xl font-semibold mb-2">Comunidade VIP</h3>
            <p className="text-green-100">Milhares de apostadores de sucesso</p>
          </div>
        </div>

        {/* How it Works */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Como Funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Entre no Grupo",
                description: "Escolha seu canal preferido: WhatsApp ou Telegram"
              },
              {
                step: "2",
                title: "Receba Palpites",
                description: "Análises diárias dos melhores jogos"
              },
              {
                step: "3",
                title: "Aposte com Segurança",
                description: "Siga nossas análises"
              }
            ].map((item, index) => (
              <div key={index} className="text-center text-white">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-green-100">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-green-100 pt-8 border-t border-green-700">
          <div className="flex justify-center gap-4 mb-4">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-sm">18+</span>
            <p>Aposte com responsabilidade</p>
          </div>
          <p className="text-sm">© 2025 DP Sports. Todos os direitos reservados.</p>
        </footer>
      </section>
    </div>
  );
};

export default LandingPage;
