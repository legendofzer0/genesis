const white = document.getElementById('White');
const black = document.getElementById('Black');
const change = document.getElementById('change');

white.addEventListener('click', function onClick() {
    change.style.color = "white";
});

black.addEventListener('click', function onClick() {
    change.style.color = "black";
});