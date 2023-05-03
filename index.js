let button = document.querySelector(".btn__start");
let button2 = document.querySelector(".btn__reset");
let counterText = document.querySelector(".counter");

let counter = 0;

button.addEventListener("click", function () {
  counter = counter + 1;

  counterText.innerText = counter;
});

button2.addEventListener("click", function () {
  counter = 0;
  
  counterText.innerText = counter;
});

// // DOM - Document Object Model - объектная модель документа

// console.log(document);
