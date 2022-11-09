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
let modal = document.getElementById("myModalSignUp");
let signUp = document.getElementById("sign-up");
signUp.addEventListener("click", () => {
  modal.style.display = "block";
  console.log("working");
});

// Get the <span> element that closes the modal
let closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

