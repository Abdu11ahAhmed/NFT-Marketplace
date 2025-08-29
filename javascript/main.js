let humberger = document.querySelector(".humberger");
let navLinks = document.querySelector(".nav-links");

humberger.onclick = () => {
    humberger.classList.toggle("active");
    navLinks.classList.toggle("active");
};

// let mode = document.querySelector(".mode");
// let body = document.querySelector("body");

// let currentMode = localStorage.getItem("Theme") || "night";
// body.setAttribute("class", currentMode);

// mode.onclick = () => {
//     if (currentMode === "night") {
//         currentMode = "light";
//         body.setAttribute("class", currentMode);
//     } else {
//         currentMode = "night";
//         body.setAttribute("class", currentMode);
//     }
//     localStorage.setItem("Theme", currentMode);
// };

let light = document.querySelector(".light");
let night = document.querySelector(".night");
let activate = document.querySelector(".activate");
let body = document.querySelector("body");
let currentMode = localStorage.getItem("Theme") || "night";
body.setAttribute("class", currentMode);

if (currentMode === "light") {
    activate.style.left = "50%";
}
if (currentMode === "night") {
    activate.style.left = "0%";
}

light.onclick = function () {
    activate.style.left = "50%";
    currentMode = "light";
    body.setAttribute("class", currentMode);
    localStorage.setItem("Theme", currentMode);
};
night.onclick = function () {
    activate.style.left = "0%";
    currentMode = "night";
    body.setAttribute("class", currentMode);
    localStorage.setItem("Theme", currentMode);
};
