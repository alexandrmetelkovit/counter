const counterNum = document.querySelector(".js-counter__value");
const addOneDayButton = document.querySelector(".js-counter__addOneDayButton");
const addOTwoDayButton = document.querySelector(".js-counter__addTwoDayButton");
const resetButton = document.querySelector(".js-counter__resetButton");

const COUNTER_INITIAL_VALUE = 0;

let counter = COUNTER_INITIAL_VALUE;

counterNum.innerText = counter;

addOneDayButton.addEventListener("click", function () {
  counter++;
  counterNum.innerText = counter;
});

addOTwoDayButton.addEventListener("click", function () {
  counter = counter + 2;
  counterNum.innerText = counter;
});

resetButton.addEventListener("click", function () {
  counter = COUNTER_INITIAL_VALUE;
  counterNum.innerText = counter;
});
