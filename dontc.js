function dontclickme(x) {
    alert("hey! " + x.textContent);
}

const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");

b1.addEventListener("click", function an() {
    b1.style.background="black";
    b1.style.color="white";
    dontclickme(b1);
    b1.removeEventListener("click", an);
});
b2.addEventListener("click", function an() {
    b2.style.background="black";
    b2.style.color="white";
    dontclickme(b2);
    b2.removeEventListener("click", an);
});
b3.addEventListener("click", function an() {
    b3.style.background="black";
    b3.style.color="white";
    dontclickme(b3);
    b3.removeEventListener("click", an);
});
b4.addEventListener("click", function an() {
    b4.style.background="black";
    b4.style.color="white";
    dontclickme(b4);
    b4.removeEventListener("click", an);
});