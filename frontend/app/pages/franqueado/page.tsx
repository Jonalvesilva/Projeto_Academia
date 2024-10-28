"use client";
import { controlNumber } from "@/app/utils/constants";
import { TextInputMask, celPhoneMask, cpfMask } from "react-masked-text";
import { cidades_rj } from "@/app/utils/constants";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FranqueadoSchema, User } from "@/app/schemas/franqueadoSchema";
import Swal from "sweetalert2";
import "./styles.css";
import "select2/dist/css/select2.min.css";

export default function Franqueado() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const $ = require("jquery");
      require("select2");

      $(document).ready(function () {
        $("#citySelect").select2({
          dropdownPosition: "above",
        });
      });
    }
  }, []);

  const [isLoading, setLoading] = useState(false);

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const {
    register,
    control,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm<User>({ resolver: zodResolver(FranqueadoSchema) });

  const onSubmit: SubmitHandler<User> = (data) => {
    setLoading(true);
    console.log(data);
    delay(2000).then(() => {
      Swal.fire({
        title: "Excelente",
        text: "Reunião agendada!",
        icon: "success",
        confirmButtonText: "OK",
      });
      setLoading(false);
      reset();
    });
  };

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

  return (
    <section className="w-full border border-b-2 mt-[60px] py-10">
      <div className="text-center text-3xl pb-14">
        <h2>Seja Um Franqueado</h2>
      </div>
      <div className="w-full max-w-screen-lg mx-auto">
        <form
          className="w-[90%] mx-auto lg:w-full lg:mx-0"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Nome:
                </label>
                <input
                  {...register("nome")}
                  type="text"
                  onKeyUp={() => trigger("nome")}
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
                  Sobrenome:
                </label>
                <input
                  {...register("sobrenome")}
                  onKeyUp={() => trigger("sobrenome")}
                  type="text"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {errors.sobrenome && (
                  <span className="text-red-500">{`${errors.sobrenome.message}`}</span>
                )}
              </div>
            </div>
          </div>
          <div className="mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  CPF:
                </label>

                <input
                  {...register("cpf")}
                  onKeyUp={() => trigger("cpf")}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  maxLength={14}
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
                  Telefone:
                </label>
                <input
                  {...register("telefone")}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  onKeyDown={(event) => {
                    if (
                      !controlNumber.includes(event.key) ||
                      event.key === "Dead"
                    ) {
                      event.preventDefault();
                    }
                  }}
                  onKeyUp={(e) => {
                    trigger("telefone");
                    return handlePhone(e);
                  }}
                  maxLength={15}
                />
                {errors.telefone && (
                  <span className="text-red-500">{`${errors.telefone.message}`}</span>
                )}
              </div>
            </div>
          </div>
          <div className="mx-3 flex flex-wrap">
            <div className="w-full px-3">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Email:
                </label>
                <input
                  {...register("email")}
                  type="email"
                  onKeyUp={() => trigger("email")}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {errors.email && (
                  <span className="text-red-500">{`${errors.email.message}`}</span>
                )}
              </div>
            </div>
          </div>

          <div className="mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Cidade RJ:
                </label>
                <select id="citySelect" {...register("cidade")}>
                  {cidades_rj.map((cidade) => (
                    <option key={`cidade_${cidade}`} value={cidade}>
                      {cidade}
                    </option>
                  ))}
                </select>
                {errors.cidade && (
                  <span className="text-red-500">{`${errors.cidade.message}`}</span>
                )}
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Horário:
                </label>
                <input
                  {...register("data")}
                  type="datetime-local"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
                {errors.data && (
                  <span className="text-red-500">{`${errors.data.message}`}</span>
                )}
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[60%] mx-auto pt-6 ">
            <button className="rounded-md bg-green-600 py-3 w-full text-center text-base font-semibold text-white outline-none">
              Agendar Reunião
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
