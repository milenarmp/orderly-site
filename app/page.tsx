import {
  ArrowRight,
  Bot,
  Clock3,
  MessageCircle,
  Repeat2,
  Sparkles,
  Store,
} from "lucide-react";
import Image from "next/image";

const insights = [
  "Qual meu item mais vendido?",
  "Qual o tempo médio de preparo?",
  "Quais clientes mais compram comigo?",
  "Quais horários têm mais pedidos?",
];

const features = [
  {
    title: "Pedidos organizados no WhatsApp",
    description:
      "Centralize pedidos, reduza erros e acompanhe a operação sem depender de conversa solta ou anotação perdida.",
    icon: MessageCircle,
  },
  {
    title: "IA para responder perguntas do negócio",
    description:
      "Descubra rapidamente o que mais vende, como sua operação performa e onde estão as oportunidades de melhoria.",
    icon: Bot,
  },
  {
    title: "Mais economia no dia a dia",
    description:
      "Menos retrabalho, menos confusão no atendimento e mais tempo para focar no que realmente faz o negócio crescer.",
    icon: Clock3,
  },
  {
    title: "Fidelização além do iFood",
    description:
      "Use marketplaces para atrair novos clientes e o Orderly para fazer eles voltarem a comprar direto com você.",
    icon: Repeat2,
  },
];

const steps = [
  {
    number: "01",
    title: "Receba e organize",
    description:
      "O Orderly estrutura os pedidos que chegam pelo WhatsApp e transforma conversa em operação.",
  },
  {
    number: "02",
    title: "Entenda com IA",
    description:
      "Faça perguntas em linguagem natural e tenha respostas claras sobre vendas, preparo e recorrência.",
  },
  {
    number: "03",
    title: "Fidelize clientes",
    description:
      "Construa relacionamento com sua base e transforme pedidos isolados em recorrência.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FCFAFF] text-[#2D2340]">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#E9DDFD] blur-3xl" />
        <div className="absolute right-[10%] top-[180px] h-[320px] w-[320px] rounded-full bg-[#F3EAFE] blur-3xl" />
        <div className="absolute left-[8%] top-[340px] h-[280px] w-[280px] rounded-full bg-[#EFE4FF] blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-6 md:px-8 md:pb-32 md:pt-8">
        <header className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-[#EBDDFF] bg-white/85 px-4 py-3 shadow-[0_8px_30px_rgba(140,100,200,0.08)] backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <Image
                src="/logov2.png"
                alt="Orderly"
                width={140}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </div>

            <div>
              <p className="text-sm font-semibold tracking-wide text-[#2D2340]">
                Orderly
              </p>
              <p className="text-xs text-[#6E6280]">
                CRM para delivery no WhatsApp
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-[#6E6280] md:flex">
            <a href="#beneficios" className="transition hover:text-[#2D2340]">
              Benefícios
            </a>
            <a href="#como-funciona" className="transition hover:text-[#2D2340]">
              Como funciona
            </a>
            <a href="#insights" className="transition hover:text-[#2D2340]">
              IA
            </a>
          </nav>

          <a
            href="https://wa.me/5511977846364"
            className="inline-flex items-center gap-2 rounded-full bg-[#B794F4] px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-[#A67FEF]"
          >
            Falar no WhatsApp
            <ArrowRight size={16} />
          </a>
        </header>

        <div className="mx-auto mt-16 grid max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#EBDDFF] bg-white/90 px-3 py-1 text-xs font-medium text-[#6E6280] shadow-sm">
              <Sparkles size={14} className="text-[#A67FEF]" />
              Feito para marmitarias, pizzarias e restaurantes com delivery
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] md:text-7xl">
              Seu delivery no WhatsApp,
              <span className="bg-gradient-to-r from-[#8F6AD9] via-[#A67FEF] to-[#C4A5F5] bg-clip-text text-transparent">
                {" "}
                organizado com IA.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6E6280] md:text-xl">
              O Orderly ajuda pequenos restaurantes a organizar pedidos,
              economizar tempo, entender melhor a operação e fidelizar clientes
              com um CRM integrado ao WhatsApp.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/5511977846364"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B794F4] px-6 py-3.5 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-[#A67FEF]"
              >
                Falar no WhatsApp
                <ArrowRight size={16} />
              </a>

              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center rounded-full border border-[#EBDDFF] bg-white px-6 py-3.5 text-sm font-semibold text-[#4C3A63] transition hover:bg-[#F8F3FF]"
              >
                Ver como funciona
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-sm text-[#6E6280]">
              <span className="rounded-full border border-[#EBDDFF] bg-white px-3 py-1.5">
                Organização
              </span>
              <span className="rounded-full border border-[#EBDDFF] bg-white px-3 py-1.5">
                Economia
              </span>
              <span className="rounded-full border border-[#EBDDFF] bg-white px-3 py-1.5">
                Fidelização
              </span>
              <span className="rounded-full border border-[#EBDDFF] bg-white px-3 py-1.5">
                Insights com IA
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[32px] border border-[#EBDDFF] bg-white/85 p-4 shadow-[0_20px_80px_rgba(183,148,244,0.18)] backdrop-blur-xl">
              <div className="rounded-[28px] border border-[#F0E6FF] bg-[#FFFDFE] p-5">
                <div className="flex items-center justify-between border-b border-[#F1E9FF] pb-4">
                  <div>
                    <p className="text-sm font-semibold text-[#2D2340]">
                      Painel inteligente
                    </p>
                    <p className="mt-1 text-xs text-[#6E6280]">
                      Visão rápida da operação
                    </p>
                  </div>

                  <div className="rounded-full bg-[#EFE4FF] px-3 py-1 text-xs font-medium text-[#7A5EB3]">
                    IA ativa
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[#F0E6FF] bg-[#FCF8FF] p-4">
                    <p className="text-xs text-[#6E6280]">Item mais vendido</p>
                    <p className="mt-2 text-lg font-semibold text-[#2D2340]">
                      Marmita G
                    </p>
                    <p className="mt-1 text-sm text-[#8F6AD9]">+18% na semana</p>
                  </div>

                  <div className="rounded-2xl border border-[#F0E6FF] bg-[#FCF8FF] p-4">
                    <p className="text-xs text-[#6E6280]">Tempo médio de preparo</p>
                    <p className="mt-2 text-lg font-semibold text-[#2D2340]">
                      24 min
                    </p>
                    <p className="mt-1 text-sm text-[#8F6AD9]">Dentro da meta</p>
                  </div>

                  <div className="rounded-2xl border border-[#F0E6FF] bg-[#FCF8FF] p-4">
                    <p className="text-xs text-[#6E6280]">Pedidos hoje</p>
                    <p className="mt-2 text-lg font-semibold text-[#2D2340]">73</p>
                    <p className="mt-1 text-sm text-[#6E6280]">
                      Pico entre 11h e 13h
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#F0E6FF] bg-[#FCF8FF] p-4">
                    <p className="text-xs text-[#6E6280]">Clientes recorrentes</p>
                    <p className="mt-2 text-lg font-semibold text-[#2D2340]">41%</p>
                    <p className="mt-1 text-sm text-[#8F6AD9]">
                      Fidelização em alta
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-3xl border border-[#EBDDFF] bg-gradient-to-br from-[#F8F2FF] to-[#FDFBFF] p-4">
                  <p className="text-xs text-[#6E6280]">Pergunta para a IA</p>

                  <div className="mt-3 rounded-2xl border border-[#F0E6FF] bg-white px-4 py-3 text-sm text-[#4C3A63]">
                    “Qual meu item mais vendido nesta semana?”
                  </div>

                  <div className="mt-3 rounded-2xl border border-[#E8D8FF] bg-[#F3EAFE] px-4 py-3 text-sm text-[#5F4A87]">
                    Marmita G. Ela representa 27% dos pedidos e teve aumento de
                    18% em relação à semana passada.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6 md:px-8">
        <div className="grid gap-4 rounded-[32px] border border-[#EBDDFF] bg-white/80 p-6 shadow-sm md:grid-cols-3">
          <div>
            <p className="text-3xl font-semibold tracking-tight text-[#2D2340]">
              Menos caos
            </p>
            <p className="mt-2 text-sm leading-6 text-[#6E6280]">
              Organize pedidos e reduza confusão no atendimento.
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold tracking-tight text-[#2D2340]">
              Mais controle
            </p>
            <p className="mt-2 text-sm leading-6 text-[#6E6280]">
              Entenda sua operação sem planilha complicada.
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold tracking-tight text-[#2D2340]">
              Mais recorrência
            </p>
            <p className="mt-2 text-sm leading-6 text-[#6E6280]">
              Traga clientes de volta e dependa menos de marketplace.
            </p>
          </div>
        </div>
      </section>

      <section
        id="beneficios"
        className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#8A7A9E]">Benefícios</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#2D2340] md:text-5xl">
            Um sistema que ajuda o delivery a vender melhor e operar com mais clareza.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#6E6280]">
            O Orderly transforma o WhatsApp em um canal organizado, inteligente e
            preparado para crescimento.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-[28px] border border-[#EBDDFF] bg-white/85 p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F3EAFE] text-[#8F6AD9]">
                  <Icon size={20} />
                </div>

                <h3 className="text-xl font-semibold text-[#2D2340]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6E6280]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section
        id="como-funciona"
        className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32"
      >
        <div className="rounded-[36px] border border-[#EBDDFF] bg-gradient-to-b from-white to-[#FAF5FF] p-8 shadow-sm md:p-12">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#8A7A9E]">Como funciona</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#2D2340] md:text-5xl">
              Um CRM para delivery, direto no WhatsApp.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#6E6280]">
              Feito para operações pequenas que precisam de simplicidade no dia a
              dia e inteligência para tomar decisões melhores.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[28px] border border-[#EBDDFF] bg-white p-6"
              >
                <p className="text-sm font-semibold tracking-[0.2em] text-[#B39ACF]">
                  {step.number}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-[#2D2340]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6E6280]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="insights"
        className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32"
      >
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-medium text-[#8A7A9E]">IA integrada</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#2D2340] md:text-5xl">
              Pergunte para sua operação. O Orderly responde.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#6E6280]">
              Sem achismo e sem precisar montar relatório manual. A IA do
              Orderly transforma seus dados em respostas úteis para o dia a dia.
            </p>
          </div>

          <div className="rounded-[32px] border border-[#EBDDFF] bg-white/85 p-5 shadow-sm">
            <div className="space-y-3">
              {insights.map((question) => (
                <div
                  key={question}
                  className="rounded-2xl border border-[#F0E6FF] bg-[#FCF8FF] px-4 py-4 text-sm text-[#4C3A63]"
                >
                  {question}
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-3xl border border-[#E8D8FF] bg-[#F3EAFE] p-5">
              <p className="text-sm font-medium text-[#5F4A87]">
                Exemplo de insight
              </p>
              <p className="mt-3 text-sm leading-7 text-[#5F4A87]">
                Seu tempo médio de preparo aumentou 12% no horário do almoço.
                Os pedidos com marmita G e refrigerante estão levando mais tempo
                para sair.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:px-8 md:py-32">
        <div className="rounded-[36px] border border-[#EBDDFF] bg-white/85 p-8 shadow-sm md:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-[#8A7A9E]">
              Complementar ao iFood
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#2D2340] md:text-5xl">
              Use o iFood para atrair. Use o Orderly para fidelizar.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#6E6280]">
              Marketplaces ajudam a trazer novos clientes. O relacionamento, a
              recorrência e a inteligência do seu negócio precisam ser seus.
              O Orderly ajuda você a transformar compra pontual em retorno.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12 md:px-8 md:pb-32">
        <div className="rounded-[40px] border border-[#EBDDFF] bg-gradient-to-br from-white to-[#F7F0FF] p-8 text-center shadow-[0_20px_60px_rgba(183,148,244,0.14)] md:p-14">
          <p className="text-sm font-medium text-[#8A7A9E]">Comece agora</p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-[#2D2340] md:text-6xl">
            Menos bagunça no WhatsApp. Mais controle no delivery.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#6E6280]">
            Descubra como o Orderly pode ajudar seu restaurante a organizar
            pedidos, economizar tempo e fazer clientes voltarem.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="https://wa.me/5511977846364"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B794F4] px-7 py-3.5 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-[#A67FEF]"
            >
              Falar no WhatsApp
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 pb-10 md:px-8">
        <div className="flex flex-col items-start justify-between gap-4 border-t border-[#EBDDFF] pt-6 text-sm text-[#6E6280] md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <Store size={16} />
            <span>Orderly</span>
          </div>
          <p>© 2026 Orderly. Todos os direitos reservados.</p>
          <p>CRM para delivery no WhatsApp com insights de IA.</p>
        </div>
      </footer>
    </main>
  );
}