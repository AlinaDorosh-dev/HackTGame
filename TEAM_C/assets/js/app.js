window.addEventListener("load", () => {
  let iconMenu = document.body.querySelector(".icon-menu");
  let mainMenu = document.body.querySelector(".main-menu");
  let closeMenu = document.body.querySelector(".icon-close-menu");
  let title = document.body.querySelector(".main-nav");
  let ubicationMain = window.pageYOffset;
  let mobileVersion = window.matchMedia("(max-width: 768px)");

  //Hamburguer Menu
  iconMenu.addEventListener("click", () => {
    mainMenu.classList.toggle("main-menu-show");
    // Disable scroll
    TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    (LeftScroll = window.pageXOffset || document.documentElement.scrollLeft),
      (window.onscroll = function () {
        window.scrollTo(LeftScroll, TopScroll);
      });
  });
  closeMenu.addEventListener("click", () => {
    mainMenu.classList.toggle("main-menu-show");
    // Enable scroll
    window.onscroll = function () {};
  });

  // Scroll Menu Desktop
  window.addEventListener("scroll", () => {
    let ubicationNow = window.pageYOffset;
    if (ubicationMain >= ubicationNow) {
      title.style.top = "0px";
      mainMenu.style.top = "0px";
    } else {
      title.style.top = "-10rem";
      mainMenu.style.top = "-10rem";
    }
    ubicationMain = ubicationNow;
  });
  if (mobileVersion.matches) {
    window.addEventListener("scroll", () => {
      let ubicationNow = window.pageYOffset;
      if (ubicationMain >= ubicationNow) {
        title.style.top = "0px";
        mainMenu.style.top = "0px";
      } else {
        title.style.top = "-7rem";
        mainMenu.style.top = "-7rem";
      }
      ubicationMain = ubicationNow;
    });
  }

  // JS Alina
  let dots = document.querySelectorAll(".fa-circle");
  let image = document.querySelector(".gallery-image");
  let galleryContainer = document.querySelector(".gallery-container");
  console.log(image);
  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
      image.src = "img/slider/" + (i + 1) + ".jpg";
      let active = document.querySelector(".active");
      active.classList.remove("active");
      dots[i].classList.add("active");
      galleryContainer.classList.toggle("flashit");
      image.classList.toggle("flashit");
    });
  }

  // Get the modal
  let modalSignUp = document.getElementById("myModalSignUp");
  let signUp = document.getElementById("sign-up");
  signUp.addEventListener("click", () => {
    modalSignUp.style.display = "block";
    console.log("working");
  });

  // Get the <span> element that closes the modal
  let closeSignUp = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal

  closeSignUp.addEventListener("click", () => {
    modalSignUp.style.display = "none";
  });

  let modalContact = document.getElementById("myModalContact");
  let contact = document.getElementById("contact-window");
  contact.addEventListener("click", () => {
    modalContact.style.display = "block";
    console.log("working");
  });

  let closeContact = document.getElementsByClassName("close")[1];

  closeContact.addEventListener("click", () => {
    modalContact.style.display = "none";
  });

  // JS Ismael

  
    let gamer_img = document.querySelectorAll(".gamers-player1");
    gamer_img.forEach((element) => {
      element.addEventListener("mouseover", () => {
        element.firstElementChild.classList.remove("gamers-img-player1");
        element.firstElementChild.classList.add("gamers-img-player1-2");
        element.firstElementChild.nextElementSibling.classList.remove(
          "gamers-player1-h3"
        );
        element.firstElementChild.nextElementSibling.classList.add(
          "gamers-player1-h3-hide"
        );
        element.lastElementChild.classList.remove("gamers-plus");
        element.lastElementChild.classList.add("gamers-plus-ye");
      });
      element.addEventListener("mouseleave", () => {
        element.firstElementChild.classList.remove("gamers-img-player1-2");
        element.firstElementChild.classList.add("gamers-img-player1");
        element.firstElementChild.nextElementSibling.classList.remove(
          "gamers-player1-h3-hide"
        );
        element.firstElementChild.nextElementSibling.classList.add(
          "gamers-player1-h3"
        );
        element.lastElementChild.classList.remove("gamers-plus-ye");
        element.lastElementChild.classList.add("gamers-plus");
      });
    });
    let gamer_plus = document.querySelectorAll(".gamers-plus");
    gamer_plus.forEach((element) => {
      element.addEventListener("mouseover", () => {
        element.classList.remove("gamer-plus-ye");
        element.classList.add("gamer-plus-wh");
      });
      element.addEventListener("mouseleave", () => {
        element.classList.remove("gamer-plus-wh");
        element.classList.add("gamer-plus-ye");
      });
    });
  
  
  
  

  //Closing brace window load
});
