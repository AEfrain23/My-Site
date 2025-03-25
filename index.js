
const navbarMenu = document.querySelector(".menu-options");
const navbarToggle = document.querySelector(".mobile-navbar-toggle");

navbarToggle.addEventListener("click", () => {
    const visibility = navbarMenu.getAttribute("data-visible");
    if (visibility === "true") {
        navbarMenu.setAttribute("data-visible", false);
        navbarToggle.setAttribute("aria-expanded", false);
    } else if (visibility === "false") {
        navbarMenu.setAttribute("data-visible", true);
        navbarToggle.setAttribute("aria-expanded", true);
    }
});



// Using JQuery in order to hide the navbar options when ANY are pressed. (querySelectorAll not work?)
$(".btn").click(() => {
    const visibility = navbarMenu.getAttribute("data-visible");
    if (visibility === "true") {
        navbarMenu.setAttribute("data-visible", false);
        navbarToggle.setAttribute("aria-expanded", false);
    }
});

