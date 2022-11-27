# 1 Créer une animation

Partir d'un sélecteur, lui donner des propriété CSS, 'animation-duration' pour la durée de l'animation. Puis 'animation-name' afin de lui donner un nom qui servira lors de la création de la règle CSS '@keyframes'.

```css
selecteur {
    /* combien de temps va durée l'animation. */
    animation-duration: 6s;
    /* nommé l'animation. */
    animation-name: titre;
    /* Délais de lancement de l'animation. */
    animation-delay: -1s;
    /* itération, nombre de fois que l'on répéter l'animation */
    animation-iteration-count: 2;
    /* itération, nombre de fois que l'on répéter l'animation ici à l'infinie, le delay ne sera pris en compte que lors de la première itération. */
    animation-iteration-count: infinite;
    /* Sens de l'animation peut être fait avec 'animation-direction', dont la valeur par défaut est 'normal'. 'normal' correspondra à ce qui aura été défini dans la règle CSS. Avec la valeur 'reverse' on inverse le sens de l'animation. Avec 'alternate' l'animation fera des allez retour */
    animation-direction: alternate;
}

/* créer une règle CSS de l'animation nommée 'titre'. */
@keyframes titre {
    /* Je veux que le titre va de la droite vers la gauche, on utilise des alias 'from' et 'to'. */
    from {
        /* ou va commencer le titre, bien évidemment en dehors de de la boite. */
        transform: translateX(700px);
        opacity: 0;/* l'opacité commence à zéro au début de l'animation. */
    }
    to {
        /* ou va ramener le titre au début de la boite. */
        transform: translateX(0);
        opacity: 1;/* l'opacité fini à 1 à la fin de l'animation. */ 
    }
}

/* Mise en place des règles */
@keyframes titre {
    /* Je veux que le titre va de la droite vers la gauche, on utilise des alias 'from' et 'to'. Avec 0% et 100% cela est égal à 'from' et 'to'. Par contre je peux mettre par exemple 50% entre les deux et modifier le comportement arrivé à 50%, ici en rouge et à 75% en bleu*/

    0% {
        /* ou va commencer le titre, bien évidemment en dehors de de la boite. */
        transform: translateX(700px);
        opacity: 0;
        /* l'opacité commence à zéro au début de l'animation. */
    }

    50% {
        color: red;
    }

    75% {
        color: blue;
    }

    100% {
        /* ou va ramener le titre au début de la boite. */
        transform: translateX(0);
        opacity: 1;
        /* l'opacité fini à 1 à la fin de l'animation. */
    }
}
```
