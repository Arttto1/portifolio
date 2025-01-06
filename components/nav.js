"use client"

import { usePathname } from "next/navigation";

import NavLink from "./navLink";

export default function Nav() {
  const path = usePathname()

  return (
    <nav>
      <ul className="list-none font-bold text-2xl md:text-3xl flex justify-center gap-8">
        <li
          className={`-translate-y-[100px] opacity-0 nav-geral`}
        >
          <NavLink href={"/geral"}>Geral</NavLink>
        </li>
        <li
          className={`-translate-y-[100px] opacity-0 nav-projetos`}
        >
          <NavLink href={"/projetos"}>Projetos</NavLink>
        </li>
        <li
          className={`-translate-y-[100px] opacity-0 nav-contato`}
        >
          <NavLink href={"/contato"}>Contato</NavLink>
        </li>
      </ul>
    </nav>
  );
}
