# Exercice d'animation

## 1 Mettre en place la structure du 'html'

Créer un dossier 'images' pour les photos.

```html
<body>
    <!-- mise en place du site -->
    <div id="site">
        <header>Mon site 100% nature</header>
        <div id="slider">
            <div id="images">
                <img src="images/plage_01.jpg" alt="">
                <img src="images/plage_02.jpg" alt="">
                <img src="images/plage_03.jpg" alt="">
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <article>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, sint autem excepturi accusantium, corporis quam cumque omnis suscipit aspernatur quae, error necessitatibus vitae minima ducimus eos. Pariatur recusandae dignissimos architecto!
            Nemo unde eos placeat error dicta sequi hic dolor provident, eius molestiae vero corporis reprehenderit architecto pariatur commodi animi quo itaque autem nobis odio laborum qui? Voluptatibus aperiam ea minus?
            Dolore id, iste distinctio magnam dolorum impedit aspernatur, nulla laudantium eaque aliquam, veniam ipsam quia doloremque modi officia. Consectetur ea sit assumenda nihil, quam reiciendis illo sequi quod debitis quasi.
            Libero aliquam repudiandae nesciunt ipsa aperiam repellendus quaerat tempore nihil perspiciatis temporibus placeat, iusto sed, vel blanditiis natus possimus odit, pariatur minus culpa excepturi. Ipsa rem numquam porro ad exercitationem!
            Ipsa nulla, quidem explicabo soluta repellendus id neque nesciunt harum sapiente beatae eaque, repellat voluptatem provident incidunt molestiae voluptatibus fuga quasi? Corrupti quisquam totam sit! Expedita provident distinctio sequi id?
            Eligendi assumenda odit id, iste consectetur perferendis quidem magni, asperiores eaque dicta aliquid distinctio voluptatum ducimus. Totam voluptas iste cum non ratione laudantium provident quibusdam repudiandae atque obcaecati, a incidunt.
            Et, laborum nobis atque illum saepe repellendus reiciendis architecto doloremque, sapiente consequatur dolorum reprehenderit praesentium! Optio natus blanditiis ullam architecto error temporibus quisquam! Perferendis culpa, eum corporis consectetur neque accusantium?
            Similique suscipit fugit aut animi molestiae modi amet sapiente dolores a odio nulla natus recusandae autem provident sed, numquam voluptatibus reiciendis delectus praesentium ullam officiis quo nobis quia necessitatibus. Veritatis!
            Culpa, similique dolorum sapiente, officiis ut eum illum tempore quis itaque voluptate asperiores aliquid iste dicta commodi earum. Ipsum iusto similique at ab numquam eum praesentium necessitatibus nam dolore reiciendis.
            Exercitationem dolores cumque vero blanditiis distinctio dolorem obcaecati. Iusto ducimus vel vero explicabo nam aut nobis. Fugiat ex iste fugit eveniet eum earum obcaecati harum quam totam. Dicta, expedita modi.
            Voluptate quidem quisquam laboriosam eaque, aperiam earum sed voluptatum distinctio odit minus beatae esse accusamus officia tempora obcaecati excepturi laudantium magni quas ipsum. Error ullam doloribus aspernatur, saepe praesentium sunt.
            Eveniet temporibus vitae ipsum voluptatem explicabo, impedit consectetur eligendi voluptate ratione aspernatur excepturi molestiae, rem culpa dolor non aliquid dolorem sapiente corrupti! Culpa perspiciatis reprehenderit voluptates nam repellat adipisci officia.</p>
        </article>
        <footer>
            &copy;Mon site nature
        </footer>
    </div>
</body>
```

## 2 Mise en place du CSS

```css
body {
    /* neutralisé les marges par défaut du navigateur */
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    background-color: #ccc;
}

/* le bloc avec l'identifiant '#site' */

#site {
    width: 640px;/* même largeur que les photos*/
    margin: auto;/* centrer le bloc 'site' */
    border-left: 1px solid #7e7e7e;
    border-right: 1px solid #7e7e7e;
    background-color: #f2f2f2;
}

header, footer {
    background-color: #060;
    text-align: center;
    color: #fff;
    padding-top: 15px;
    padding-bottom: 15px;
}

nav {
    background-color: #000;
}

nav ul {
    list-style: none;/* suprimer les puces des listes */
    margin: 0;/* supprimer les marges extérieur */
    padding: 0;/* supprimer les marges intérieur */
    display: flex;/* Alignement des listes */
    justify-content: flex-end;/* positionnement à droite */
}

nav li {
    padding: 10px;/* marge intérieur des listes */
}

nav a {
    text-decoration: none;/* supprimer les soulignement des liens */
    color: #3f0;
}

/* remettre les soulignement des liens au survol de la sourie */
nav a:hover {
    text-decoration: underline;
}

article {
    width: 85%;
    margin: auto;
    text-align: justify;
    border: 1px solid #ccc;
    padding: 20px;
    background-color: #fff;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
}
```

## 3 Mise en place de l'animation

```css
/* Pour le responsive */
img {
    width: 100%;
}

#slider {
    overflow: hidden;
}
#images {
    display: flex;
    animation-name: mesImages;
    animation-duration: 15s;
    animation-iteration-count: infinite;
}

@keyframes mesImages {
    0% {
        transform: translateX(0);
    }
    33% {
        transform: translateX(-100%);/* largeur de l'image */
    }
    66% {
        transform: translateX(-200%);/* largeur de l'image fois 2 */
    }
    100% {
        transform: translateX(0);
    }
}
```
