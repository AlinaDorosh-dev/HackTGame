window.addEventListener("load", ()=>{
    let gamer_img = document.querySelectorAll(".gamers-img-player1");
    gamer_img.forEach(element => {
        element.addEventListener("mouseover", () =>{
            element.classList.remove("gamers-img-player1");
            element.classList.add("gamers-img-player1-2");
            element.nextElementSibling.classList.remove("gamers-player1-h3");
            element.nextElementSibling.classList.add("gamers-player1-h3-hide");
            element.nextElementSibling.nextElementSibling.classList.remove("gamers-plus");
            element.nextElementSibling.nextElementSibling.classList.add("gamers-plus-ye");
            console.log(element.nextElementSibling.nextElementSibling);
        });
    });
    let gamer_plus = document.querySelectorAll(".gamers-plus");
    gamer_plus.forEach(element =>{
        element.addEventListener("mouseover", (player)=>{
            element.classList.remove("gamer-plus-ye");
            element.classList.add("gamer-plus-wh");
        });
    })
});


/*element.classList.remove("gamers-plus");
element.classList.add("gamers-plus-ye");
element.classList.remove("gamers-player1-h3");
element.classList.add("gamers-player1-h3-hide");*/