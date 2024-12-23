"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

import Habilidades from "@/components/habilidades";
import NavLink from "@/components/navLink";

export default function Geral() {
  const path = usePathname();

  return (
    <>
      <section className="overflow-hidden h-[100vh] max-w-[80vw] m-auto pt-16 mainPage duration-1000 ease-in-out">
        <header>
          <nav>
            <ul className="list-none font-bold text-2xl md:text-3xl flex justify-center gap-8">
              <li
                className={`-translate-y-[100px] opacity-0 ${path.startsWith("/contato") ? "nav-geral" : ""}`}
              >
                <NavLink href={"/geral"}>Geral</NavLink>
              </li>
              <li
                className={`-translate-y-[100px] opacity-0 ${path.startsWith("/contato") ? "nav-projetos" : ""}`}
              >
                <NavLink href={"/projetos"}>Projetos</NavLink>
              </li>
              <li
                className={`-translate-y-[100px] opacity-0 ${path.startsWith("/contato") ? "nav-serviços" : ""}`}
              >
                <NavLink href={"/servicos"}>Serviços</NavLink>
              </li>
              <li
                className={`-translate-y-[100px] opacity-0 ${path.startsWith("/contato") ? "nav-contato" : ""}`}
              >
                <NavLink href={"/contato"}>Contato</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex flex-col items-center mt-8">
          <h1>Entre em contato comigo!</h1>
          <p>
            Sinta-se a vontade para enviar-me uma mensagem preenchendo o
            formulário.
          </p>
          <form className="form" action="">
            <div>
              <label htmlFor="nome">Seu nome:</label>
              <div>
                {" "}
                <input type="text" name="nome" />
              </div>
            </div>
            <div>
              <label htmlFor="telefone">Número de telefone com DDD:</label>
              <div>
                {" "}
                <input type="tel" name="telefone" />
              </div>
            </div>
            <div>
              <label htmlFor="email">Endereço de email:</label>
              <div>
                {" "}
                <input type="email" name="email" />
              </div>
            </div>
            <div>
              <label htmlFor="mensagem">Sua mensagem:</label>
              <textarea name="mensagem"></textarea>
            </div>
          </form>
        </main>
      </section>
    </>
  );
}
