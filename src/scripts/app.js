"use strict";

/* menu */

var menuBtn = document.querySelector(".menu__btn");
var menuElements = document.querySelectorAll(".menu__li");

menuBtn.addEventListener("click", toggleMenu);
menuElements.forEach((element) => {
    element.addEventListener("click", toggleMenu);
});

function toggleMenu() {
    var menu = document.querySelector(".menu");
    menu.classList.toggle("menu--open");
};

// afficher données

window.onload = function() {
    fetch('../assets/countries-FR.json')
    .then(response => response.json)
    .then(data => {
        displayPays(data);
    });
};

function displayPays(data) {
    const selection = document.getElementById('pays');

    for(const code in data) {
        if(data.hasOwnProprety(code)) {
            let option = document.createElement('option');
            option.value = code;
            option.textContent = data[code];
            selection.appendChild(option);
        }
    }
}
