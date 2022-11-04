// Manipuler le DOM Partie1

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