const user = JSON.parse(window.localStorage.getItem('user'));
const username = document.getElementById('username');
const portais = document.getElementById('portais');

console.log(user);
username.textContent = user.name;

for (let i in user['subscriptions']) {
    console.log(user['subscriptions'][i].nome);

    portais.innerHTML += `
        <div class="portal">
            <img src="assets/portal.png" alt="">
            <span class="portalName">${user['subscriptions'][i].nome}</span>
            <button>X</button>
        </div>
    `
};