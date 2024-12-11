const newForm = document.querySelector('#new-form');

newForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const text = event.target.text.value;

    const data = {
        title: title,
        text: text,
    };

    fetch('http://localhost:3000/new/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((res) => window.location.href = '/provider/profile')
        .catch((err) => console.log(err));
});

