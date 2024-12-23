"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

import classes from "./page.module.css";
import Habilidades from "@/components/habilidades";
import NavLink from "@/components/navLink";

export default function Geral() {
  const path = usePathname()
 
  return (
    <>
      <section
        className="overflow-hidden h-[100vh] max-w-[80vw] m-auto pt-16 mainPage duration-1000 ease-in-out"
      >
        <header>
          <nav>
            <ul className="list-none font-bold text-2xl md:text-3xl flex justify-center gap-8">
              <li
                className={`-translate-y-[100px] opacity-0 ${path.startsWith("/geral") ? "nav-geral" : ""}`}
              >
                <NavLink href={"/geral"}>Geral</NavLink>
              </li>
              <li
                className={`-translate-y-[100px] opacity-0 ${path.startsWith("/geral") ? "nav-projetos" : ""}`}
              >
                <NavLink href={"/projetos"}>Projetos</NavLink>
              </li>
              <li
                className={`-translate-y-[100px] opacity-0 ${path.startsWith("/geral") ? "nav-serviços" : ""}`}
              >
                <NavLink href={"/servicos"}>Serviços</NavLink>
              </li>
              <li
                className={`-translate-y-[100px] opacity-0 ${path.startsWith("/geral") ? "nav-contato" : ""}`}
              >
                <NavLink href={"/contato"}>Contato</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex flex-col items-center mt-8">
          <h1 className={`mb-4 translate-y-[100%] opacity-0 ${path.startsWith("/geral") ? "subir-texto-habilidades" : ""}`}>Principais Habilidades</h1>
          <div
            className={`w-[100%] px-[3px] scale-50 opacity-0 ${path.startsWith("/geral") ? "aumentar-habilidades" : ""}`}
          >
            <Habilidades />
          </div>

          {/* <div className="line-gradientX my-4"></div> */}

          <div className="flex gap-8 mt-8">
            <div
              className={`border-4 shrink-0 border-white w-[250px] h-[250px] object-cover overflow-hidden rounded-lg -translate-x-[100%] opacity-0 ${path.startsWith("/geral") ? "translate-image" : ""}`}
            >
              <Image
                src={"/Foto Arthur.webp"}
                width={1024}
                height={1024}
                alt="Arthur Nunes image"
                className="scale-150 -translate-x-1"
              ></Image>
            </div>
            <div>
              <h1
                className={`translate-x-[100%] opacity-0 ${path.startsWith("/geral") ? "translate-title" : ""}`}
              >
                Sobre Mim
              </h1>
              <p
                className={`translate-x-[100%] opacity-0 ${path.startsWith("/geral") ? "translate-text1" : ""}`}
              >
                Prazer, meu nome é Arthur Pagiatto Nunes, tenho 21 anos e sou
                estudante do curso de Análise e Desenvolvimento de Sistemas.
                Fascinado pelos desafios lógicos da programação, solucionar
                problemas me trazem uma satisfação sem igual.
              </p>
              <p
                className={`translate-x-[100%] opacity-0 ${path.startsWith("/geral") ? "translate-text2" : ""}`}
              >
                Obrigado por acessar meu portifólio, sinta-se à vontade para
                entrar em contato para conversarmos, ou para contratos.
              </p>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
