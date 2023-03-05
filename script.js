const navbar = document.querySelector(".navbar");
const heroImage = document.querySelector(".hero-image");
const mainLink = document.getElementById("#main-link");
const mainText = document.getElementById("#main-text");

window.addEventListener("scroll", function () {
  this.scrollY > 50 ? (navbar.style.top = "0") : (navbar.style.top = "-50px");
});


const images = [];
let i = 0;
images[0] = "./img/DJI_0020.jpg";
images[1] = "./img/DJI_0026.jpg";
images[2] = "./img/SOF_8652.jpg";

function displayImages()  {
 heroImage.style.backgroundImage = "url(" + images[i] + ")";

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout(displayImages, 4000);
};
window.onload = displayImages();

const accordion = "accordion-content";
const accordion_hidden = "accordion-content hidden";
const accordionContentElement = document.querySelector(`.accordion .accordion-content `);

function toggleAccordion() {
    const isAccordionContentHidden = accordionContentElement.className === accordion_hidden;
    if (isAccordionContentHidden) {
        accordionContentElement.className = accordion;
        
    } else {
        accordionContentElement.className = accordion_hidden;
    }
}