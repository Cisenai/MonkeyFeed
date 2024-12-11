const sidebar = document.querySelector('.sidebar');
const modalAdd = document.querySelector('#modalAdd');
const mores = document.querySelectorAll('.modal-more');

const openSidebar = () => {
    sidebar.style = 'width: fit-content';
    const closeBtn = document.getElementById('closeSidebar');
    closeBtn.removeEventListener('click', closeSidebar);
    closeBtn.addEventListener('click', closeSidebar);
};

const closeSidebar = (event) => {
    sidebar.style = 'width: 0px';
    mores.forEach((more) => {
        if (!more.classList.contains('hidden')) {
            more.classList.add('hidden');
        }
    });
};

modalAdd.style.display = 'none';

const toggleModalAdd = () => {
    if (modalAdd.style.display == 'none') {
        modalAdd.style.display = 'flex';
    } else {
        modalAdd.style.display = 'none';
    }
};

const openMore = (element, subId) => {
    const elementRect = element.getBoundingClientRect();
    const modalMore = element.parentElement.querySelector('.modal-more');

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
    mores.forEach((more) => {
        if (event.target.contains(more) && event.target !== more) {
            more.classList.add('hidden');
        }
    });
});

