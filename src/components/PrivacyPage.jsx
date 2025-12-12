import { Link } from 'react-router-dom'
import { ChevronLeft, Mail, Globe } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="w-full min-h-screen bg-[#fbfbfd]">
      {/* Header */}
      <header className="w-full bg-white border-b border-[#e8e8ed]">
        <div className="w-full max-w-[1200px] mx-auto px-6 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[15px] text-[#0071e3] hover:underline"
          >
            <ChevronLeft size={18} />
            Voltar para a página inicial
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="w-full max-w-[800px] mx-auto px-6 py-16">
        <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#1d1d1f] leading-[1.1] tracking-[-0.02em] mb-8">
          Política de Privacidade
        </h1>
        <p className="text-[17px] text-[#424245] mb-4">
          Setups Box
        </p>

        <div className="prose prose-lg max-w-none text-[#424245]">
          <p className="text-[17px] leading-relaxed mb-8">
            A sua privacidade é importante para nós. É política do SetupsBox respeitar a sua privacidade e proteger quaisquer informações pessoais que você possa nos fornecer por meio do site{' '}
            <a href="https://www.setupsbox.com/" className="text-[#0071e3] hover:underline">
              https://www.setupsbox.com/
            </a>.
          </p>

          <p className="text-[17px] leading-relaxed mb-12">
            Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD).
          </p>

          {/* Seção 1 */}
          <Section title="1. Coleta de Informações">
            <p>
              Coletamos informações pessoais apenas quando realmente necessárias para fornecer nossos serviços. A coleta ocorre de forma justa, legal e com o seu conhecimento e consentimento.
            </p>
            <p className="mt-4">As informações coletadas podem incluir:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone</li>
              <li>Endereço de entrega e cobrança</li>
              <li>Dados de pagamento (processados por intermediadores seguros)</li>
              <li>Informações de navegação (IP, tipo de navegador, páginas acessadas, tempo de visita)</li>
            </ul>
            <p className="mt-4">Esses dados podem ser coletados quando você:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Realiza um cadastro no site</li>
              <li>Efetua uma compra</li>
              <li>Entra em contato conosco</li>
              <li>Assina nossa newsletter</li>
              <li>Navega pelo site</li>
            </ul>
          </Section>

          {/* Seção 2 */}
          <Section title="2. Uso das Informações">
            <p>Utilizamos suas informações para:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Processar pedidos e pagamentos</li>
              <li>Entregar produtos adquiridos</li>
              <li>Enviar comunicações relacionadas ao pedido</li>
              <li>Prestar suporte ao cliente</li>
              <li>Melhorar a experiência de navegação no site</li>
              <li>Enviar ofertas, novidades e conteúdos promocionais (quando autorizado)</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>
            <p className="mt-4">
              Nunca utilizamos seus dados para finalidades diferentes das descritas nesta política.
            </p>
          </Section>

          {/* Seção 3 */}
          <Section title="3. Compartilhamento de Dados">
            <p className="font-medium">O SetupsBox não vende, aluga ou comercializa seus dados pessoais.</p>
            <p className="mt-4">Seus dados podem ser compartilhados apenas com:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Plataformas de pagamento (ex: Mercado Pago, Stripe, PayPal)</li>
              <li>Serviços de logística e transporte</li>
              <li>Plataformas de e-mail marketing</li>
              <li>Ferramentas de análise e performance (ex: Google Analytics)</li>
              <li>Autoridades legais, quando exigido por lei</li>
            </ul>
            <p className="mt-4">
              Todos os parceiros seguem padrões rigorosos de segurança e proteção de dados.
            </p>
          </Section>

          {/* Seção 4 */}
          <Section title="4. Armazenamento e Segurança dos Dados">
            <p>Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Acesso não autorizado</li>
              <li>Alteração indevida</li>
              <li>Divulgação indevida</li>
              <li>Destruição acidental ou ilegal</li>
            </ul>
            <p className="mt-4">
              Os dados são armazenados apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletados, salvo quando houver obrigação legal de retenção.
            </p>
          </Section>

          {/* Seção 5 */}
          <Section title="5. Cookies e Tecnologias Semelhantes">
            <p>Utilizamos cookies para:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Melhorar o desempenho do site</li>
              <li>Personalizar sua experiência</li>
              <li>Analisar comportamento de navegação</li>
              <li>Oferecer conteúdo e anúncios relevantes</li>
            </ul>
            <p className="mt-4">
              Você pode, a qualquer momento, configurar seu navegador para recusar cookies, sabendo que isso pode impactar algumas funcionalidades do site.
            </p>
          </Section>

          {/* Seção 6 */}
          <Section title="6. Direitos do Titular dos Dados">
            <p>De acordo com a LGPD, você tem o direito de:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Confirmar a existência de tratamento de dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar a exclusão de dados desnecessários</li>
              <li>Revogar consentimentos concedidos</li>
              <li>Solicitar a portabilidade dos dados</li>
            </ul>
            <p className="mt-4">
              Para exercer seus direitos, entre em contato pelo e-mail informado abaixo.
            </p>
          </Section>

          {/* Seção 7 */}
          <Section title="7. Links para Sites de Terceiros">
            <p>
              Nosso site pode conter links para sites externos que não são operados por nós. Não nos responsabilizamos pelas práticas de privacidade desses sites. Recomendamos que você leia as políticas de privacidade de cada site visitado.
            </p>
          </Section>

          {/* Seção 8 */}
          <Section title="8. Alterações nesta Política">
            <p>
              Esta Política de Privacidade pode ser atualizada a qualquer momento para refletir mudanças legais, operacionais ou de mercado. Recomendamos que você revise este documento periodicamente.
            </p>
            <p className="mt-4">
              A versão mais recente estará sempre disponível em nosso site.
            </p>
          </Section>

          {/* Seção 9 */}
          <Section title="9. Contato">
            <p>
              Se você tiver qualquer dúvida sobre esta Política de Privacidade ou sobre o tratamento dos seus dados pessoais, entre em contato conosco:
            </p>
            <div className="mt-4 space-y-3">
              <a
                href="mailto:contato@setupsbox.com"
                className="flex items-center gap-2 text-[#0071e3] hover:underline"
              >
                <Mail size={18} />
                contato@setupsbox.com
              </a>
              <a
                href="https://www.setupsbox.com/"
                className="flex items-center gap-2 text-[#0071e3] hover:underline"
              >
                <Globe size={18} />
                https://www.setupsbox.com/
              </a>
            </div>
          </Section>

          {/* Data de atualização */}
          <div className="mt-12 pt-8 border-t border-[#e8e8ed]">
            <p className="text-[15px] text-[#86868b]">
              Última atualização: dezembro de 2025
            </p>
          </div>
        </div>
      </main>

      {/* Footer simples */}
      <footer className="w-full bg-[#f5f5f7] border-t border-[#e8e8ed]">
        <div className="w-full max-w-[1200px] mx-auto px-6 py-6">
          <p className="text-[13px] text-[#86868b] text-center">
            Copyright &copy; {new Date().getFullYear()} ANMA Setups. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-[24px] font-semibold text-[#1d1d1f] mb-4">{title}</h2>
      <div className="text-[17px] leading-relaxed">{children}</div>
    </div>
  )
}
