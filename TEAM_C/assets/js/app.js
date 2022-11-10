window.addEventListener("load", ()=>{
    let gamer_img = document.querySelectorAll(".gamers-player1");
    gamer_img.forEach(element => {
        element.addEventListener("mouseover", () =>{
            element.lastElementChild.firstElementChild.classList.remove("gamers-plus");
            element.lastElementChild.firstElementChild.classList.add("gamers-plus-ye");
        });
        element.addEventListener("mouseleave", ()=>{
            element.lastElementChild.firstElementChild.classList.remove("gamers-plus-ye");
            element.lastElementChild.firstElementChild.classList.add("gamers-plus");
        });
    });
    let gamer_plus = document.querySelectorAll(".gamers-plus");
    gamer_plus.forEach(element =>{
        element.addEventListener("mouseover", ()=>{
            element.classList.remove("gamer-plus-ye");
            element.classList.add("gamer-plus-wh");
        });
        element.addEventListener("mouseleave", ()=>{
            element.classList.remove("gamer-plus-wh");
            element.classList.add("gamer-plus-ye");
        });
    });
});