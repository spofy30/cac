const burger = document.querySelector('.burger');
const nav = document.querySelector('.navbar-nav');
const navLinks = document.querySelectorAll('.nav-link');
const nLink = document.getElementsByName("nav-link");
const navSlide = () => {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');


    });
}
navLinks.forEach((item) => {
    item.addEventListener('click', () => {
        let el = document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    })
})

navSlide();