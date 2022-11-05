// Déclarer une constante

const PI = 3.14;

console.log(PI);

if(PI > 0){
    const BROUETTE = true;
}// Après cette accolade, BROUETTE disparaît. la constante est limité au bloc dans lequel elle est crée.

// Déclarer une variable

let nombre = 25;
var nombre2 = 12;

if(PI > 0){
    let nombre3 = 14;
    var nombre4 = 15;
}// Après cette accolade, nombre3 disparaît. la variable déclarée avec 'let' est limité au bloc dans lequel elle est crée. Par contre avec 'var' on peut l'afficher dans le console.log(nombre4) en dehors du bloc.

console.log(nombre4)
