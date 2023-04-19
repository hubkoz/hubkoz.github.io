const homepage = document.querySelector(".homepage") as HTMLElement;
const homepageHeight = homepage.getBoundingClientRect().height;
const backTopBtn = document.getElementById("back-top") as HTMLButtonElement;
const projectsContainer = document.getElementById("projects") as HTMLElement;

backTopBtn.addEventListener("click", () => {
  if (projectsContainer) {
    projectsContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  const opacity = (homepageHeight - 0.4 * scrollPosition) / homepageHeight;
  homepage.style.opacity = opacity.toString();
});
