const sidebar = document.querySelector('.sidebar');

const openSidebar = () => {
    sidebar.style = 'width: fit-content';
    const closeBtn = document.getElementById('closeSidebar');
    closeBtn.removeEventListener('click', closeSidebar);
    closeBtn.addEventListener('click', closeSidebar);
}

const closeSidebar = (event) => {
    sidebar.style = 'width: 0px';
}
