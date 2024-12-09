const sidebar = document.querySelector('.sidebar');
const modalAdd = document.querySelector('#modalAdd');
const more = document.querySelector('.modal-more');

const openSidebar = () => {
    sidebar.style = 'width: fit-content';
    const closeBtn = document.getElementById('closeSidebar');
    closeBtn.removeEventListener('click', closeSidebar);
    closeBtn.addEventListener('click', closeSidebar);
};

const closeSidebar = (event) => {
    sidebar.style = 'width: 0px';

    if (!more.classList.contains('hidden')) {
        more.classList.add('hidden');
    }
};

modalAdd.style.display = 'none';

const toggleModalAdd = () => {
    if (modalAdd.style.display == 'none') {
        modalAdd.style.display = 'flex';
    } else {
        modalAdd.style.display = 'none';
    }
};

const openMore = (element) => {
    const elementRect = element.getBoundingClientRect();

    more.classList.remove('hidden');
    more.style.top = `${elementRect.top}px`;
    more.style.left = `${elementRect.left}px`;
}

const deleteSub = () => {
    
}

window.onclick = (event) => {
    if (event.target.contains(more) && event.target !== more) {
        more.classList.add('hidden');
    }
}
