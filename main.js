const cards = document.querySelectorAll(".card")
const links = document.querySelectorAll("a")

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("selected")
    })
})
links.forEach(link => {
    link.addEventListener("click", async (event) => {
        event.preventDefault()
        temp = 5
        await setTimeout(() => { window.location = link.getAttribute("href") }, 5000);
        link.parentNode.parentNode.append(`\nVous allez etre redirige dans ${
            temp
        }
            seconde`)
    })
})
