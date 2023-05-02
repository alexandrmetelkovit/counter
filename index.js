let button = document.querySelector('button');
let counterText = document.querySelector('.counter');

let counter = 0;

button.addEventListener('click', function() {
    counter = counter + 1;

    counterText.innerText = counter;


});



// // DOM - Document Object Model - объектная модель документа

// console.log(document);