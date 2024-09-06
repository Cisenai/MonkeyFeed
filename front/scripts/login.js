const entrar = document.getElementById('formLogin');

entrar.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = {
        email: entrar.email.value,
        password: entrar.password.value
    }

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => console.log(data))

    // console.log(data);

});

