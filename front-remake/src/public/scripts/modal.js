const body = document.querySelector('body');
const openModalBtn = document.querySelector('.menu');

openModalBtn.addEventListener('click', (event) => {
    fetch('/menu')
        .then((res) => res.text())
        .then((res) => body.innerHTML += res);
});
