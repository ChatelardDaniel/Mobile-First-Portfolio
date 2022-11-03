// Les fonctions

// commentaite jsdoc
/**
 * Cette fonction fonction fait un console.log qui dit bonjour
 * @param {string} prenom Prénom de la personne
 */

// Création de la fonction direBonjour
function direBonjour() {
    console.log("Bonjour")
}

// Appel de la fonction direBonjour
direBonjour();

// Création de la fonction direBonsoir avec paramètre de fonction
function direBonsoir(prenom) {
    console.log(`Bonsoir ${prenom}`)
}

// Appel de la fonction direBonsoir avec paramètre de fonction
direBonsoir("Daniel");

// Création de la fonction direBonsoir avec paramètre de fonction et un paramètre par défaut "Benoit"
function direBonsoir(prenom = "Benoit") {
    console.log(`Bonsoir ${prenom}`)
}

// Appel de la fonction direBonsoir avec paramètre de fonction et un paramètre par défaut "Benoit"
direBonsoir()

// Récupérer quelque chose via une fonction
/**
 * Cette fonction addition deux nombres
 * @param {number} nb1
 * @param {number} nb2
 * @returns number
 */
function addition(nb1, nb2){
    let total = nb1 + nb2;
    return total;// return, retourne une valeur et stop l'exécution de la fonction. S'il y a du code après le return, il ne sera jamais exécuté.
}

let resultat = addition(5, 12);
console.log(resultat);
