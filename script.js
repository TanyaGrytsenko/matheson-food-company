// PAGE 1 (gsap animation)















// PAGE 2 (changing images)


let image = document.getElementById("image");
let images = [
    "img-page2/image1.webp",
    "img-page2/image2.webp", 
    "img-page2/image3.webp", 
    "img-page2/image4.webp", 
    "img-page2/image5.webp", 
    "img-page2/image6.webp", 
    "img-page2/image7.webp"
];
setInterval(function () {
  let random = Math.floor(Math.random() * images.length);
  image.src = images[random];
}, 400);


