"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

import Habilidades from "@/components/habilidades";
import Nav from "@/components/nav";

export default function Geral() {
  const path = usePathname();

  return (
    <>
      <section className="h-[100vh] max-w-[80vw] m-auto pt-4 mainPage duration-1000 ease-in-out">
        <header>
          <Nav />
        </header>
        <main className="overflow-x-hidden flex flex-col items-center mt-8">
          <h1
            className={`mb-4 translate-y-[100%] opacity-0 subir-texto-habilidades`}
          >
            Principais Habilidades
          </h1>
          <div
            className={`w-[100%] px-[3px] scale-50 opacity-0 aumentar-habilidades`}
          >
            <Habilidades />
          </div>

          <div className="flex gap-8 mt-8 max-w-[50vw]">
            <div>
              <h2
                className={`translate-x-[100%] text-3xl opacity-0 translate-title`}
              >
                Sobre Mim
              </h2>
              <p className={`translate-x-[100%] opacity-0 translate-text1`}>
                Prazer, meu nome é Arthur Pagiatto Nunes, tenho 21 anos e sou
                estudante do curso de Análise e Desenvolvimento de Sistemas.
                Fascinado pelos desafios lógicos da programação, solucionar
                problemas me trazem uma satisfação sem igual.
              </p>
              <p className={`translate-x-[100%] opacity-0 ranslate-text2`}>
                Obrigado por acessar meu portifólio, sinta-se à vontade para
                entrar em contato para conversarmos, ou para contratos.
              </p>
            </div>
          </div>
          <div className="max-w-[80vw]">
            <h3 className="text-center text-4xl">Como Posso Ajudar</h3>
            <div className="services-container">
              <div>
                <h4 className="nav-active">Desenvolvimento Front-end</h4>
                <p>
                  Criação de interfaces modernas, responsivas e intuitivas,
                  garantindo uma experiência do usuário fluida e acessível em
                  qualquer dispositivo.
                </p>
              </div>
              <div>
                <h4 className="nav-active">Desenvolvimento Back-end</h4>
                <p>
                  Construção de APIs robustas, sistemas escaláveis e seguros
                  para gerenciar dados e funcionalidades. Ideal para aplicações
                  que exigem alto desempenho.
                </p>
              </div>
              <div>
                <h4 className="nav-active">Integrações e Soluções Personalizadas</h4>
                <p>
                  Integração de APIs externas, sistemas de pagamento (como
                  Stripe ou PayPal) e serviços personalizados para atender às
                  necessidades específicas do seu projeto.
                </p>
              </div>
              <div className="">
                <h4 className="nav-active">Otimização de Performance</h4>
                <p>
                  Melhoria de tempo de carregamento, SEO e acessibilidade para
                  garantir que seu site ou aplicação alcance a máxima
                  eficiência.
                </p>
              </div>
              <div className="fifth-service">
                <h4 className="nav-active">Recriação de Sites</h4>
                <p>
                  Transformo sites desatualizados em plataformas modernas e
                  eficientes, com design responsivo, performance otimizada e
                  foco na experiência do usuário. Deixe sua presença online
                  alinhada com as demandas do mercado atual.
                </p>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
