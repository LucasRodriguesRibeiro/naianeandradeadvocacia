/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scale, 
  UserCheck, 
  Briefcase, 
  ShieldCheck, 
  Clock, 
  MessageCircle, 
  ArrowRight, 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Star,
  CheckCircle2,
  Linkedin,
  Instagram,
  Facebook
} from 'lucide-react';

// --- Components ---

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/5574998126225" // Replace with real number
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ y: -5 }}
  >
    <MessageCircle className="w-8 h-8" />
    <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-navy-900 px-3 py-1 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
      Fale conosco agora
    </span>
  </motion.a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Áreas', href: '#areas' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-navy-900/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-4 lg:py-6'}`}>
      <div className="max-w-7xl mx-auto px-10 lg:px-12 flex justify-between items-center text-white">
        <a href="#home" className="flex items-center">
          <img src="/logo-layla.png" alt="Layla Marreta" className="max-h-16 md:max-h-20 lg:max-h-24 w-auto object-contain" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-gold-500 transition-colors uppercase tracking-widest">
              {link.name}
            </a>
          ))}
          <a href="https://wa.me/5574998126225" className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 rounded-sm text-sm font-bold transition-all transform hover:translate-y-[-2px]">
            CONTATO
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-900 border-t border-white/10"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-white/80 hover:text-gold-500">
                  {link.name}
                </a>
              ))}
              <a href="https://wa.me/5574998126225" className="bg-gold-500 text-center py-3 rounded-sm font-bold uppercase">
                Falar com a Drª Layla
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-luxury-gradient text-white">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-gold-500)_1px,_transparent_1px)] bg-[size:40px_40px]"></div>
    </div>

    <div className="max-w-4xl mx-auto px-10 lg:px-12 w-full flex flex-col items-center text-center z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center w-full"
      >
        <span className="inline-block text-gold-500 font-bold tracking-widest text-xs md:text-sm uppercase mb-4 lg:mb-6 border-b border-gold-500/30 pb-2">
          Advocacia Personalizada & Ética
        </span>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 leading-tight tracking-tight">
          Sua Defesa em Boas Mãos <br className="hidden md:block" /> com <span className="italic font-normal text-gold-400">Excelência Jurídica</span>
        </h1>
        <p className="text-base md:text-xl text-white/70 mb-8 lg:mb-10 max-w-2xl leading-relaxed">
          Atendimento humanizado e especializado em Direito Civil, Previdenciário e Trabalhista. Proteja seus direitos com quem entende.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 justify-center w-full sm:w-auto">
          <a href="https://wa.me/5574998126225" className="flex items-center justify-center w-full sm:w-auto gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-6 py-4 lg:px-8 lg:py-4 rounded-sm transition-all transform hover:scale-105 shadow-xl text-base lg:text-lg">
            Falar com a Drª Layla <ArrowRight className="w-5 h-5" />
          </a>
          <div className="flex items-center gap-3 text-white/60">
            <ShieldCheck className="w-6 h-6 text-gold-500" />
            <span className="text-sm font-medium">OAB/BA 80822</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Areas = () => {
  const areas = [
    {
      title: 'Direito Civil',
      icon: <Scale className="w-8 h-8" />,
      desc: 'Soluções em contratos, família, sucessões e responsabilidade civil.'
    },
    {
      title: 'Direito Previdenciário',
      icon: <UserCheck className="w-8 h-8" />,
      desc: 'Auxílio completo para aposentadorias, auxílios e benefícios do INSS.'
    },
    {
      title: 'Direito Trabalhista',
      icon: <Briefcase className="w-8 h-8" />,
      desc: 'Defesa vigorosa dos direitos do trabalhador e orientação consultiva.'
    }
  ];

  return (
    <section id="areas" className="py-16 lg:py-32 bg-stone-100">
      <div className="max-w-7xl mx-auto px-10 lg:px-12">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 lg:mb-6">Áreas de Atuação</h2>
          <div className="w-16 md:w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {areas.map((area, idx) => (
            <motion.div
              key={area.title}
              whileHover={{ y: -10 }}
              className="bg-white p-8 lg:p-12 rounded-2xl shadow-md hover:shadow-2xl transition-all border border-gray-100 group flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="mb-6 lg:mb-8 text-gold-500 bg-gold-500/10 w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-2xl group-hover:bg-gold-500 group-hover:text-white transition-colors duration-500">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">{area.title}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="sobre" className="py-16 lg:py-32 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-10 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
      <div className="relative max-w-md mx-auto lg:mx-0 w-full">
        <div className="relative z-10">
          <img 
            src="/advogadalayla.jfif" 
            alt="Dra. Layla Marreta" 
            className="rounded-2xl shadow-2xl w-full object-cover object-top aspect-[4/5]"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div>
        <span className="text-gold-500 font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block">Sobre Dra. Layla Marreta</span>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8 leading-tight tracking-tight">Compromisso Ético e <span className="italic font-normal text-gray-400">Resultados Sérios</span></h2>
        <div className="space-y-4 lg:space-y-6 text-gray-600 text-sm md:text-lg leading-relaxed">
          <p>
            Com uma trajetória pautada pela ética e transparência, Layla Marreta (OAB/BA 80822) fundou seu escritório com a missão de oferecer uma advocacia acessível, humanizada e técnica.
          </p>
          <p>
            Especialista em Direito Civil e Previdenciário, acredita que cada caso é único e merece uma estratégia personalizada para garantir a melhor defesa dos interesses de seus clientes.
          </p>
          <ul className="space-y-3 pt-4">
            {['Atendimento personalizado', 'Transparência em cada etapa', 'Foco na solução de conflitos'].map((item) => (
              <li key={item} className="flex items-center gap-3 font-medium text-navy-900">
                <CheckCircle2 className="w-5 h-5 text-gold-500" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const reviews = [
    { name: 'Ana Silva', text: 'Atendimento impecável! Resolveu meu problema previdenciário com muita competência.', rating: 5 },
    { name: 'Carlos Santos', text: 'A Dra. Layla é extremamente atenciosa e esclareceu todas as minhas dúvidas trabalhistas.', rating: 5 },
    { name: 'Maria Souza', text: 'Profissional de altíssimo nível. Recomendo para quem busca segurança jurídica.', rating: 5 },
  ];

  return (
    <section className="py-16 lg:py-32 bg-luxury-gradient text-white">
      <div className="max-w-7xl mx-auto px-10 lg:px-12">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 lg:mb-6">O que dizem os clientes</h2>
          <div className="w-16 md:w-24 h-1 bg-gold-500 mx-auto rounded-full mb-6 lg:mb-8"></div>
          <div className="flex justify-center gap-1 text-gold-500">
            <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
            <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
            <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
            <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
            <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
            <span className="ml-2 text-white/80 font-medium text-sm md:text-base">5.0 no Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/5 border border-white/10 p-8 lg:p-10 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-colors"
            >
              <div className="flex gap-1 text-gold-500 mb-4">
                {[...Array(rev.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-white/80 italic mb-6">"{rev.text}"</p>
              <p className="font-bold border-t border-white/10 pt-4">— {rev.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const steps = [
    { title: 'Atendimento Rápido', icon: <Clock className="w-10 h-10" />, desc: 'Não deixe seu problema jurídico esperar. Resposta ágil.' },
    { title: 'Via WhatsApp', icon: <MessageCircle className="w-10 h-10" />, desc: 'Consultoria moderna e acessível no seu bolso.' },
    { title: 'Transparência', icon: <ShieldCheck className="w-10 h-10" />, desc: 'Relatórios claros e honestidade sobre as chances do caso.' },
    { title: 'Humanizado', icon: <UserCheck className="w-10 h-10" />, desc: 'Você fala diretamente com a advogada, sem intermediários.' },
  ];

  return (
    <section id="diferenciais" className="py-16 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-10 lg:px-12">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 lg:mb-6">Por que nos escolher?</h2>
          <div className="w-16 md:w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.title} className="text-center group">
              <div className="mx-auto w-24 h-24 bg-stone-100 rounded-2xl flex items-center justify-center text-navy-900 group-hover:bg-gold-500 group-hover:text-white group-hover:-rotate-3 transition-all duration-300 mb-8 shadow-sm group-hover:shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-4">{step.title}</h3>
              <p className="text-sm md:text-base text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  const faqs = [
    { q: 'Como funciona o primeiro atendimento?', a: 'O primeiro contato é feito via WhatsApp ou presencial, onde analisamos os detalhes do seu caso para verificar a viabilidade jurídica.' },
    { q: 'Vocês atendem em todo o Brasil?', a: 'Sim, através do processo digital e reuniões online, podemos atuar em território nacional, especialmente em causas previdenciárias e cíveis.' },
    { q: 'Quais documentos preciso para aposentação?', a: 'Geralmente RG, CPF, Carteira de Trabalho e o CNIS. Mas cada benefício pode exigir documentos específicos que orientamos na consulta.' },
    { q: 'Como são cobrados os honorários?', a: 'Seguimos rigorosamente a tabela da OAB. A forma de cobrança (inicial ou ao êxito) depende da natureza da causa.' },
  ];

  return (
    <section id="faq" className="py-16 lg:py-32 bg-stone-100">
      <div className="max-w-3xl mx-auto px-10 lg:px-12">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 lg:mb-6">Perguntas Frequentes</h2>
          <div className="w-16 md:w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm">
              <button 
                onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                className="w-full text-left p-6 flex justify-between items-center font-bold text-navy-900"
              >
                {f.q}
                <ChevronDown className={`w-5 h-5 transition-transform ${activeIdx === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 border-t border-gray-50 bg-gray-50/50">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="py-20 lg:py-40 bg-luxury-gradient text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-500/5 -skew-x-12 transform translate-x-1/2"></div>
    <div className="max-w-7xl mx-auto px-10 lg:px-12 text-center relative z-10">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 lg:mb-10 leading-tight tracking-tight">Pronto para Recuperar <br/>seus <span className="text-gold-500 italic font-normal">Direitos?</span></h2>
      <p className="text-base md:text-xl text-white/70 mb-8 lg:mb-12 max-w-2xl mx-auto leading-relaxed">
        Não espere o tempo passar. Entre em contato agora para uma análise exclusiva do seu caso com total sigilo e profissionalismo.
      </p>
      <a href="https://wa.me/5574998126225" className="inline-flex items-center gap-3 bg-white text-navy-900 font-bold px-8 py-4 lg:px-10 lg:py-5 rounded-full hover:bg-gold-500 hover:text-white transition-all transform hover:scale-105 shadow-2xl text-sm lg:text-base w-full sm:w-auto justify-center">
        <Phone className="w-5 h-5" /> Iniciar Consultoria via WhatsApp
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-navy-900 border-t border-white/10 text-white pt-16 pb-8 lg:pt-24 lg:pb-12">
    <div className="max-w-7xl mx-auto px-10 lg:px-12 grid md:grid-cols-4 gap-12 mb-12 lg:gap-16 lg:mb-20 items-start">
      <div className="col-span-2">
        <a href="#" className="inline-block mb-6">
          <img src="/logo-layla.png" alt="Layla Marreta" className="w-32 md:w-40 lg:w-48 h-auto object-contain" />
        </a>
        <p className="text-white/60 max-w-sm mb-6">
          Defendendo seus direitos com determinação e inteligência jurídica. Atendimento especializado focado na resolução ética de conflitos.
        </p>
        <div className="flex gap-4">
          <a href="https://www.instagram.com/laylamarreta.adv/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-all">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-6 text-gold-500 uppercase tracking-widest">Contato</h4>
        <ul className="space-y-4 text-white/60">
          <li className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-gold-500 shrink-0" />
            <span>Rua mundo novo, 168, centro, lapão - bahia</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-gold-500 shrink-0" />
            <span>(74) 99812-6225</span>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-gold-500 shrink-0" />
            <span>laylamarreta.advogada@gmail.com</span>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-6 text-gold-500 uppercase tracking-widest">Links</h4>
        <ul className="space-y-4 text-white/60">
          <li><a href="#home" className="hover:text-gold-400 transition-colors">Início</a></li>
          <li><a href="#areas" className="hover:text-gold-400 transition-colors">Áreas de Atuação</a></li>
          <li><a href="#sobre" className="hover:text-gold-400 transition-colors">Sobre Nós</a></li>
          <li><a href="#faq" className="hover:text-gold-400 transition-colors">Dúvidas Comuns</a></li>
        </ul>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-10 lg:px-12 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
      <p>© {new Date().getFullYear()} Layla Marreta Advocacia. OAB/BA 80822. Todos os direitos reservados.</p>
      <div className="flex gap-8 mt-4 md:mt-0">
        <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
        <a href="#" className="hover:text-white transition-colors">Privacidade</a>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold-500 selection:text-white">
      <Navbar />
      <Hero />
      <Areas />
      <About />
      <Testimonials />
      <WhyUs />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
