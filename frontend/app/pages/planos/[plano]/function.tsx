import React, { useEffect, useRef } from "react";
import IMask from "imask";
import * as creditCards from "./svgIcons";

export const useCreditCard = () => {
  useEffect(() => {
    const name: any = document.getElementById("name");
    const cardnumber: any = document.getElementById("cardnumber");
    const expirationdate: any = document.getElementById("expirationdate");
    const securitycode: any = document.getElementById("securitycode");
    const output: any = document.getElementById("output");
    const ccicon: any = document.getElementById("ccicon");
    const ccsingle: any = document.getElementById("ccsingle");

    //Mask the Credit Card Number Input
    let cardnumber_mask: any = IMask(cardnumber, {
      mask: [
        {
          mask: "0000 000000 00000",
          regex: "^3[47]\\d{0,13}",
          cardtype: "american express",
        },
        {
          mask: "0000 0000 0000 0000",
          regex: "^(?:6011|65\\d{0,2}|64[4-9]\\d?)\\d{0,12}",
          cardtype: "discover",
        },
        {
          mask: "0000 000000 0000",
          regex: "^3(?:0([0-5]|9)|[689]\\d?)\\d{0,11}",
          cardtype: "diners",
        },
        {
          mask: "0000 0000 0000 0000",
          regex: "^(5[1-5]\\d{0,2}|22[2-9]\\d{0,1}|2[3-7]\\d{0,2})\\d{0,12}",
          cardtype: "mastercard",
        },

        {
          mask: "0000 000000 00000",
          regex: "^(?:2131|1800)\\d{0,11}",
          cardtype: "jcb15",
        },
        {
          mask: "0000 0000 0000 0000",
          regex: "^(?:35\\d{0,2})\\d{0,12}",
          cardtype: "jcb",
        },
        {
          mask: "0000 0000 0000 0000",
          regex: "^(?:5[0678]\\d{0,2}|6304|67\\d{0,2})\\d{0,12}",
          cardtype: "maestro",
        },
        {
          mask: "0000 0000 0000 0000",
          regex: "^4\\d{0,15}",
          cardtype: "visa",
        },
        {
          mask: "0000 0000 0000 0000",
          regex: "^62\\d{0,14}",
          cardtype: "unionpay",
        },
        {
          mask: "0000 0000 0000 0000",
          cardtype: "Unknown",
        },
      ],
      dispatch: (appended: any, dynamicMasked: any) => {
        let number = (dynamicMasked.value + appended).replace(/\D/g, "");
        for (var i = 0; i < dynamicMasked.compiledMasks.length; i++) {
          let re = new RegExp(dynamicMasked.compiledMasks[i].regex);
          if (number.match(re) != null) {
            return dynamicMasked.compiledMasks[i];
          }
        }
      },
    });

    //Mask the Expiration Date
    let expirationdate_mask: any = IMask(expirationdate, {
      mask: "MM{/}YY",
      blocks: {
        YY: { mask: IMask.MaskedRange, from: 0, to: 99 },
        MM: { mask: IMask.MaskedRange, from: 1, to: 12 },
      },
    });

    //Mask the security code
    let securitycode_mask = IMask(securitycode, {
      mask: "0000",
    });

    //define the color swap function
    const swapColor = function (basecolor: any) {
      document.querySelectorAll(".lightcolor").forEach(function (input) {
        input.setAttribute("class", "");
        input.setAttribute("class", "lightcolor " + basecolor);
      });
      document.querySelectorAll(".darkcolor").forEach(function (input) {
        input.setAttribute("class", "");
        input.setAttribute("class", "darkcolor " + basecolor + "dark");
      });
    };

    cardnumber_mask.on("accept", function () {
      switch (cardnumber_mask.masked.currentMask.cardtype) {
        case "american express":
          ccicon.innerHTML = creditCards.amex;
          ccsingle.innerHTML = creditCards.amex_single;
          swapColor("green");
          break;
        case "visa":
          ccicon.innerHTML = creditCards.visa;
          ccsingle.innerHTML = creditCards.visa_single;
          swapColor("lime");
          break;
        case "diners":
          ccicon.innerHTML = creditCards.diners;
          ccsingle.innerHTML = creditCards.diners_single;
          swapColor("orange");
          break;
        case "discover":
          ccicon.innerHTML = creditCards.discover;
          ccsingle.innerHTML = creditCards.discover_single;
          swapColor("purple");
          break;
        case "jcb" || "jcb15":
          ccicon.innerHTML = creditCards.jcb;
          ccsingle.innerHTML = creditCards.jcb_single;
          swapColor("red");
          break;
        case "maestro":
          ccicon.innerHTML = creditCards.maestro;
          ccsingle.innerHTML = creditCards.maestro_single;
          swapColor("yellow");
          break;
        case "mastercard":
          ccicon.innerHTML = creditCards.mastercard;
          ccsingle.innerHTML = creditCards.mastercard_single;
          swapColor("lightblue");

          break;
        case "unionpay":
          ccicon.innerHTML = creditCards.unionpay;
          ccsingle.innerHTML = creditCards.unionpay_single;
          swapColor("cyan");
          break;
        default:
          ccicon.innerHTML = "";
          ccsingle.innerHTML = "";
          swapColor("grey");
          break;
      }
    });

    document.querySelector(".preload")?.classList.remove("preload");
    document
      .querySelector(".creditcard")
      ?.addEventListener("click", function (element: any) {
        if (element.classList.contains("flipped")) {
          element.classList.remove("flipped");
        } else {
          element.classList.add("flipped");
        }
      });

    name.addEventListener("input", function (element: any) {
      if (name.value.length == 0) {
        document.getElementById("svgname")!.innerHTML = "Jonathan Silva";
        document.getElementById("svgnameback")!.innerHTML = "Jonathan Silva";
      } else {
        document.getElementById("svgname")!.innerHTML = element.target.value;
        document.getElementById("svgnameback")!.innerHTML =
          element.target.value;
      }
    });

    cardnumber_mask.on("accept", function () {
      if (cardnumber_mask.value.length == 0) {
        document.getElementById("svgnumber")!.innerHTML = "0123 4567 8910 1112";
      } else {
        document.getElementById("svgnumber")!.innerHTML = cardnumber_mask.value;
      }
    });

    expirationdate_mask.on("accept", function () {
      console.log(expirationdate_mask);
      if (expirationdate_mask.value.length == 0) {
        document.getElementById("svgexpire")!.innerHTML = "01/23";
      } else {
        document.getElementById("svgexpire")!.innerHTML =
          expirationdate_mask.value;
      }
    });

    securitycode_mask.on("accept", function () {
      if (securitycode_mask.value.length == 0) {
        document.getElementById("svgsecurity")!.innerHTML = "985";
      } else {
        document.getElementById("svgsecurity")!.innerHTML =
          securitycode_mask.value;
      }
    });

    name.addEventListener("focus", function () {
      document.querySelector(".creditcard")!.classList.remove("flipped");
    });

    cardnumber.addEventListener("focus", function () {
      document.querySelector(".creditcard")!.classList.remove("flipped");
    });

    expirationdate.addEventListener("focus", function () {
      document.querySelector(".creditcard")!.classList.remove("flipped");
    });

    securitycode.addEventListener("focus", function () {
      document.querySelector(".creditcard")!.classList.add("flipped");
    });
  }, []);
};
