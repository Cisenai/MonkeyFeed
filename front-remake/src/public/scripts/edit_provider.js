const provForm = document.querySelector('#edit-provider');

const editNew = (newId) => {
    window.location.href = `/new/update/${newId}`;
}

const deleteNew = (newId) => {
    fetch(`http://localhost:3000/new/delete/${newId}`, {
        method: 'DELETE',
    })
        .then((res) => window.location.reload())
        .catch((err) => console.log(err));
}

provForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const link = event.target.link.value;

    const data = {
        name: name,
        link: link,
    };

    fetch('http://localhost:3000/provider/profile', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((res) => window.location.reload())
        .catch((err) => console.log(err));
});

