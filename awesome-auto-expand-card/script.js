const cards = document.querySelectorAll(".card")

cards.forEach(card => {
    card.addEventListener("click", (event) => {
        for(i=0; i < cards.length; i++){
            if(cards[i] != event.target){
                cards[i].classList.remove("grid-span");
            }
            // else {
            //     cards[i].classList.add("grid-span")
            // }
        }

        event.target.classList.add("grid-span")
    })
})