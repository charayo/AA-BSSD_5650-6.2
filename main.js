


document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('pets').addEventListener("click", () => {
        let articles = new ArticleFacade();
        articles.pets();
    })
})
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('texts').addEventListener("click", () => {
        let articles = new ArticleFacade();
        articles.allText()
    })
})
