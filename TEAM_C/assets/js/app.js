window.addEventListener("load", ()=>{
    let gamer_img = document.querySelectorAll("#gamers-img-player1");
    let gamer_plus = document.querySelectorAll("#gamers-plus");
    gamer_img.addEventListener("focus", (e)=>{
        document.classList.remove("#gamers-img-player1")
        document.classList.add("#gamer-img-player1-2")
        document.classList.remove("gamer-plus")
        document.classList.add("#gamer-plus-ye")
    })
})