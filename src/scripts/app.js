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

// afficher données aide de Copilot pour corriger le code

window.onload = function() {
    fetch('../assets/countries-FR.json')
    .then(response => response.json())
    .then(data => {
        displayPays(data);
    });
};

function displayPays(data) {
    const selection = document.getElementById('pays');
    // code de copilot
    for(const code in data) {
        if(data.hasOwnProperty(code)) {
            let option = document.createElement('option');
            option.value = code;
            option.textContent = data[code];
            // Définir "Belgique" comme valeur par défaut
            if(option.textContent === "Belgique") {
                option.selected = true;
            }
            selection.appendChild(option);
        }
    }
    // fin code copilot
}

const envoyer = document.querySelector(".submit");
envoyer.addEventListener("click", displayResult);

function displayResult(event) {
    event.preventDefault();

    var montantInput = document.getElementById('quantite');
    var montant = document.getElementById('montant');
    montant.innerHTML = "";

    // afficher la div des résultats
    const divResult = document.querySelector(".resultatsRemerciement");
    divResult.classList.add("div--afficher");

    // afficher les résultats
    var montantValue = parseInt(montantInput.value, 10);

    if (montantValue >= 0 && montantValue <= 200) {
        montant.innerHTML += " trop peu";
    }

    else if (montantValue >= 201 && montantValue <= 400) {
        montant.innerHTML += " peu";
    }
    else if (montantValue >= 401 && montantValue <= 600) {
        montant.innerHTML += " moyenne";
    }
    else if (montantValue >= 601 && montantValue <= 800) {
        montant.innerHTML += " bonne";
    }

    else if (montantValue >= 801 && montantValue <= 1000) {
        montant.innerHTML += " très bonne";
    }

    else if (montantValue >= 1001) {
        montant.innerHTML += " superbe";
    }

    else {
        montant.innerHTML += "";
    }
}


