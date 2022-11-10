document.addEventListener("load", () => {
  getYear = () => {
    let year = new Date();
    document.querySelector(".date").innerHTML += year.getFullYear();
  };
});
