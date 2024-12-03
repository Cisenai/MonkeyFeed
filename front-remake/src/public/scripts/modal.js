const body = document.querySelector('body');
let sidebar;

const openSidebar = () => {
    sidebar = document.createElement('section');
    sidebar.classList.add('sidebar');
    sidebar.innerHTML += `
        <div class="sidebar-header">
            <img class="monkey-icon" src="/assets/icons/monkey-icon-white.png" alt="monkey-icon">
            <h1>MonkeyFeed</h1>
            <img onclick="closeSidebar()" id="closeSidebar" src="/assets/icons/close.svg" alt="close-icon">
        </div>
        <div class="sidebar-body">
            <span>Suas Inscrições <img src="/assets/icons/add-white.svg" alt="add-icon"></span>
        </div>
    `;
    body.append(sidebar);

    const closeBtn = sidebar.querySelector('#closeSidebar');
    closeBtn.removeEventListener('click', closeSidebar);
    closeBtn.addEventListener('click', closeSidebar);
}

const closeSidebar = (event) => {
    sidebar.remove();
}
