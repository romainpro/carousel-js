const arrayImg = [
  "media/img1.jpg",
  "media/img2.jpg",
  "media/img3.jpg",
  "media/img4.jpg",
];

const btnNext = document.getElementById("btnNext");
const btnPrevious = document.getElementById("btnPrevious");
const carousel = document.querySelector(".carousel");

btnNext.addEventListener("click", nextImage);
btnPrevious.addEventListener("click", previousImage);

let currentIndex = 0;
let img = document.createElement("img");
img.src = arrayImg[currentIndex];
carousel.appendChild(img);

function nextImage() {
  currentIndex++;
  if (currentIndex >= arrayImg.length) {
    currentIndex = 0;
  }
  updateImage();
}

function previousImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = arrayImg.length - 1;
  }
  updateImage();
}

function updateImage() {
  img.src = arrayImg[currentIndex];
}
