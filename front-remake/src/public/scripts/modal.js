const sidebar = document.querySelector('.sidebar');
const modalAdd = document.querySelector('#modalAdd');
const modalEdit = document.querySelector('#modalEdit');
const modalMore = document.querySelector('.modal-more');

const openSidebar = () => {
    sidebar.style = 'width: fit-content';
    const closeBtn = document.getElementById('closeSidebar');
    closeBtn.removeEventListener('click', closeSidebar);
    closeBtn.addEventListener('click', closeSidebar);
};

const closeSidebar = (event) => {
    sidebar.style = 'width: 0px';
    if (!modalMore.classList.contains('hidden')) {
        modalMore.classList.add('hidden');
    }
};

const toggleModalAdd = () => {
    if (modalAdd.classList.contains('hidden')) {
        modalAdd.classList.remove('hidden');
    } else {
        modalAdd.classList.add('hidden');
    }
};

const toggleModalEdit = () => {
    if (modalEdit.classList.contains('hidden')) {
        modalEdit.classList.remove('hidden');
    } else {
        modalEdit.classList.add('hidden');
    }
};

const openMore = (element, subId) => {
    const elementRect = element.getBoundingClientRect();

    modalMore.classList.remove('hidden');
    modalMore.style.top = `${elementRect.top}px`;
    modalMore.style.left = `${elementRect.left}px`;

    modalMore.querySelector('#deleteSub').removeEventListener('click', () => deleteSub(subId));
    modalMore.querySelector('#deleteSub').addEventListener('click', () => deleteSub(subId));
}

const deleteSub = (subId) => {
    fetch(`http://localhost:3000/feed/${subId}`, {
        method: "DELETE",
    })
        .then((res) => window.location.reload())
        .catch((err) => {
            console.log(err);
        });
}

document.addEventListener('click', (event) => {
    if (event.target.contains(modalMore) && event.target !== modalMore) {
        modalMore.classList.add('hidden');
    }
});
