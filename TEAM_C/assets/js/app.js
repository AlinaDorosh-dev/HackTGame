window.addEventListener("load", ()=>{
    let gamer_img = document.querySelectorAll(".gamers-player1");
    gamer_img.forEach(element => {
        element.addEventListener("mouseover", () =>{
            element.firstElementChild.classList.remove("gamers-img-player1");
            element.firstElementChild.classList.add("gamers-img-player1-2");
            element.firstElementChild.nextElementSibling.classList.remove("gamers-player1-h3");
            element.firstElementChild.nextElementSibling.classList.add("gamers-player1-h3-hide");
            element.lastElementChild.classList.remove("gamers-plus");
            element.lastElementChild.classList.add("gamers-plus-ye");
        });
        element.addEventListener("mouseleave", ()=>{
            element.firstElementChild.classList.remove("gamers-img-player1-2");
            element.firstElementChild.classList.add("gamers-img-player1");
            element.firstElementChild.nextElementSibling.classList.remove("gamers-player1-h3-hide");
            element.firstElementChild.nextElementSibling.classList.add("gamers-player1-h3");
            element.lastElementChild.classList.remove("gamers-plus-ye");
            element.lastElementChild.classList.add("gamers-plus");
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


/*element.classList.remove("gamers-plus");
element.classList.add("gamers-plus-ye");
element.classList.remove("gamers-player1-h3");
element.classList.add("gamers-player1-h3-hide");*/