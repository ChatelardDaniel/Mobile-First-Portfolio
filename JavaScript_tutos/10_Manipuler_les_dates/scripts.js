// Manipuler les dates
// Déclarer la date d'aujourd'hui
let maDate = new Date();

// Déclarer une autre date
let autreDate = new Date("2022-01-12 14:25:14");

// Janvier égal à zéro, le dimanche aussi
console.log(autreDate);

// calculer le temps entre deux dates temps en millisecondes
let temps = maDate - autreDate;
console.log(temps);

// Dans 1 jour il y a 24h * 60min * 60s * 1000 = 86400000ms
// arrondir avec Math.floor()
let jours = Math.floor(temps/86400000);
console.log(jours);

// Reste temps - (nbre de jours * durée)
let reste = temps - jours * 8640000;
// ou faire avec modulo
reste = temps % 86400000;
console.log(reste);

// savoir les heures 60min * 60s * 1000 = 3600000ms
let heures = Math.floor(reste / 3600000);
console.log(heures);