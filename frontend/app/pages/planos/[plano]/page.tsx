"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import CreditCard from "@/app/components/CreditCard";
import "./styles.css";
import FormCreditCard from "@/app/components/FormCreditCard";
import { useCreditCard } from "./function";
import Swal from "sweetalert2";
import { FaSpinner } from "react-icons/fa";

export default function Plano() {
  useEffect(() => {
    document.getElementsByTagName("header")[0].classList.add("hidden");
    document.getElementsByTagName("footer")[0].classList.add("hidden");
  }, []);

  useCreditCard();

  const params = useParams();
  const [loading, setLoading] = useState(false);

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const onSubmit = async () => {
    const cardnumber = document.getElementById(
      "cardnumber"
    )! as HTMLInputElement;
    const name = document.getElementById("name")! as HTMLInputElement;
    const expirationdate = document.getElementById(
      "expirationdate"
    )! as HTMLInputElement;
    const securitycode = document.getElementById(
      "securitycode"
    )! as HTMLInputElement;

    setLoading(true);

    delay(2000).then(() => {
      if (
        cardnumber.value != "" &&
        name.value != "" &&
        expirationdate.value != "" &&
        securitycode.value != ""
      ) {
        Swal.fire({
          title: "Parabéns",
          text: "Agora você faz parte do nosso time!",
          icon: "success",
          confirmButtonText: "OK",
        });
        setLoading(false);
        cardnumber.value = "";
        name.value = "";
        expirationdate.value = "";
        securitycode.value = "";
      } else {
        Swal.fire({
          title: "Desculpe",
          text: "Preencha os campos corretamente!",
          icon: "error",
          confirmButtonText: "OK",
        });
        setLoading(false);
      }
    });
  };
  return (
    <section className="h-screen min-h-[800px] w-full flex items-center justify-center bg-gradient-to-r from-green-800 to-green-900">
      <div className="w-[90%] min-[470px]:max-w-[400px] bg-white rounded-xl lg:max-w-screen-lg p-2">
        <div className="border-b-2 flex flex-col-reverse items-center gap-y-1 py-2 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-4 lg:w-[90%] lg:mx-auto">
          <div className="text-xl font-semibold">
            Plano Escolhido:{" "}
            <span className="text-green-600 capitalize">{`${params.plano}`}</span>
          </div>
          <div className="flex gap-x-2 font-semibold">
            <img src="/logo.png" className="w-6 h-6" />
            <span className="text-xl">Academia do Jon</span>
          </div>
        </div>
        <div className="h-full flex flex-col lg:flex-row items-center justify-evenly mt-2 mb-4">
          <CreditCard />
          <div className="flex flex-col items-center">
            <FormCreditCard />
            <button
              className="bg-green-800 text-white py-3 w-[90%] rounded-md flex justify-center"
              onClick={onSubmit}
            >
              {loading ? (
                <FaSpinner size={20} className="text-center animate-spin" />
              ) : (
                "Contratar"
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
