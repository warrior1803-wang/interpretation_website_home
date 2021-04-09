const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll(".nav-links li");
const navbar = document.querySelector(".navbar");
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    })
});
window.onscroll = ()=>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
  }