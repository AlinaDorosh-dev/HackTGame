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
  let modal = document.getElementById("myModal");
  let login = document.getElementById("login");
  login.addEventListener("click", () => {
    modal.style.display = "block";
    console.log("working");
  });

  // Get the <span> element that closes the modal
  let closeBtn = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
});
