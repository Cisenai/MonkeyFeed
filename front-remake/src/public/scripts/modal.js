const body = document.querySelector('body');
const openModalBtn = document.querySelector('.menu');

openModalBtn.addEventListener('click', async (event) => {
    if (!document.querySelector('.sidebar')) {
        console.log('open modal before fetch');
        await fetch('/menu')
            .then((res) => res.text())
            .then((res) => body.innerHTML += res);
    }
});

const closeSideBar = (event) => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.remove();
    console.log('close sidebar');
}

body.addEventListener('click', (event) => {
    if (event.target.matches('#closeSidebar')) {
        closeSideBar(event);
    }
});

