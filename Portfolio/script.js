const typingElement = document.getElementById("typing");
const phrases = ["Cybersecurity Enthusiast", "IoT Innovator", "Ethical Hacker", "Tech Explorer"];
let phraseIndex = 0, letterIndex = 0, currentPhrase = "", isDeleting = false;

function typeEffect() {
  currentPhrase = phrases[phraseIndex];
  if (isDeleting) {
    letterIndex--;
  } else {
    letterIndex++;
  }

  typingElement.textContent = currentPhrase.substring(0, letterIndex);

  if (!isDeleting && letterIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typeEffect, 300);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
  VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2
  });

  const navbar = document.getElementById("navbar");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll < lastScroll) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-100px";
    }
    lastScroll = currentScroll;
  });
});

function openContact() {
  document.getElementById("contactDrawer").style.right = "0";
}

function closeContact() {
  document.getElementById("contactDrawer").style.right = "-350px";
}

const backToTopBtn = document.getElementById("backToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
