let dots = document.querySelectorAll(".fa-circle")
let images =document.querySelector(".images").children
// console.log(images);
// dots[0].addEventListener("click", ()=>{
//     scrollGallery(0)
//   })
// dots[1].addEventListener("click", ()=>{
//   scrollGallery(1)
// })


dots.forEach(element => {
    element.addEventListener("click", (e)=>{
        let index = element.getAttribute("id")
        console.log(index);
        scrollGallery(index)
    })
});



const scrollGallery = (i)=>{
    let active=document.querySelector(".active");
    active.classList.remove("active")
    dots[i].classList.add ("active")
    let current = document.querySelector(".current");
    current.classList.remove ("current")
    if(i==0){
        images[5].classList.add("hidden")
    images [i].classList.remove("hidden");
    images [i].classList.add("current");
     }else{
        images[i-1].classList.add("hidden")
        images [i].classList.remove("hidden");
        images [i].classList.add("current");
     }
    
     
    
//     if (i >= 5) {
//          images[i].classList.add("hidden")
//          images [0].classList.remove("hidden");
//          images [0].classList.add("current");
//  }else if(i<5){
//          images[i].classList.add("hidden")
//          images [i+1].classList.remove("hidden");
//          images [i+1].classList.add("current");
//      }   
}


// for (let i = 0; i < dots.length; i++) {
//     dots[i].addEventListener("click", ()=>{
//         let active=document.querySelector(".active");
//         active.classList.remove("active")
//         dots[i].classList.add ("active")
//         if (i >= dots.length-1) {
//             images[i].classList.add("hidden")
//             images[i].classList.remove("current")
//             images [0].classList.remove("hidden");
//             images [0].classList.add("current");

//         }else{
//             images[i].classList.add("hidden")
//             images[i].classList.remove("current")
//             images [i+1].classList.remove("hidden");
//             images [i+1].classList.add("current");
//         }
        
        
//     })
    
// }

// let dot2 = document.getElementById("2");

// dot2.addEventListener("click", ()=>{
//     let imageToShow = document.querySelector(".images").firstElementChild.nextElementSibling
//     console.log(imageToShow);
//     imageToShow.classList.remove("hidden");
//     imageToShow.classList.add("current")
//     let imageToHide =document.querySelector(".images").firstElementChild
//     imageToHide.classList.add("hidden")
//     imageToHide.classList.remove("current")
// })

