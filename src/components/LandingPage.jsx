import { useState } from 'react'
import {
  MessageCircle,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Gift,
  Users,
  Palette,
  Handshake,
  ShieldCheck,
  Package,
  Rocket,
  Mail,
  Phone
} from 'lucide-react'

/* ============================================
   TOP BAR - Promotional Banner
   ============================================ */
function TopBar() {
  return (
    <div className="w-full bg-[#1d1d1f] text-[#f5f5f7]">
      <div className="w-full max-w-[1200px] mx-auto px-6 py-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
        <p className="text-xs sm:text-sm font-normal text-center">
          Garantia total de satisfacao. <span className="text-white font-medium">90 dias</span> para trocas ou devolucao.
        </p>
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#2997ff] hover:underline transition-all"
        >
          Fale com um especialista
          <ChevronRight size={14} className="mt-0.5" />
        </a>
      </div>
    </div>
  )
}

/* ============================================
   HERO SECTION - Main Visual
   ============================================ */
function HeroSection() {
  return (
    <section className="w-full bg-[#fbfbfd]">
      <div className="w-full max-w-[1200px] mx-auto px-6 pt-8 pb-24 lg:pt-12 lg:pb-40">
        {/* Hero Text */}
        <div className="w-full flex flex-col items-center text-center mb-10 lg:mb-14">
          <p className="text-[#bf4800] text-sm font-medium tracking-wide uppercase mb-4">
            Novidade
          </p>
          <h2 className="text-[44px] sm:text-[64px] lg:text-[96px] font-semibold text-[#1d1d1f] leading-[1.05] tracking-[-0.015em] mb-4">
            Setups Box
          </h2>
          <p className="text-[24px] sm:text-[32px] lg:text-[40px] font-medium text-[#1d1d1f] leading-[1.1] tracking-[-0.01em] mb-6">
            Abra. Surpreenda-se. Eleve seu setup.
          </p>
          <p className="text-[18px] sm:text-[21px] text-[#86868b] leading-relaxed max-w-2xl mb-8">
            Itens premium selecionados para transformar seu espaco de trabalho.
            Cada caixa e uma experiencia unica.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center h-[52px] px-8 bg-[#0071e3] hover:bg-[#0077ed] text-white text-[17px] font-medium rounded-full transition-all duration-300 shadow-lg shadow-blue-500/20"
            >
              Escolher minha Box
            </a>
            <a
              href="#benefits"
              className="inline-flex items-center justify-center h-[52px] px-8 text-[#0071e3] text-[17px] font-medium hover:underline transition-all duration-300"
            >
              Saiba mais <ChevronRight size={20} className="ml-1" />
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-3xl">
            <img
              src="/hero-image.png"
              alt="Setup Box - Caixa premium com perifericos"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================
   PRICING SECTION - Product Cards
   ============================================ */
function PricingCard({ title, price, description, color, isPopular }) {
  const gradients = {
    bronze: 'from-[#cd7f32] via-[#b87333] to-[#8b5a2b]',
    silver: 'from-[#c0c0c0] via-[#a8a8a8] to-[#808080]',
    gold: 'from-[#ffd700] via-[#ffcc00] to-[#daa520]'
  }

  return (
    <div
      className={`group relative bg-white rounded-[24px] p-8 lg:p-10 transition-all duration-500 hover:scale-[1.02] ${
        isPopular
          ? 'shadow-[0_12px_60px_rgba(0,0,0,0.15)] ring-2 ring-[#0071e3]'
          : 'shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_60px_rgba(0,0,0,0.15)]'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center h-8 px-5 bg-[#0071e3] text-white text-[12px] font-semibold uppercase tracking-wider rounded-full shadow-lg">
            Mais vendida
          </span>
        </div>
      )}

      <div className="flex flex-col items-center">
        {/* Icon */}
        <div className={`w-32 h-32 lg:w-36 lg:h-36 rounded-[24px] bg-gradient-to-br ${gradients[color]} flex items-center justify-center shadow-xl transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-500 mb-10`}>
          <Gift size={52} className="text-white/90" strokeWidth={1.5} />
        </div>

        {/* Content */}
        <h3 className="text-[24px] lg:text-[28px] font-semibold text-[#1d1d1f] mb-2 text-center">{title}</h3>
        <p className="text-[15px] text-[#86868b] mb-8 text-center">{description}</p>

        <div className="mb-10 text-center">
          <span className="text-[12px] text-[#86868b] uppercase tracking-wider">A partir de</span>
          <p className="text-[48px] lg:text-[56px] font-bold text-[#1d1d1f] leading-tight tracking-tight">
            R${price}
          </p>
        </div>

        <button className={`w-full h-[56px] rounded-full text-[17px] font-semibold transition-all duration-300 ${
          isPopular
            ? 'bg-[#0071e3] hover:bg-[#0077ed] text-white shadow-lg shadow-blue-500/25'
            : 'bg-[#f5f5f7] hover:bg-[#e8e8ed] text-[#1d1d1f]'
        }`}>
          Comprar
        </button>
      </div>
    </div>
  )
}

function PricingSection() {
  const plans = [
    { title: 'Box Bronze', price: '147', description: 'Ate 2 produtos', color: 'bronze' },
    { title: 'Box Prata', price: '347', description: 'Ate 4 produtos', color: 'silver', isPopular: true },
    { title: 'Box Ouro', price: '547', description: 'Ate 6 produtos', color: 'gold' }
  ]

  return (
    <section id="pricing" className="w-full bg-[#f5f5f7]">
      <div className="w-full max-w-[1200px] mx-auto px-6 py-24 lg:py-40">
        {/* Section Header */}
        <div className="w-full flex flex-col items-center text-center mb-16 lg:mb-24">
          <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-semibold text-[#1d1d1f] leading-[1.1] tracking-[-0.02em] mb-5">
            Escolha sua Box.
          </h2>
          <p className="text-[19px] sm:text-[21px] text-[#86868b] max-w-xl">
            Tres opcoes pensadas para cada nivel de transformacao do seu setup.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================
   FAQ SECTION - Accordion
   ============================================ */
function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-[#d2d2d7] last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-[17px] lg:text-[19px] font-semibold text-[#1d1d1f] pr-8 group-hover:text-[#0071e3] transition-colors duration-300">
          {question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#0071e3]' : 'bg-[#e8e8ed] group-hover:bg-[#d2d2d7]'}`}>
          <ChevronDown
            size={16}
            className={`transition-all duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-[#86868b]'}`}
          />
        </div>
      </button>
      <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${isOpen ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <p className="text-[17px] text-[#86868b] leading-relaxed pr-12">{answer}</p>
        </div>
      </div>
    </div>
  )
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Quantos produtos vem na caixa?',
      answer: 'A quantidade varia conforme o plano escolhido: Bronze inclui de 1 a 2 produtos, Prata de 1 a 4 produtos e Ouro de 1 a 6 produtos premium.'
    },
    {
      question: 'Quais produtos irei receber?',
      answer: 'Voce recebera produtos exclusivos para seu setup, incluindo itens do catalogo Anma e produtos especiais que nao estao disponiveis em nosso site.'
    },
    {
      question: 'Qual o prazo de envio?',
      answer: 'O tempo para envio apos a confirmacao da compra e de 1 a 2 semanas. Voce recebera o codigo de rastreamento assim que o pedido for despachado.'
    },
    {
      question: 'Posso devolver o produto?',
      answer: 'Absolutamente. Alem do direito legal de 7 dias, na Anma voce tem ate 90 dias apos o recebimento para solicitar a devolucao. Compre com total tranquilidade.'
    },
    {
      question: 'Vou receber produtos repetidos em compras futuras?',
      answer: 'Nunca. Nossa equipe analisa pessoalmente o historico de cada cliente antes de montar a caixa, garantindo que voce sempre receba itens novos e diferentes.'
    }
  ]

  return (
    <section className="w-full bg-[#fbfbfd]">
      <div className="w-full max-w-[800px] mx-auto px-6 py-24 lg:py-40">
        {/* Section Header */}
        <div className="w-full flex flex-col items-center text-center mb-16 lg:mb-20">
          <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-semibold text-[#1d1d1f] leading-[1.1] tracking-[-0.02em] mb-5">
            Perguntas frequentes.
          </h2>
          <p className="text-[19px] sm:text-[21px] text-[#86868b]">
            Tudo o que voce precisa saber.
          </p>
        </div>

        {/* FAQ Card */}
        <div className="bg-white rounded-[24px] shadow-[0_4px_30px_rgba(0,0,0,0.08)] p-6 sm:p-10">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================
   BENEFITS SECTION - Feature Grid
   ============================================ */
function BenefitCard({ icon: Icon, title, description }) {
  return (
    <div className="group flex flex-col items-center text-center p-8 lg:p-10 rounded-[24px] bg-white hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-500">
      <div className="w-16 h-16 mb-6 rounded-full bg-[#f5f5f7] group-hover:bg-[#0071e3] transition-all duration-500 flex items-center justify-center">
        <Icon
          size={28}
          strokeWidth={1.5}
          className="text-[#1d1d1f] group-hover:text-white transition-colors duration-500"
        />
      </div>
      <h3 className="text-[18px] lg:text-[20px] font-semibold text-[#1d1d1f] mb-3">{title}</h3>
      <p className="text-[15px] text-[#86868b] leading-relaxed">{description}</p>
    </div>
  )
}

function BenefitsSection() {
  const benefits = [
    {
      icon: Sparkles,
      title: 'Itens Premium',
      description: 'Acabamentos de alta qualidade, design ergonomico e funcional.'
    },
    {
      icon: Gift,
      title: 'Surpresa Garantida',
      description: 'Cada edicao traz novidades e tendencias exclusivas.'
    },
    {
      icon: Users,
      title: 'Curadoria Especializada',
      description: 'Itens escolhidos por quem entende de setups.'
    },
    {
      icon: Palette,
      title: 'Variedade',
      description: 'De suportes a luzes LED, decoracao e organizadores.'
    },
    {
      icon: Handshake,
      title: 'Parcerias Exclusivas',
      description: 'Edicoes limitadas de marcas parceiras.'
    },
    {
      icon: ShieldCheck,
      title: 'Qualidade Garantida',
      description: 'Controle rigoroso antes de cada envio.'
    },
    {
      icon: Package,
      title: 'Brindes Surpresa',
      description: 'Adesivos, posters e cupons em edicoes especiais.'
    },
    {
      icon: Rocket,
      title: 'Acesso VIP',
      description: 'Receba itens antes do lancamento oficial.'
    }
  ]

  return (
    <section id="benefits" className="w-full bg-[#f5f5f7]">
      <div className="w-full max-w-[1200px] mx-auto px-6 py-24 lg:py-40">
        {/* Section Header */}
        <div className="w-full flex flex-col items-center text-center mb-16 lg:mb-24">
          <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-semibold text-[#1d1d1f] leading-[1.1] tracking-[-0.02em] mb-5">
            Por que a Setup Box.
          </h2>
          <p className="text-[19px] sm:text-[21px] text-[#86868b] max-w-xl">
            Cada detalhe pensado para elevar sua experiencia.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ============================================
   CTA SECTION - Call to Action
   ============================================ */
function CTASection() {
  return (
    <section className="w-full bg-[#1d1d1f]">
      <div className="w-full max-w-[800px] mx-auto px-6 py-24 lg:py-40">
        <div className="w-full flex flex-col items-center text-center">
          <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-semibold text-[#f5f5f7] leading-[1.1] tracking-[-0.02em] mb-6">
            Pronto para transformar seu setup?
          </h2>
          <p className="text-[19px] sm:text-[21px] text-[#86868b] mb-12 max-w-xl">
            Escolha sua Box e receba itens incriveis em casa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center h-[56px] px-10 bg-[#0071e3] hover:bg-[#0077ed] text-white text-[17px] font-semibold rounded-full transition-all duration-300 shadow-lg shadow-blue-500/30"
            >
              Comprar agora
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-[56px] px-10 bg-transparent border-2 border-[#424245] hover:border-[#86868b] text-[#f5f5f7] text-[17px] font-semibold rounded-full transition-all duration-300"
            >
              <MessageCircle size={20} />
              Falar com especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================
   FOOTER - Contact & Links
   ============================================ */
function Footer() {
  return (
    <footer className="w-full bg-[#f5f5f7]">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20 border-b border-[#d2d2d7]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-[13px] font-semibold text-[#1d1d1f] uppercase tracking-wider mb-5">
                Contato
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:contato@anmasetups.com"
                  className="flex items-center gap-2 text-[15px] text-[#424245] hover:text-[#0071e3] transition-colors"
                >
                  <Mail size={16} />
                  contato@anmasetups.com
                </a>
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[15px] text-[#424245] hover:text-[#0071e3] transition-colors"
                >
                  <Phone size={16} />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-[13px] font-semibold text-[#1d1d1f] uppercase tracking-wider mb-5">
                Horario de Atendimento
              </h3>
              <div className="space-y-2 text-[15px] text-[#424245] text-center md:text-left">
                <p>Segunda a Sexta-feira</p>
                <p>9h as 11h | 13h as 17h</p>
                <p className="text-[#86868b] text-[13px] mt-4">
                  Exceto feriados
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-[13px] font-semibold text-[#1d1d1f] uppercase tracking-wider mb-5">
                Suporte via WhatsApp
              </h3>
              <p className="text-[15px] text-[#424245] mb-5 text-center md:text-left">
                Atendimento em 3 periodos: inicio da manha, comeco da tarde e final da tarde.
              </p>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-[44px] px-6 bg-[#30d158] hover:bg-[#28b74c] text-white text-[15px] font-semibold rounded-full transition-all duration-300 shadow-lg shadow-green-500/25"
              >
                <MessageCircle size={18} />
                Iniciar conversa
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-[#86868b]">
            Copyright &copy; {new Date().getFullYear()} ANMA Setups. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[13px] text-[#424245] hover:text-[#0071e3] transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-[13px] text-[#424245] hover:text-[#0071e3] transition-colors">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ============================================
   MAIN LANDING PAGE COMPONENT
   ============================================ */
export default function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-[#fbfbfd]">
      <TopBar />
      <main className="w-full">
        <HeroSection />
        <PricingSection />
        <BenefitsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
