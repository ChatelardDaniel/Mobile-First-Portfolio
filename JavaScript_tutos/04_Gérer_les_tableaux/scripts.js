// Manipuler les tableaux
let tableau = [10, "Brouette",true, 18.25];

console.log(tableau);

// console.table(), permet d'afficher un mini tableau dans la console.
console.table(tableau);

// afficher le mot Brouette du tableau, tapez son index.
console.log(tableau[1]);

// inverser le sens d'affichage d'un tableau avec reverse()
tableau.reverse();
console.table(tableau);

// Ajouter une ou plusieurs valeur dans un tableau
// au début
tableau.unshift("Bonjour", "Benoit");
console.table(tableau);

// Ajouter une ou plusieurs valeurs à la fin du tableau
tableau.push("Au revoir", 14);
console.table(tableau);

// Retirer la première valeur du tableau
let valeur = tableau.shift();
console.table(valeur);

// Retire la dernière valeur du tableau
valeur = tableau.pop();
console.table(valeur);

// Modifier des valeurs dans le tableau ou insérer à la l'index 2
tableau.splice(2, 0, "Inséré");
console.table(tableau);

// Modifier des valeurs dans le tableau
// Ajout à l'index 2 et supprimer les trois suivants
tableau.splice(2, 3, "Inséré");
console.table(tableau);

// Parcourir un tableau
// Méthode 1 (ancienne)
for(let ligne = 0; ligne < tableau.length; ligne++){
    console.log(tableau[ligne])
}

// Méthode 2 for in, j'ai accès à l'index mais pas aux valeurs
for(ligne in tableau){
    console.log(tableau[ligne])
}

// Méthode 3 for of, j'ai accès aux valeurs mais pas à l'index
for(let valeur of tableau){
    console.log(valeur)
}

// Méthode 4 forEach, j'ai accès à l'index et aux valeurs
console.log("forEach");
tableau.forEach((valeur, index) =>{
    console.log(index);
    console.log(valeur);
})

/********** transformation de Tableau **********/ 

// Map
let nouveauTableau = tableau.map((valeur, index) => {
    if(!isNaN(valeur)){
        return valeur * 2
    }else{
        return valeur
    }
})

console.table(nouveauTableau);

// filter
let tableauTexte = tableau.filter(element => {
    return isNaN(element)
})

console.table(tableauTexte);

// Itération
let iterateur = tableau.entries()

valeur = iterateur.next().value
console.log(valeur);
valeur = iterateur.next().value
console.log(valeur);
valeur = iterateur.next().value
console.log(valeur);

// Recherche
valeur = tableau.find(element => element.length > 6)
console.log(valeur);

valeur = tableau.find(element => element > 6)
console.log(valeur);

// Transformer un tableau en texte
console.log(tableau.toString());