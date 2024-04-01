body = document.querySelector('body');
let check = false;

document.getElementById('btn').addEventListener('click', function() {
    if (check) {
        body.style.backgroundColor = 'white';
    }
    else {
        body.style.backgroundColor = 'black';
    }
    check = !check;
});