"use strict";

let random = Math.trunc(Math.random() * 5 + 1);

function sD() {
  const userInput = document.getElementById("text").value;
  if (userInput === null || userInput === "") {
    alert(`number empty`);
  } else {
    alert(`you typed ${userInput} and the number was ${random}`);
  }
}
