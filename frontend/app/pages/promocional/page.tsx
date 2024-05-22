"use client";
import { unidades, controlNumber } from "@/app/utils/constants";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema, User } from "@/app/schemas/userSchema";
import { useState } from "react";
import Swal from "sweetalert2";
import { FaSpinner } from "react-icons/fa";

export default function Promocional() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>({ resolver: zodResolver(UserSchema) });

  const handleCpf = (e: any) => {
    let x = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
    e.target.value = !x[2]
      ? x[1]
      : x[1] +
        "." +
        x[2] +
        (x[3] ? "." : "") +
        x[3] +
        (x[4] ? "/" : x[4]) +
        x[4] +
        (x[5] ? "-" + x[5] : "");

    if (e.target.value.length < 15) {
      x = e.target.value
        .replace(/\D/g, "")
        .match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
      e.target.value = !x[2]
        ? x[1]
        : x[1] +
          "." +
          x[2] +
          (x[3] ? "." : "") +
          x[3] +
          (x[4] ? "-" + x[4] : "");
    }
  };

  const handlePhone = (event: any) => {
    let input = event.target;
    input.value = phoneMask(input.value);
  };

  const phoneMask = (value: any) => {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
  };

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<User> = (data) => {
    setLoading(true);
    delay(2000).then(() => {
      Swal.fire({
        title: "Excelente",
        text: "Sua aula foi agendada!",
        icon: "success",
        confirmButtonText: "OK",
      });
      setLoading(false);
      reset();
    });
  };

  return (
    <section className="w-full border border-b-2 pt-[120px]">
      <div className="text-center text-3xl pb-14">
        <h2>Marque aqui sua aula grátis</h2>
      </div>
      <div className="w-full max-w-screen-lg mx-auto">
        <form
          className="w-[90%] mx-auto lg:w-full lg:mx-0"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Nome:
                </label>
                <input
                  type="text"
                  {...register("nome")}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {errors.nome && (
                  <span className="text-red-500">{`${errors.nome.message}`}</span>
                )}
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Sobrenome
                </label>
                <input
                  type="text"
                  {...register("sobrenome")}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {errors.sobrenome && (
                  <span className="text-red-500">{`${errors.sobrenome.message}`}</span>
                )}
              </div>
            </div>
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  CPF:
                </label>

                <input
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  maxLength={14}
                  {...register("cpf")}
                  onInput={(e) => handleCpf(e)}
                />

                {errors.cpf && (
                  <span className="text-red-500">{`${errors.cpf.message}`}</span>
                )}
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Telefone
                </label>
                <input
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  {...register("telefone")}
                  onKeyDown={(event) => {
                    if (
                      !controlNumber.includes(event.key) ||
                      event.key === "Dead"
                    ) {
                      event.preventDefault();
                    }
                  }}
                  onKeyUp={(e) => handlePhone(e)}
                  maxLength={15}
                />
                {errors.telefone && (
                  <span className="text-red-500">{`${errors.telefone.message}`}</span>
                )}
              </div>
            </div>
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Unidade:
                </label>
                <select
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none 
                focus:border-[#6A64F1] focus:shadow-md"
                  {...register("unidade")}
                >
                  {unidades.map((data) => {
                    return (
                      <option value={data.name} key={`${data.name}_key`}>
                        {data.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Data & Hora
                </label>
                <input
                  type="datetime-local"
                  {...register("data")}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {errors.data && (
                  <span className="text-red-500">{`${errors.data.message}`}</span>
                )}
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[60%] mx-auto pt-6 pb-16">
            <button className="rounded-md bg-green-600 py-3 w-full flex justify-center text-base font-semibold text-white outline-none">
              {!loading ? (
                "Marcar"
              ) : (
                <FaSpinner size={20} className="animate-spin" />
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
