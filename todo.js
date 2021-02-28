var row;

function add(text) {
    console.log(text.value)
}

const input = document.getElementById("text");
const table = document.getElementById("myTable");

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        add(this);
  }
});