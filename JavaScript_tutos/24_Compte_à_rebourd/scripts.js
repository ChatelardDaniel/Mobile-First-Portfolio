// Date actuelle
const maintenant = new Date()

// Date de fin du compteur
const noel = new Date("2022-12-25 00:00:00")

// Durée entre les 2 dates
const duree = noel - maintenant

// Calculer le nombre de jours dans "duree"
// durée d'un jour: 24h * 60min * 60s * 1000ms
// = 86 400 000 ms
// Math.floor, arrondi à l'inférieur.
let jours = Math.floor(duree / (24 * 60 * 60 * 1000))

// On calcule le temps restant après le calcul de "jours"
let reste = duree % (24 * 60 * 60 * 1000)

// calcul du nombre d'heures dans le reste
// durée d'une heure: 60min * 60s * 1000ms
let heures = Math.floor(reste / (60 * 60 * 1000))

// On calcule le temps restant après retrait des heures
reste = reste % (60 * 60 *1000)

// Calcul du nombre de minutes dans le reste
// Durée d'une minutes: 60s * 1000
let minutes = Math.floor(reste / (60 * 1000))

reste = reste % (60 * 1000)

let secondes = Math.floor(reste / 1000)

let interval
window.onload = () => {
    afficheNombres()
    interval = setInterval(decompte, 1000)
}


/**
 * Cette fonction met à jour le compteur(affichage)
 */
function afficheNombres(params) {
    document.querySelector("#jours").innerText = jours
    document.querySelector("#heures").innerText = heures
    document.querySelector("#minutes").innerText = minutes
    document.querySelector("#secondes").innerText = secondes
}

/**
 * Cette fonction décompte 1 seconde
 */

function decompte(){
    if(secondes){
        secondes--
    }else if(minutes){
        secondes = 59
        minutes--
    }else if(heures){
        secondes = minutes = 59
        heures--
    }else if(jours){
        secondes = minutes = 59
        heures = 23
        jours--
    }else{
        clearInterval(interval)
    }
    afficheNombres()
}