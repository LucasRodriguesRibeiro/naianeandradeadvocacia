/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
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
  Landmark,
  Users,
  HeartHandshake,
  CheckCircle2,
  Star,
  Instagram,
  MapPin
} from 'lucide-react';

// --- Components ---

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/5574999866142"
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

const Brand = ({ compact = false }: { compact?: boolean }) => (
  <img
    src="/logo-naiane-andrade-transparente.png"
    alt="Naiane Andrade — Advocacia & Consultoria Jurídica"
    className={`${compact ? 'w-36 md:w-44 lg:w-52' : 'w-48 md:w-56'} h-auto object-contain`}
  />
);

const Reveal = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: {
  key?: React.Key;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}) => {
  const reduceMotion = useReducedMotion();
  const offset = direction === 'left' ? { x: -36, y: 0 } : direction === 'right' ? { x: 36, y: 0 } : { x: 0, y: 36 };

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Áreas', href: '#areas' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-40 bg-transparent py-4 lg:py-6">
      <div className="max-w-7xl mx-auto px-10 lg:px-12 flex justify-between items-center text-white">
        <a href="#home" className="flex items-center">
          <Brand compact />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-gold-500 transition-colors uppercase tracking-widest">
              {link.name}
            </a>
          ))}
          <a href="https://wa.me/5574999866142" target="_blank" rel="noopener noreferrer" className="bg-gold-500 hover:bg-white text-navy-900 px-6 py-2 rounded-sm text-sm font-bold transition-all transform hover:translate-y-[-2px]">
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
              <a href="https://wa.me/5574999866142" target="_blank" rel="noopener noreferrer" className="bg-gold-500 text-navy-900 text-center py-3 rounded-sm font-bold uppercase">
                Falar com a Dra. Naiane
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
          Advogada de Direito de Família e Inventário em Irecê-BA. Atendimento jurídico on-line, humanizado e personalizado.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 justify-center w-full sm:w-auto">
          <a href="https://wa.me/5574999866142" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full sm:w-auto gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold px-6 py-4 lg:px-8 lg:py-4 rounded-sm transition-all transform hover:scale-105 shadow-xl text-base lg:text-lg">
            Falar com a Dra. Naiane <ArrowRight className="w-5 h-5" />
          </a>
          <div className="flex items-center gap-3 text-white/60">
            <ShieldCheck className="w-6 h-6 text-gold-500" />
            <span className="text-sm font-medium">Atendimento on-line</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Areas = () => {
  const areas = [
    {
      title: 'Inventários',
      icon: <Scale className="w-8 h-8" />,
      desc: 'Atuação especializada em inventários e orientação em todas as etapas da sucessão.'
    },
    {
      title: 'Guarda e Pensão',
      icon: <Users className="w-8 h-8" />,
      desc: 'Orientação jurídica em questões de guarda, convivência e pensão alimentícia.'
    },
    {
      title: 'Divórcio',
      icon: <HeartHandshake className="w-8 h-8" />,
      desc: 'Acompanhamento cuidadoso em divórcios consensuais e litigiosos.'
    },
    {
      title: 'Direito do Consumidor',
      icon: <Briefcase className="w-8 h-8" />,
      desc: 'Defesa do consumidor e análise de financiamentos com juros abusivos.'
    },
    {
      title: 'Aposentadoria',
      icon: <Landmark className="w-8 h-8" />,
      desc: 'Orientação e acompanhamento de pedidos de aposentadoria.'
    },
    {
      title: 'Direito Criminal',
      icon: <ShieldCheck className="w-8 h-8" />,
      desc: 'Atendimento de casos criminais sujeito à análise antecipada.'
    }
  ];

  return (
    <section id="areas" className="py-16 lg:py-32 bg-stone-100">
      <div className="max-w-7xl mx-auto px-10 lg:px-12">
        <Reveal className="text-center mb-12 lg:mb-20">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 lg:mb-6">Áreas de Atuação</h2>
          <div className="w-16 md:w-24 h-1 bg-navy-800 mx-auto rounded-full"></div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {areas.map((area, idx) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 lg:p-12 rounded-2xl shadow-md hover:shadow-2xl transition-all border border-gray-100 group flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="mb-6 lg:mb-8 text-navy-800 bg-navy-800/10 w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-2xl group-hover:bg-navy-800 group-hover:text-white transition-colors duration-500">
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
      <Reveal direction="left" className="relative max-w-md mx-auto lg:mx-0 w-full">
        <div className="relative z-10">
          <img
            src="/naiane-andrade-advogada.jpeg"
            alt="Dra. Naiane Andrade"
            className="rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover object-top border border-navy-900/10"
          />
        </div>
      </Reveal>

      <Reveal direction="right" delay={0.12}>
        <span className="text-navy-800 font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block">Sobre Dra. Naiane Andrade</span>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8 leading-tight tracking-tight">Compromisso Ético e <span className="italic font-normal text-gray-400">Resultados Sérios</span></h2>
        <div className="space-y-4 lg:space-y-6 text-gray-600 text-sm md:text-lg leading-relaxed">
          <p>
            Naiane Andrade oferece advocacia acessível, humanizada e técnica em Irecê-BA, com atendimento on-line e atenção individual a cada cliente.
          </p>
          <p>
            Especialista em Direito de Família, com foco em inventários, também atua em demandas de consumidor, guarda e pensão, divórcio, aposentadoria e análise de financiamentos com juros abusivos. Casos criminais são atendidos mediante análise antecipada.
          </p>
          <ul className="space-y-3 pt-4">
            {['Atendimento personalizado', 'Transparência em cada etapa', 'Foco na solução de conflitos'].map((item) => (
              <li key={item} className="flex items-center gap-3 font-medium text-navy-900">
                <CheckCircle2 className="w-5 h-5 text-navy-800" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
);

const Testimonials = () => {
  const reviews = [
    {
      name: 'Valéria Aparecida Melim',
      time: 'um ano atrás',
      text: 'Excelente e competente advogada, cuidou por anos da ação previdenciária. Ganhamos todas as causas. Confiança é tudo.',
      response: 'Foi um privilégio poder acompanhar sua trajetória e alcançar resultados tão importantes juntas. Conte sempre comigo!',
    },
    {
      name: 'Nene Santos',
      time: 'um ano atrás',
      text: 'Faz sempre um bom trabalho e uma profissional de excelência. 👏👏 indico ela sempre.',
      response: 'Muito obrigada. Fico feliz em ter ajudado',
    },
    {
      name: 'evertonsimoes',
      time: '2 anos atrás',
      text: 'Excelente advogada',
      response: 'Obrigada, que bom que consegui te ajudar.',
    },
  ];

  return (
    <section className="py-16 lg:py-32 bg-luxury-gradient text-white">
      <div className="max-w-7xl mx-auto px-10 lg:px-12">
        <Reveal className="text-center mb-12 lg:mb-20">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 lg:mb-6">O que dizem os clientes</h2>
          <div className="w-16 md:w-24 h-1 bg-gold-500 mx-auto rounded-full mb-6 lg:mb-8"></div>
          <p className="text-white/70 max-w-2xl mx-auto">Avaliações publicadas por clientes no Google</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 lg:p-10 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-full bg-white/10 border border-white/15 flex items-center justify-center font-bold text-gold-500">
                  {rev.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-bold">{rev.name}</p>
                  <p className="text-xs text-white/50">{rev.time}</p>
                </div>
              </div>
              <div className="flex gap-1 text-[#fbbc04] mb-4" aria-label="5 de 5 estrelas">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-white/85 leading-relaxed mb-6">“{rev.text}”</p>
              <div className="border-t border-white/10 pt-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gold-500 mb-2">Resposta de Naiane Andrade</p>
                <p className="text-sm text-white/65 leading-relaxed">{rev.response}</p>
              </div>
              <p className="text-xs text-white/35 mt-6">Avaliação do Google</p>
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
    { title: 'Atendimento on-line', icon: <MessageCircle className="w-10 h-10" />, desc: 'Consultoria moderna e acessível onde você estiver.' },
    { title: 'Transparência', icon: <ShieldCheck className="w-10 h-10" />, desc: 'Relatórios claros e honestidade sobre as chances do caso.' },
    { title: 'Humanizado', icon: <UserCheck className="w-10 h-10" />, desc: 'Você fala diretamente com a advogada, sem intermediários.' },
  ];

  return (
    <section id="diferenciais" className="py-16 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-10 lg:px-12">
        <Reveal className="text-center mb-12 lg:mb-20">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 lg:mb-6">Por que nos escolher?</h2>
          <div className="w-16 md:w-24 h-1 bg-navy-800 mx-auto rounded-full"></div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <Reveal key={step.title} delay={idx * 0.09} className="text-center group">
              <div className="mx-auto w-24 h-24 bg-stone-100 rounded-2xl flex items-center justify-center text-navy-900 group-hover:bg-navy-800 group-hover:text-white group-hover:-rotate-3 transition-all duration-300 mb-8 shadow-sm group-hover:shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-4">{step.title}</h3>
              <p className="text-sm md:text-base text-gray-600">{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  const faqs = [
    { q: 'Como funciona o primeiro atendimento?', a: 'O primeiro contato é feito pelo WhatsApp. O caso é analisado e o atendimento segue de forma on-line, com orientação sobre os próximos passos.' },
    { q: 'O atendimento é presencial?', a: 'Não. O escritório realiza atendimento on-line, oferecendo praticidade e segurança aos clientes.' },
    { q: 'Quais casos são atendidos?', a: 'Inventários, guarda e pensão, divórcio, consumidor, aposentadoria e financiamentos com juros abusivos. Casos criminais dependem de análise antecipada.' },
    { q: 'Como são cobrados os honorários?', a: 'Seguimos rigorosamente a tabela da OAB. A forma de cobrança (inicial ou ao êxito) depende da natureza da causa.' },
  ];

  return (
    <section id="faq" className="py-16 lg:py-32 bg-stone-100">
      <div className="max-w-3xl mx-auto px-10 lg:px-12">
        <Reveal className="text-center mb-12 lg:mb-20">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4 lg:mb-6">Perguntas Frequentes</h2>
          <div className="w-16 md:w-24 h-1 bg-navy-800 mx-auto rounded-full"></div>
        </Reveal>
        
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={i} delay={i * 0.07} className="bg-white rounded-lg shadow-sm">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="py-20 lg:py-40 bg-luxury-gradient text-white relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-500/5 -skew-x-12 transform translate-x-1/2"></div>
    <Reveal className="max-w-7xl mx-auto px-10 lg:px-12 text-center relative z-10">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 lg:mb-10 leading-tight tracking-tight">Pronto para Recuperar <br/>seus <span className="text-gold-500 italic font-normal">Direitos?</span></h2>
      <p className="text-base md:text-xl text-white/70 mb-8 lg:mb-12 max-w-2xl mx-auto leading-relaxed">
        Não espere o tempo passar. Entre em contato agora para uma análise exclusiva do seu caso com total sigilo e profissionalismo.
      </p>
      <a href="https://wa.me/5574999866142" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white text-navy-900 font-bold px-8 py-4 lg:px-10 lg:py-5 rounded-full hover:bg-gold-500 transition-all transform hover:scale-105 shadow-2xl text-sm lg:text-base w-full sm:w-auto justify-center">
        <Phone className="w-5 h-5" /> Iniciar Consultoria via WhatsApp
      </a>
    </Reveal>
  </section>
);

const Footer = () => (
  <footer className="bg-navy-900 border-t border-white/10 text-white pt-16 pb-8 lg:pt-24 lg:pb-12">
    <div className="max-w-7xl mx-auto px-10 lg:px-12 grid md:grid-cols-4 gap-12 mb-12 lg:gap-16 lg:mb-20 items-start">
      <div className="col-span-2">
        <a href="#" className="inline-block mb-6">
          <Brand />
        </a>
        <p className="text-white/60 max-w-sm mb-6">
          Defendendo seus direitos com determinação e inteligência jurídica. Atendimento especializado focado na resolução ética de conflitos.
        </p>
      </div>

      <div>
        <h4 className="text-lg font-bold mb-6 text-gold-500 uppercase tracking-widest">Contato</h4>
        <ul className="space-y-4 text-white/60">
          <li className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-gold-500 shrink-0" />
            <a href="https://wa.me/5574999866142" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">(74) 99986-6142</a>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-gold-500 shrink-0" />
            <a href="mailto:adv.naianeandrade@gmail.com" className="hover:text-gold-400 transition-colors break-all">adv.naianeandrade@gmail.com</a>
          </li>
          <li className="flex items-center gap-3">
            <MessageCircle className="w-5 h-5 text-gold-500 shrink-0" />
            <span>Atendimento on-line</span>
          </li>
          <li className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
            <a href="https://www.google.com/maps?cid=10131627341939219299" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
              Icó, Novo Horizonte<br />Irecê-BA, 44865-235
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Instagram className="w-5 h-5 text-gold-500 shrink-0" />
            <a href="https://www.instagram.com/naianeandrade.advv/" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">@naianeandrade.advv</a>
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
      <p>© {new Date().getFullYear()} Naiane Andrade Advocacia. Todos os direitos reservados.</p>
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
    <div className="min-h-screen selection:bg-gold-500 selection:text-navy-900">
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
