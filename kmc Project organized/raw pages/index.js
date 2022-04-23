const red = document.getElementById('Red');
const black = document.getElementById('Black');
const change = document.getElementById('change');

red.addEventListener('click', function onClick() {
    change.style.color = "red";
});

black.addEventListener('click', function onClick() {
    change.style.color = "black";
});