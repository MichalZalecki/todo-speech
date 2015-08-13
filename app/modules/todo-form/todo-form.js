"use strict";

require("./todo-form.scss");

let todoForm            = document.querySelector("#todo-form");
let contentField        = document.querySelector(".content-field");
let contentFieldFinal   = document.querySelector(".content-field__final");
let contentFieldInterim = document.querySelector(".content-field__interim");
let buttonSpeech        = document.querySelector(".content-buttons__speech");
let speechMute          = document.querySelector(".content-buttons__speech__mute");
let speechUnmute        = document.querySelector(".content-buttons__speech__unmute");

// focus at the end of the element
function focusCursorAtTheEnd(elem) {
  if (elem.childNodes.length) {
    let range = document.createRange();
    let sel = window.getSelection();
    let lastChildNode = elem.childNodes[elem.childNodes.length-1];
    range.setStart(lastChildNode, lastChildNode.length);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
  }
  elem.focus();
}

contentField.addEventListener("click", () => {
  focusCursorAtTheEnd(contentFieldFinal)
});

contentFieldFinal.addEventListener("click", (e) => {
  // allow cursor to change position inside contentFieldFinal
  e.stopPropagation();
});

// simple focus fake
contentFieldFinal.addEventListener("focus", () => {
  contentField.classList.add("focus");
});
contentFieldFinal.addEventListener("blur", () => {
  contentField.classList.remove("focus");
});

// ES6: Enhanced Object Literals
export default { form: todoForm,
  contentFieldFinal,
  contentFieldInterim,
  buttonSpeech,
  speechMute,
  speechUnmute,
  focusCursorAtTheEnd };
