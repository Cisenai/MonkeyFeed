const body = document.querySelector('body');
let sidebar;

const openSidebar = () => {
    sidebar = document.createElement('section');
    sidebar.classList.add('sidebar');
    sidebar.innerHTML += `
        <div class="sidebar-header">
            <img src="/assets/icons/monkey-icon.png" alt="monkey-icon">
            <h1>MonkeyFeed</h1>
            <img id="closeSidebar" src="/assets/icons/close.svg" alt="close-icon">
        </div>
        <p>Menu</p>
    `;
    body.append(sidebar);

    const closeBtn = sidebar.querySelector('#closeSidebar');
    closeBtn.removeEventListener('click', closeSidebar);
    closeBtn.addEventListener('click', closeSidebar);
}

const closeSidebar = (event) => {
    sidebar.remove();
}
