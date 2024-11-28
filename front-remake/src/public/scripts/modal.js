const body = document.querySelector('body');
const navbar = documnet.querySelector('.navbar');

const closeSidebar = (event) => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.remove();
}

navbar.addEventListener('click', async (event) => {
    const menuButton = document.querySelector('.menu-icon');
    if (event.target.matches(menuButton)) {
        await fetch('/menu')
            .then((res) => res.text())
            .then((res) => body.innerHTML += res);
        
        const closeButton = document.querySelector('#closeSidebar');
        closeButton.removeEventListener('click', closeSidebar);
        closeButton.addEventListener('click', closeSidebar);
    }
});
