
//Entrar no sistema
formLogin.addEventListener("submit", e => {
    e.preventDefault();
    let encontrado = false;
    dados.usuarios.forEach(user => {
        if (user.email == formLogin.email.value && user.senha == formLogin.senha.value) {
            usuario = user;
            login.classList.add("oculto");
            salvar.classList.remove("oculto");
            sair.classList.remove("oculto");
            if (usuario.tipo == "admin") item.classList.remove("oculto");
            $('#modalLogin').modal('hide');
            preencherCards();
            bemVindo();
            encontrado = true;
        }
    });
    if (!encontrado) alert('Login ou senha inválidos!');
})

function bemVindo() {
    if (usuario.email == undefined) boasVindas.classList.add("oculto");
    else {
        nome.innerHTML = `Usuário(a): ${usuario.nome}`;
        boasVindas.classList.remove("oculto");
    }
}

//Saír do sistema
function logout() {
    usuario = {};
    login.classList.remove("oculto");
    salvar.classList.add("oculto");
    item.classList.add("oculto");
    sair.classList.add("oculto");
    preencherCards();
    bemVindo();
}