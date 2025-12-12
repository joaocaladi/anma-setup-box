import { Link } from 'react-router-dom'
import { ChevronLeft, Mail, Globe } from 'lucide-react'

export default function TermsPage() {
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
          Termos de Uso
        </h1>
        <p className="text-[17px] text-[#424245] mb-4">
          Setups Box
        </p>

        <div className="prose prose-lg max-w-none text-[#424245]">
          <p className="text-[17px] leading-relaxed mb-8">
            Ao acessar e utilizar o site{' '}
            <a href="https://www.setupsbox.com/" className="text-[#0071e3] hover:underline">
              https://www.setupsbox.com/
            </a>
            , você concorda integralmente com os termos e condições descritos abaixo. Caso não concorde com estes Termos de Uso, recomendamos que não utilize o site.
          </p>

          {/* Seção 1 */}
          <Section title="1. Aceitação dos Termos">
            <p>
              Ao navegar, cadastrar-se, realizar compras ou utilizar qualquer funcionalidade do site, o usuário declara ter lido, compreendido e aceito estes Termos de Uso, bem como a Política de Privacidade do Setups Box.
            </p>
          </Section>

          {/* Seção 2 */}
          <Section title="2. Elegibilidade">
            <p>Para utilizar o site e realizar compras, o usuário declara que:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Possui capacidade legal para contratar, nos termos da legislação brasileira</li>
              <li>Fornecerá informações verdadeiras, completas e atualizadas</li>
              <li>É responsável por manter a confidencialidade de seus dados de acesso</li>
            </ul>
            <p className="mt-4">
              O SetupsBox não se responsabiliza por informações falsas fornecidas pelo usuário.
            </p>
          </Section>

          {/* Seção 3 */}
          <Section title="3. Cadastro do Usuário">
            <p>Algumas funcionalidades podem exigir cadastro. O usuário é responsável por:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Manter seus dados corretos e atualizados</li>
              <li>Proteger seu login e senha</li>
              <li>Todas as atividades realizadas em sua conta</li>
            </ul>
            <p className="mt-4">
              O SetupsBox reserva-se o direito de suspender ou excluir contas que apresentem uso indevido, fraude ou violação destes termos.
            </p>
          </Section>

          {/* Seção 4 */}
          <Section title="4. Compras, Pagamentos e Pedidos">
            <h3 className="text-[18px] font-semibold text-[#1d1d1f] mt-4 mb-2">4.1 Produtos</h3>
            <p>
              Os produtos disponíveis no site possuem descrições detalhadas, imagens ilustrativas e especificações técnicas. Pequenas variações visuais podem ocorrer sem comprometer a funcionalidade do produto.
            </p>

            <h3 className="text-[18px] font-semibold text-[#1d1d1f] mt-6 mb-2">4.2 Preços</h3>
            <p>
              Os preços estão sujeitos a alteração sem aviso prévio, respeitando os pedidos já confirmados.
            </p>

            <h3 className="text-[18px] font-semibold text-[#1d1d1f] mt-6 mb-2">4.3 Pagamentos</h3>
            <p>
              Os pagamentos são processados por intermediadores seguros. O SetupsBox não armazena dados sensíveis de pagamento, como números completos de cartões de crédito.
            </p>

            <h3 className="text-[18px] font-semibold text-[#1d1d1f] mt-6 mb-2">4.4 Confirmação do Pedido</h3>
            <p>
              O pedido será considerado confirmado somente após a aprovação do pagamento pela plataforma responsável.
            </p>
          </Section>

          {/* Seção 5 */}
          <Section title="5. Entrega e Prazos">
            <ul className="list-disc pl-6 space-y-1">
              <li>Os prazos de entrega são estimados e informados no momento da compra</li>
              <li>Podem ocorrer atrasos por fatores externos (logística, greves, clima, força maior)</li>
              <li>O Setups Box não se responsabiliza por dados de endereço incorretos fornecidos pelo usuário</li>
            </ul>
          </Section>

          {/* Seção 6 */}
          <Section title="6. Trocas, Devoluções e Cancelamentos">
            <p>As trocas e devoluções seguem as normas do Código de Defesa do Consumidor.</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>O prazo para arrependimento é de até 90 dias corridos após o recebimento do produto</li>
              <li>Produtos devem ser devolvidos sem sinais de uso e em sua embalagem original</li>
              <li>Regras completas estão disponíveis na política específica de trocas e devoluções</li>
            </ul>
          </Section>

          {/* Seção 7 */}
          <Section title="7. Propriedade Intelectual">
            <p>Todo o conteúdo do site SetupsBox, incluindo:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Textos</li>
              <li>Imagens</li>
              <li>Vídeos</li>
              <li>Logotipos</li>
              <li>Marcas</li>
              <li>Layout</li>
              <li>Design</li>
            </ul>
            <p className="mt-4">
              é protegido por direitos autorais e propriedade intelectual.
            </p>
            <p className="mt-2 font-medium">
              É proibida a reprodução, distribuição ou uso sem autorização prévia e expressa do SetupsBox.
            </p>
          </Section>

          {/* Seção 8 */}
          <Section title="8. Uso Indevido do Site">
            <p>É vedado ao usuário:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Utilizar o site para fins ilícitos</li>
              <li>Tentar invadir, danificar ou comprometer a segurança do site</li>
              <li>Utilizar robôs, scripts ou qualquer meio automatizado não autorizado</li>
              <li>Copiar ou explorar conteúdos comerciais sem permissão</li>
            </ul>
            <p className="mt-4">
              O descumprimento poderá resultar em suspensão de acesso e medidas legais cabíveis.
            </p>
          </Section>

          {/* Seção 9 */}
          <Section title="9. Limitação de Responsabilidade">
            <p>O SetupsBox não se responsabiliza por:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Danos decorrentes de uso indevido dos produtos</li>
              <li>Interrupções temporárias do site por manutenção ou falhas técnicas</li>
              <li>Conteúdos ou serviços de terceiros acessados por links externos</li>
              <li>Expectativas subjetivas de resultados não garantidos</li>
            </ul>
          </Section>

          {/* Seção 10 */}
          <Section title="10. Modificações dos Termos">
            <p>
              O SetupsBox pode alterar estes Termos de Uso a qualquer momento.
            </p>
            <p className="mt-2">
              Recomendamos que o usuário revise este documento periodicamente.
            </p>
            <p className="mt-2">
              O uso contínuo do site após alterações implica concordância com os novos termos.
            </p>
          </Section>

          {/* Seção 11 */}
          <Section title="11. Rescisão e Suspensão">
            <p>
              O Setups Box pode, a seu critério, suspender ou encerrar o acesso de usuários que violem estes Termos de Uso, sem necessidade de aviso prévio.
            </p>
          </Section>

          {/* Seção 12 */}
          <Section title="12. Legislação Aplicável e Foro">
            <p>
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil.
            </p>
            <p className="mt-4">
              Fica eleito o foro do domicílio do consumidor, conforme o Código de Defesa do Consumidor, para dirimir quaisquer controvérsias oriundas deste documento.
            </p>
          </Section>

          {/* Seção 13 */}
          <Section title="13. Contato">
            <p>
              Para dúvidas, solicitações ou reclamações:
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
