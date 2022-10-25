const cards = document.querySelectorAll(".card")
const links = document.querySelectorAll("a")

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("selected")
    })
})
links.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault()
        setTimeout(() => { window.location = link.getAttribute("href") }, 5000);
    })
})
