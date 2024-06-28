//Selecciones para barra de navegación burger
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector ("nav");


burger.addEventListener("click", () => {
    ul.classList.toggle("show")
});

//Cerrar menu de burger
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);

//Selección de desplazar hacia arriba

const scrollUp = document.querySelector("#scroll-up"); //seleccionamos el botom de scroll

//Funcionalidad de desplazar hacia arriba
scrollUp.addEventListener("click", () => { //cuando le des click a ese elemento va a funcional el método de scroll
    window.scrollTo({ //que suba hasta arriba y se mantenga en esos valores
        top: 0,
        left: 0,
        behavior:"smooth",
    });
});

