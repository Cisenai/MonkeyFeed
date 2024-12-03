const sidebar = document.querySelector('.sidebar');

const openSidebar = () => {
    console.log(sidebar);
    sidebar.style = 'width: 100px';
    const closeBtn = document.getElementById('closeSidebar');
    closeBtn.removeEventListener('click', closeSidebar);
    closeBtn.addEventListener('click', closeSidebar);
}

const closeSidebar = (event) => {
    sidebar.style = 'width: 0px';
}
