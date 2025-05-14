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
if (window.location.pathname.includes("testEnergie.html")) {
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
}


/* Code provenant de https://www.youtube.com/watch?v=08hkOS9ssmk&t=933s&ab_channel=%C3%89coleduWeb ajusté à mon site */
const sections = document.querySelectorAll("section");

let options = {
    rootMargin: "-40% 0px",
    threshold: 0
}

function handleIntersect(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = 1;
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options);

sections.forEach(section => {
    observer.observe(section)
})

const divAnim = document.querySelector(".bloc__animCharge");
document.addEventListener("DOMContentLoaded", function() {
    document.documentElement.classList.add("pageAnimation");
    /*document.body.style.overflow = "hidden";*/

    document.body.addEventListener("animationend", function() {
        /*document.body.style.overflow = "auto";*/
        divAnim.style.display = "none";
    });
});

document.querySelector('.scroll').addEventListener('click', function() {
    // Trouver le premier élément <section>
    const firstSection = document.querySelector('section');
    
    if (firstSection) {
        // Calculer la position de défilement ajustée
        const offsetTop = firstSection.getBoundingClientRect().top + window.pageYOffset - 150;
        
        // Faire défiler jusqu'à l'élément avec un décalage de 150px
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
});
