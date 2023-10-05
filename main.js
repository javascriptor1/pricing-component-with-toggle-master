"use strict";

const inputEl = document.getElementById("toggle");

const basicMonthlyPrice = document.getElementById("basic-monthly");
const basicYearlyPrice = document.getElementById("basic-yearly");

const professionalMonthlyPrice = document.getElementById(
  "professional-monthly"
);
const professionalYearlyPrice = document.getElementById("professional-yearly");

const masterMonthlyPrice = document.getElementById("master-monthly");
const masterYearlyPrice = document.getElementById("master-yearly");

function updatePrice() {
  if (inputEl.checked) {
    basicMonthlyPrice.classList.remove("hidden");
    basicYearlyPrice.classList.add("hidden");
    professionalMonthlyPrice.classList.remove("hidden");
    professionalYearlyPrice.classList.add("hidden");
    masterMonthlyPrice.classList.remove("hidden");
    masterYearlyPrice.classList.add("hidden");
  } else {
    basicMonthlyPrice.classList.add("hidden");
    basicYearlyPrice.classList.remove("hidden");
    professionalMonthlyPrice.classList.add("hidden");
    professionalYearlyPrice.classList.remove("hidden");
    masterMonthlyPrice.classList.add("hidden");
    masterYearlyPrice.classList.remove("hidden");
  }
}

inputEl.addEventListener("change", updatePrice);
