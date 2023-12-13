document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll(".border-b");

    accordions.forEach((accordion) => {
        const checkbox = accordion.querySelector('input[type="checkbox"]');
        const content = accordion.querySelector(".accordion-content");

        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                content.classList.remove("hidden");
            } else {
                content.classList.add("hidden");
            }
        });
    });
});
// loading start
const loading = document.getElementById("loading");

const loadingDuration = 1500;
setTimeout(() => {
    loading.classList.add("loading-none");
}, loadingDuration);
// loading end

// backtop start
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
// backtop end
// light-dark start
let modeBtn = document.getElementById("mode__btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "../asset/images/light.svg";
  } else {
    this.firstElementChild.src = "../asset/images/dark.svg";
  }
  document.body.classList.toggle("dark");
});
// light dark end