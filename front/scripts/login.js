const entrar = document.getElementById('formLogin');

const user = {};

entrar.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = {
        email: entrar.email.value,
        password: entrar.password.value
    }


        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data !== null) {
                    user = data;
                    window.location.href = 'index.html';
                }

            })    
            .catch (error => {
                console.error('Erro:', error);
            });

});

module.exports = { user };