// Manipuler les chaînes de caractères
let texte = "J'ai une jolie brouette";

// l'antislash, permet déchapper un caratère '\'
let texte2 = 'J\'ai un nouveau texte';

// le backtick 
let texte3 = `Un autre texte`;

// La concaténation
let prenom = "Benoit";
let nom = "Dupont";
let phrase = "Bonjour " + prenom +" " + nom;

// Concaténation avec les Backticks
let phrase2 =`Bonjour ${prenom} ${nom}`;

// donne moi le quatrième caractère
//console.log(phrase2[3]);

// Longueur de la chaîne de caractère avec 'length'
console.log(phrase2.length);

// savoir si une chaine contient le mot Benoit, renverra -1 s'il ne la pas trouve, ou une nombre qui correspondra à la position de la première lettre du mot.
console.log(phrase2.indexOf("Benoit"));

// choisir une partie de la chaîne de caractères à afficher. Exemple entre 8 et 12.
console.log(phrase2.slice(8, 12));

// Mettre en Majuscule
console.log(phrase2.toUpperCase());

// Mettre en Minuscule
console.log(phrase2.toLowerCase());

// Remplace un mot par un autre avec replace()
console.log(phrase2.replace("Benoit", "Bruno"));