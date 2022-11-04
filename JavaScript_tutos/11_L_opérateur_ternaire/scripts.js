// L'opérateur ternaire ? :

let nombre = -5;
let texte;
// if(nombre >= 0){
//     texte = ("Le nombre est positif ou null");
// }else{
//     texte = ("Le nombre est négatif");
// }

texte = (nombre >= 0) ? "Le nombre est positif ou null" : "Le nombre est négatif";
console.log(texte);

// changer 
let baliseH2 = document.querySelector("#titre1");

baliseH2.addEventListener("click", function(){
    
    // if(this.innerText === "Sous titre"){
    //     this.innerText = "Sous titre cliqué";
    // }else{
    //     this.innerText = "Sous titre";
    // }

    // en ternaire
    this.innerText = (this.innerText === "Sous titre") ? "Sous titre cliqué" : "Sous titre";
});