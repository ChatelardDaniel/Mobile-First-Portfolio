// Attente que la page soit chargée
window.onload = () => {
    const canvas = document.querySelector("canvas")
    // contexte = ctx
    const ctx = canvas.getContext("2d")

    // dessiner un rectangle à 300px de la gauche et du haut de taille 50x50 couleur noir de base, pour changer la couleur mettre 'fillStyle' avant 'fillRect'.
    ctx.fillStyle = "blue" // change la couleur du rectangle
    ctx.fillRect(300, 300, 50, 50)// dessine le rectangle plein

    // dessiner un rectangle non plein en couleur mais juste les bordures en couleur.ctx.strokeRect(rigth, top, width, heigth)
    ctx.strokeStyle = "green" // couleur des bordures
    ctx.strokeRect(20, 20, 100, 100) // dessine un rectangle vide

    // dessiner un triangle
    ctx.fillStyle = "red" // change la couleur
    // on démarre un "chemin"
    ctx.beginPath()
    //place le crayon
    ctx.moveTo(200, 200)// point d'origine
    // on trace une ligne
    ctx.lineTo(100, 200)// premier trait
    // descendre la ligne
    ctx.lineTo(100, 300)// deuxième trait
    // remplir la forme
    ctx.fill()

    // dessiner un cercle
    ctx.beginPath()
    ctx.arc(300, 100, 25, 0, -Math.PI * 2, false)// position du centre gauche, top, diamètre, angle de départ, angle final 90 ou -Math.PI * 2, le sens 'false' tourne dans le sens des aiguilles d'une montre. 'true' sera l'inverse des aiguilles d'une montre.
    ctx.fill() // remplissage de la forme


}