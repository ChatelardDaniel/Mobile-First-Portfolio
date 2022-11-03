// L'opérateur de décomposition "spread operator"

const nombre = [25, 12, 8];

function addition(nb1, nb2, nb3){
    return nb1 + nb2 + nb3;
}

let resultat = addition(10, 20, 30);

console.log(resultat);

// Avec le "spread operator"

const nombre2 = [25, 12, 8];

function addition2(nb1, nb2, nb3){
    return nb1 + nb2 + nb3;
}

let resultat1 = addition2(...nombre2);

console.log(resultat1);

// Avec l'objet date

const tableauDate = [2022, 1, 15];
let maDate = new Date(...tableauDate);

console.log(maDate)

// inclure un tableau dans un autre tableau avec le spread operator

const tableauNombre = [48, 74, ...nombre, 26];

console.table(tableauNombre);

// concaténer deux tableaux avec le spread operator

const t1 = ["a", "b", "c"];
const t2 = ["d", "e", "f"];

const t3 = [...t1, ...t2];
console.table(t3);

// Avec des objets avec le spread operator

const nom = {
    nom: "Dupont"
};

const prenom = {
    prenom: "Bruno"
};

const profil = {...nom, ...prenom};
console.log(profil);