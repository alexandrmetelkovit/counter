const pressBtnOnePool = document.querySelector(".js-pressBtnOnePool");
const pressBtnTwoPool = document.querySelector(".js-pressBtnTwoPool");
const pressReset = document.querySelector(".js-pressReset");
const counterText = document.querySelector(".js-counter");

let counter = 0;
const COUNTER_INITIAL_TEXT = counter;

pressBtnOnePool.addEventListener("click", function () {
  counter++;

  counterText.innerText = counter;
});

pressBtnTwoPool.addEventListener("click", function () {
  counter = counter + 2;

  counterText.innerText = counter;
});

pressReset.addEventListener("click", function () {
  counter = COUNTER_INITIAL_TEXT;

  counterText.innerText = COUNTER_INITIAL_TEXT;
});

// DOM  - Document Object Model
// console.log(document)  // управление элементами на странице
