const providerForm = document.querySelector('.form-provider');

providerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const link = event.target.link.value;

    const data = {
        name: name,
        link: link,
    };

    fetch('http://localhost:3000/provider/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((res) => window.location.href = '/provider/profile')
        .catch((err) => console.log(err));
});

