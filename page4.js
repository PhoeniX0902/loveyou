const slideImg = document.getElementById("slideImage");
const caption = document.getElementById("caption");

const leftBtn = document.getElementById("prevBtn");
const rightBtn = document.getElementById("nextBtn");

// Images list
const images = [
  {
    src: "https://magazine-demo.onrender.com/assets/pic2-DDdxw6b7.gif",
    caption: ""
  },
  {
    src: "https://magazine-demo.onrender.com/assets/pic1-CzYwUIkT.jpg",
    caption: "Some Flowers For You"
  }
];

let index = 0;

function updateSlide(next) {
  slideImg.style.opacity = 0;
  caption.style.opacity = 0;

  setTimeout(() => {
    index = next;
    slideImg.src = images[index].src;

    caption.textContent = images[index].caption;
    caption.style.opacity = images[index].caption ? 1 : 0;

    slideImg.style.opacity = 1;
  }, 300);
}

rightBtn.addEventListener("click", () => {
  updateSlide(1);
});

leftBtn.addEventListener("click", () => {
  updateSlide(0);
});
