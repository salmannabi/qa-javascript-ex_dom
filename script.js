function createH1() {
    let body = document.querySelector('body');
    let newH1 = document.createElement('h1');
    newH1.textContent = "This is a new h1 tag!";
    body.appendChild(newH1);
}

function changeColor(newH1, button) {
    if (newH1.style.color == 'white') {
        newH1.style.color = 'red';
    } else {
        newH1.style.color = 'white';
    }

    if (newH1.style.color == 'white') {
        button.style.color = 'red';
    } else {
        button.style.color = 'white';
    }
}

window.onload = createH1();

let theNewH1 = document.querySelector('h1');
theNewH1.textContent = "This header has been changed!";

let body = document.querySelector('body');
body.style.backgroundColor = 'grey';

theNewH1.style.color = 'white';

let button = document.querySelector('#btn');
button.style.padding = '12px';
button.style.color = 'red';
button.style.display = 'block';
button.style.margin = '0 auto';
button.onclick = function() {changeColor(theNewH1, button)};
