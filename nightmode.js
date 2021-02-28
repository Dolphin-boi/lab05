function night_mode() {
    body.classList.toggle("day");
    body.classList.toggle("night");
    text.classList.toggle("day");
    text.classList.toggle("night");
    if (body.className === "night") {
        greeting.textContent = "EVENING";
        day_stat.textContent = "night";
        goto.textContent = "day";
        button_text.textContent = "day";
    }
    else {
        greeting.textContent = "MORNING";
        day_stat.textContent = "day";
        goto.textContent = "night";
        button_text.textContent = "night";
    }
}

const body = document.querySelector("body");
const text = document.getElementById("word");
const greeting = document.getElementById("greeting");
const day_stat = document.getElementById("day_stat");
const goto = document.getElementById("goto");
const button_text = document.getElementById("button_text");
const n_button = document.querySelector("button");
n_button.addEventListener("click", night_mode);