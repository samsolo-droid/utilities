const cards = document.querySelectorAll(".card")
const links = document.querySelectorAll("a")

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("selected")
    })
})
links.forEach(link => {
    link.addEventListener("click", async (event) => {
        temp = 5
        link.parentNode.parentNode.append(`\nVous allez etre redirige dans ${
            temp
        }
            seconde`)
        await setTimeout(() => { window.location = link.getAttribute("href") }, 5000);
    })
})
