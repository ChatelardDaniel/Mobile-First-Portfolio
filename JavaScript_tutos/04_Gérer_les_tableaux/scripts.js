// Manipuler les tableaux
let tableau = [10, "Brouette",true, 18.25];

console.log(tableau);

// console.table(), permet d'afficher un mini tableau dans la console.
console.table(tableau);

// afficher le mot Brouette du tableau, tapez son index.
console.log(tableau[1]);

// inverser un tableau avec reverse()
tableau.reverse();
console.table(tableau);

// Ajouter une ou plusieurs valeur dans un tableau
// au début
tableau.unshift("Bonjour", "Benoit");
console.table(tableau);

// à la fin
tableau.push("Au revoir", 14);
console.table(tableau);

// Retirer une valeur du tableau
// La 1er
let valeur = tableau.shift();
console.table(valeur);

// La dernière
valeur = tableau.pop();
console.table(valeur);

// Modifier des valeurs dans le tableau
tableau.splice(2, 0, "Inséré");
console.table(tableau);

// Modifier des valeurs dans le tableau
// Ajout à l'index 2 et supprimer les trois suivants
tableau.splice(2, 3, "Inséré");
console.table(tableau);