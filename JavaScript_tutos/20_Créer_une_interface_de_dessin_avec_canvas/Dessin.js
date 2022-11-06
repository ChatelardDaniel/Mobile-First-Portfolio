class Dessin{
    constructor(canvas){
        this.draw = false
        this.prevX = 0
        this.prevY = 0

        this.canvas = document.querySelector(canvas)
        this.ctx = this.canvas.getContext("2d")
        this.ctx.strokeStyle = "black"
        this.ctx.lineWidth = 2

        this.canvas.addEventListener("mousedown", (e) => {
            // Je dessine
            this.draw = true

            // Je stocke les coordonnées de départ
            this.prevX = (e.clientX - this.canvas.offsetLeft) * 400/this.canvas.clientWidth
            this.prevY = (e.clientY - this.canvas.offsetTop) * 400/this.canvas.clientHeight
        })

        this.canvas.addEventListener("mousemove", (e) => {
            if(this.draw){
                // On calcule les coordonnées
                let currX = (e.clientX - this.canvas.offsetLeft) * 400 / this.canvas.clientWidth
                let currY = (e.clientY - this.canvas.offsetTop) * 400 / this.canvas.clientHeight

                // On dessine
                this.dessine(this.prevX, this.prevY, currX, currY)

                // On stocke les nouvelles coordonnées
                this.prevX = currX
                this.prevY = currY
            }
        })

        // Les deux éléments qui peuvent faire d'arrêter de dessiner.
        this.canvas.addEventListener("mouseup", () => {
            this.draw = false
        })

        this.canvas.addEventListener("mouseout", () => {
            this.draw = false
        })
    }

    dessine(depX, depY, destX, destY){
        this.ctx.beginPath()
        this.ctx.moveTo(depX, depY)
        this.ctx.lineTo(destX, destY)
        this.ctx.closePath()
        this.ctx.stroke()
    }

    // Pour changer de couleurs
    setColor(color){
        this.ctx.strokeStyle = color
    }

    // On gère le clic sur le plus
    biggerStroke(){
        this.ctx.lineWidth++
    }

    // On gère le clic sur le moins
    smallerStroke(){
        this.ctx.lineWidth = (this.ctx.lineWidth > 1) ? this.ctx.lineWidth -1 : 1
    }

    // effacer
    erase(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}