import Image from "next/image";
import Link from "next/link";

import classes from "./page.module.css"
import Nav from "@/components/nav";

export default function Geral() {
  return (
    <>
      <header className="pt-4">
        <Nav />
      </header>
      <main className="flex flex-col items-center mt-8">
        <h1 className={`text-3xl mb-4 nav-active ${classes.title}`}>Entre em contato comigo!</h1>
        <form className="form mb-8" action="">
          <div className="name-phone-div h-fit mb-4">
            <div>
              <label className={`${classes.nameLabel}`} htmlFor="nome">Seu nome:</label>
              <div className="input-div">
                <input className={`${classes.nameInput}`} type="text" name="nome" />
              </div>
            </div>
            <div>
              <label className={`${classes.phoneLabel}`} htmlFor="telefone">Telefone com DDD:</label>
              <div className="input-div">
                <input className={`${classes.phoneInput}`} type="tel" name="telefone" />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className={`${classes.emailLabel}`} htmlFor="email">Endereço de email:</label>
            <div className="input-div">
              <input className={`${classes.emailInput}`} type="email" name="email" />
            </div>
          </div>
          <div className="mb-4">
            <label className={`${classes.textareaLabel}`} htmlFor="mensagem">Sua mensagem:</label>
            <div className="input-div">
              <textarea className={`${classes.textarea}`} name="mensagem"></textarea>
            </div>
          </div>
          <div className={`w-fit h-fit m-auto form-btn-div ${classes.formBtn}`}>
            <div className="w-fit bg-black rounded-md px-3 py-1 m-auto mt-4">
              <button className={`form-btn text-xl`}>Enviar Mensagem</button>
            </div>
          </div>
        </form>
      </main>
      <footer className="flex justify-center gap-6 text-xl">
        <Link
          href="https://wa.me/5517991677556"
          target="_blank"
          className="flex items-center gap-1 hover:scale-110 duration-500 cursor-pointer"
        >
          <Image
            className={`hover:scale-110 duration-500 cursor-pointer ${classes.phoneLogo}`}
            src={"/whatsapp.svg"}
            width={40}
            height={40}
            alt="whatsapp logo"
          ></Image>
          <p className={`${classes.phoneText}`}>17 99167-7556</p>
        </Link>
        <Link
          href="mailto:arthurnunesdev@gmail.com"
          target="_blank"
          className="flex items-center gap-1 hover:scale-110 duration-500 cursor-pointer"
        >
          <Image
            className={`${classes.emailLogo}`}
            src={"/email.svg"}
            width={48}
            height={48}
            alt="email logo"
          ></Image>
          <p className={`${classes.emailText}`}>arthurnunesdev@gmail.com</p>
        </Link>
        <Link className={`${classes.linkedinLogo}`} href="https://www.linkedin.com/in/arthur-pagiatto-nunes/" target="_blank">
          <Image
            className="hover:scale-125 duration-500 cursor-pointer"
            src={"/linkedin.svg"}
            width={40}
            height={40}
            alt="linkedin logo"
          ></Image>
        </Link>
      </footer>
    </>
  );
}
