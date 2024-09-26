const user = JSON.parse(window.localStorage.getItem('user'));
const username = document.getElementById('username');
const portais = document.getElementById('portais');

console.log(user);
username.textContent = user.name;
const subs = user['subscriptions'];

for (let i in subs) {
    const sub = subs[i];

    const newPortal = document.createElement('div');

    newPortal.innerHTML = `
        <div class="portal">
            <img src="assets/portal.png" alt="">
            <span class="portalName">${sub.nome}</span>
            <button class="deletePortal">X</button>
        </div>
    `;

    const delButton = newPortal.querySelector('.deletePortal');

    delButton.addEventListener('click', async () => {
        console.log(sub.id);
        await fetch(`http://localhost:3001/subs/${sub.id}`, {
            method: 'DELETE',
        });
        subs.splice(i, 1);
        newPortal.remove();
        localStorage.setItem('user', JSON.stringify(user));
    });

    portais.append(newPortal);
};