const usernameModalName = document.getElementById("usernameModalName");
const usernameModalEmail = document.getElementById("usernameModalEmail");
const logoutBtn = document.getElementById("logoutBtn");
const deleteUserBtn = document.getElementById("deleteUserBtn");

usernameModalName.textContent = user.name;
usernameModalEmail.textContent = user.email;

logoutBtn.addEventListener('click', () => {
    window.localStorage.removeItem('user');
    window.location.href = 'login.html';
});

const deleteUser = async () => {
    const response = await fetch(`http://localhost:3001/client/${user.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}

deleteUserBtn.addEventListener('click', async () => {
    await deleteUser();
    window.location.href = 'login.html';
});