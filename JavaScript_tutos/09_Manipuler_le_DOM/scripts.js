/********** Manipuler le DOM Partie1 **********/ 

// aller chercher un ou des éléments dans le document.
// par la balise
let balisesH2 = document.querySelectorAll("h2");
console.log(balisesH2);

// aller chercher la deuxième balise li
let baliseLi = document.querySelector("li:nth-child(2)");
console.log(baliseLi);

// aller chercher une class
let classeRow = document.querySelectorAll(".row")
console.log(classeRow);

// aller chercher un élément avec un id
let titre2 = document.querySelector("#titre2");
console.log(titre2);

// avec une boucle for sur la classeRow
for(let row of classeRow){
    console.log(row);
    //changer la couleur du texte par exemple
    row.style.color = "red";
}

/********** Manipuler le DOM Partie2 **********/ 
// écouter le click sur les balises h2 et changer la couleur lorsque l'on click dessus.
for(let baliseH2 of balisesH2){
        baliseH2.addEventListener("click", () => {
        baliseH2.style.color = "green";
    })

    // Avec un appel de la fonction changeCouleur sur baliseLi
    baliseLi.addEventListener("click", changeCouleur)

    // Ajouter une bordure avec la fonction ajoutBordures, lorsque j'entre avec la sourie sur l'élément.
    baliseLi.addEventListener("mouseenter", ajoutBordures);

    // Enlever une bordure avec la fonction retraitBordures,lorsque je sors avec la sourie de l'élément.
    baliseLi.addEventListener("mouseleave", retraitBordures);
}

// via une fonction universel, je peut changer la couleur d'un élément.
function changeCouleur(){
    this.style.color = "blue";
}

function ajoutBordures(){
    this.style.border = "2px solid black";
    this.removeEventListener("mouseenter", ajoutBordures);
}

function retraitBordures(){
    this.style.border = "none";
    this.removeEventListener("mouseleave", retraitBordures);
}

/********** Manipuler le DOM Partie3 **********/ 
let baliseP = document.querySelector("#titre2 + p");

// changer le texte de mon élément h2
baliseP.previousElementSibling.innerText = "Texte modifié";

// Manipuler les parents
baliseLi = document.querySelector("li:last-child");
console.log(baliseLi.parentElement);

// depuis la balise p, je veux aller chercher la section parente
let section1 = baliseP.parentElement.previousElementSibling;
console.log(section1);