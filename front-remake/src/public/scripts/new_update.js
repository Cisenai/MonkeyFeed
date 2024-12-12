const updateForm = document.querySelector('#new-update-form');

updateForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const text = event.target.text.value;

    const data = {
        title: title,
        text: text.trim(),
    };

    const splitHref = window.location.href.split('/');
    const newId = splitHref[splitHref.length-1];

    fetch(`http://localhost:3000/new/update/${newId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((res) => window.location.href = '/provider/profile')
        .catch((err) => console.log(err));
});

