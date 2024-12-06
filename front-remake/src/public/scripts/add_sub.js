const form = document.querySelector('#modalAdd');
const apiUrl = 'http://localhost:3000/sub';

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const link = event.target.link.value;

    const data = {
        name: name,
        link: link,
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((res) => window.location.reload())
        .catch((err) => console.log(err));
});
