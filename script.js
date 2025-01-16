// Gestion du carousel (section 1)
document.addEventListener("DOMContentLoaded", () => {
  const carouselImages = document.querySelectorAll("#section1 .carousel img");
  let currentIndex = 0;

  function showNextImage() {
    const currentImage = carouselImages[currentIndex];
    const nextIndex = (currentIndex + 1) % carouselImages.length;
    const nextImage = carouselImages[nextIndex];

    currentImage.classList.remove("active");
    currentImage.classList.add("previous");

    nextImage.classList.add("active");
    currentIndex = nextIndex;

    setTimeout(() => {
      currentImage.classList.remove("previous");
    }, 600); // Durée de la transition
  }

  // Change l'image toutes les 5 secondes
  setInterval(showNextImage, 5000);
});

// Menu déroulant dans la barre de navigation
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const submenu = item.querySelector(".submenu");
    if (submenu) {
      submenu.style.display = "block";
      submenu.style.opacity = "1";
      submenu.style.visibility = "visible";
    }
  });

  item.addEventListener("mouseleave", () => {
    const submenu = item.querySelector(".submenu");
    if (submenu) {
      submenu.style.display = "none";
      submenu.style.opacity = "0";
      submenu.style.visibility = "hidden";
    }
  });
});

// Gestion des articles (ajouter une interaction pour les boutons)
const articleButtons = document.querySelectorAll(".article-box button");

articleButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const articleBox = event.target.closest(".article-box");
    const iframe = articleBox.querySelector("iframe");

    if (iframe) {
      const articleUrl = iframe.src;
      window.open(articleUrl, "_blank"); // Ouvre l'article dans un nouvel onglet
    }
  });
});
