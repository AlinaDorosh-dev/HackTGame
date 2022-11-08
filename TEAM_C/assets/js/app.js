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
