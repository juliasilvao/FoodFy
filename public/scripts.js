const currentPage = window.location.pathname
const menuItems = document.querySelectorAll('.menu .links a')
console.log(menuItems)

for (item of menuItems) {
    if (currentPage.includes(item.getAttribute('href'))) {
        item.classList.add('active')
    }
}

const cards = document.querySelectorAll('.card')

for (let i = 0; i < cards.length; i++) {
    // index é a posição do array
    (function(index) {
        // pegando o evento de click
        cards[i].onclick = function() {
                window.location.href = `/recipes/${index}`
            }
            // i é o parametro da função que passa o seu valor para o parametro index
    })(i);
}

const buttons = document.querySelectorAll('.button')
const elements = document.querySelectorAll('.toggle');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {

        if (buttons[i].innerHTML == "Esconder") {
            elements[i].classList.add('hide');
            buttons[i].innerHTML = "Mostrar"
        } else {
            elements[i].classList.remove('hide');
            buttons[i].innerHTML = "Esconder"
        }
    }
}

function addIngredient() {
    const ingredients = document.querySelector("#ingredients");
    const fieldContainer = document.querySelectorAll(".ingredient");

    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;

    // Deixa o valor do input vazio
    newField.children[0].value = "";
    ingredients.appendChild(newField);
}

document.querySelector(".add-ingredient").addEventListener("click", addIngredient);

function addpreparation() {
    const preparations = document.querySelector("#preparations");
    const fieldContainer = document.querySelectorAll(".preparation");

    // Realiza um clone do último preparation adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;

    // Deixa o valor do input vazio
    newField.children[0].value = "";
    preparations.appendChild(newField);
}

document.querySelector(".add-preparation").addEventListener("click", addpreparation);