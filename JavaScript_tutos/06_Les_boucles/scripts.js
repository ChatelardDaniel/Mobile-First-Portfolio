// Les boucles

// La boucle for
for(let compteur = 0; compteur <= 10; compteur++){
    console.log(compteur);
}

// La boucle for compter de 5 en 5
for(let compteur1 = 0; compteur1 <= 100; compteur1 += 5){
    console.log(compteur1);
}

// Exemple pour un mot de passe
// let pass = "azerty"

// while(pass != "brouette"){
//     pass = prompt("Entrez le mot de passe");
// }

// Pour les tableaux, ancien façon
let clients = ["Robert", "Bruno", "Pascale","Séverine"];
console.table(clients);

for(let ligne = 0; ligne < clients.length; ligne++){
    console.log(clients[ligne]);
}

// Pour les tableaux, nouvelle façon
for(let ligne in clients){
    console.log(clients[ligne]);
}

// Avec for of
for(let valeur of clients){
    console.log(valeur);
}

//forEach, permet de récupérer la valeur et l'index si on le veux
clients.forEach((valeur, index) => {
    console.log(valeur, index);
});
//forEach, permet de récupérer la valeur et l'index si on le veux, si l'on ajoute tableau il afficher un Array[] dans la console.
clients.forEach((valeur, index, tableau) => {
    console.log(tableau);
});