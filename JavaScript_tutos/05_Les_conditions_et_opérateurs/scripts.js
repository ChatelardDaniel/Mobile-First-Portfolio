// Conditions et opérations de comparaison.

let nombre = 12;

// == est une égalité faible, compare que la valeur, pas le type.
// === égalité stricte, compare la valeur et le type.
if(nombre === 12){
    console.log("Le nombre est égal à 12");
}else{
    console.log("Le nombre n'est pas égal à 12");
}

/* != inégalité faible */
/* !== inégalité stricte */
nombre = 13;
if(nombre != 12){
    console.log("Le nombre n'est pas égal à 12");
}else{
    console.log("Le nombre est égal à 12");
}

// < inférieur à
// <= inférieur ou égal
// > supérieur
// >= supérieur ou égal
if(nombre < 12){
    console.log("Le nombre est plus petit que 12");
}else{
    console.log("Le nombre n'est pas plus petit que 12");
}

// vérifier un booléen
let bool = true;
if(bool){
    console.log("Le booléen est à true")
}else{
    console.log("Le booléen est à false")
}

// Vérifier un booléen et nombre
// && AND
if(bool && nombre < 12){
    console.log("Le booléen est à true et le nombre est plus petit que 12")
}else{
    console.log("Le booléen est à false")
}

// Vérifier un booléen ou nombre
// || OU
if(bool || nombre < 12){
    console.log("Le booléen est à true ou le nombre est plus petit que 12")
}else{
    console.log("Le booléen est à false")
}