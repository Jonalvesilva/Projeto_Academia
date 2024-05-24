"use client";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { FiLoader } from "react-icons/fi";

export default function SignIn() {
  useEffect(() => {
    document.getElementsByTagName("header")[0].classList.add("hidden");
    document.getElementsByTagName("footer")[0].classList.add("hidden");
  }, []);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("teste");
  };

  return (
    <section className="bg-gradient-to-r from-green-800 to-green-900 h-screen min-h-[550px] flex flex-col justify-center gap-y-6">
      <div className="w-full max-w-screen-md mx-auto h-12 flex items-center justify-center gap-x-4">
        <img src="/logo.png" className="w-22 h-full" />
        <h2 className="text-3xl text-white">Academia do Jon</h2>
      </div>
      <div className="bg-white w-[90%] mx-auto p-2 rounded-xl md:max-w-screen-md">
        <h2 className="text-xl font-bold text-center mb-6 mt-2">
          Espaço do Cliente
        </h2>
        <form
          method="POST"
          className="flex flex-col gap-2 w-[95%] mx-auto"
          noValidate
          onSubmit={(e) => onFormSubmit(e)}
        >
          <label className="text-lg md:text-xl">Email:</label>
          <input
            placeholder="Digite seu email"
            className="mb-3 border-gray-200 border-2 text-lg p-2 rounded-xl outline-none md:text-xl"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label className="text-lg md:text-xl">Senha:</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            className="mb-3 border-2 text-lg p-2 rounded-xl outline-none md:text-xl"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />
          <button
            type="submit"
            className="bg-green-700 rounded-xl p-2 my-4 hover:bg-green-600 text-white"
          >
            {isLoading ? (
              <FiLoader className="text-white animate-spin text-lg inline" />
            ) : (
              `Entrar`
            )}
          </button>
        </form>
        <div className="text-center mb-2">
          <Link
            href="/pages/cliente/signup"
            className="text-blue-600 hover:text-blue-400 text-lg text-center md:text-xl underline"
          >
            Já possui algum de nossos planos? Cadastre-se aqui!
          </Link>
        </div>
      </div>
    </section>
  );
}
