"use client";
import { useEffect } from "react";

export default function Cliente() {
  useEffect(() => {
    document.getElementsByTagName("header")[0].classList.add("hidden");
    document.getElementsByTagName("footer")[0].classList.add("hidden");
  }, []);

  return <></>;
}
