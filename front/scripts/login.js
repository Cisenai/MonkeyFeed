const entrar = document.getElementById('formLogin');

let user = {};

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
                if (data) {
                    user = data;
                    window.localStorage.setItem('user', JSON.stringify(user));
                    window.location.href = 'index.html';
                }

            })    
            .catch (error => {
                console.error('Erro:', error);
            });

});
