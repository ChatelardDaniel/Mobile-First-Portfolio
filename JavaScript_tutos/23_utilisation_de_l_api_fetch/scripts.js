// Requête "GET"
fetch("https://jsonplaceholder.typicode.com/posts")
.then((reponse) => {
    return reponse.json()
})
.then((donnees) => {
    // for(let post of donnees){
    //     console.log(post.title)
    // }
})

// Requête POST
let article = {
    userId: 7,
    title: "Titre de mon article",
    body: "contenu de l'article"
}
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(article)
})
.then((reponse) => {
    if(reponse.ok) console.log("Article créé")
})

// Requête PUT
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(article)
})
.then((reponse) => {
    if(reponse.ok) console.log("Article créé")
})

// Requête PATCH
let data = {
    title: "Titre de mon article"
}
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify(data)
})
.then((reponse) => {
    if(reponse.ok) console.log("Article modifié")
})