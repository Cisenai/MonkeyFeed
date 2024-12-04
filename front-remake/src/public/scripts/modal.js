const sidebar = document.querySelector('.sidebar');
const modalAdd = document.querySelector('#modalAdd');

const openSidebar = () => {
    sidebar.style = 'width: fit-content';
    const closeBtn = document.getElementById('closeSidebar');
    closeBtn.removeEventListener('click', closeSidebar);
    closeBtn.addEventListener('click', closeSidebar);
};

const closeSidebar = (event) => {
    sidebar.style = 'width: 0px';
};

modalAdd.style.display = 'none';

const openModalAdd = () => {
    if (modalAdd.style.display == 'none') {
        modalAdd.style.display = 'flex';
    } else {
        modalAdd.style.display = 'none';
    }
};