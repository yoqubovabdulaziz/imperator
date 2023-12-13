// NAVBAR SHRINK
window.addEventListener("scroll", function () {
  shrink();
});

let language = document.getElementById("language");
let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    language.classList.add("language-shrink");
  } else {
    language.classList.remove("language-shrink");
  }
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}

// BACKTOP

window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.classList.add("backtop-show");
  } else {
    backtop.classList.remove("backtop-show");
  }
}

// LOADING

const loading = document.getElementById("loading");

const loadingDuration = 3000; // 2s

setTimeout(() => {
  loading.classList.add("loading-none");
}, loadingDuration);

// DARK MODE

let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "../assets/images/light.svg";
  } else {
    this.firstElementChild.src = "../assets/images/dark.svg";
  }
  document.body.classList.toggle("dark");
});
