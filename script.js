// Pegando os botões e o modal
const githubBtn = document.getElementById("githubBtn");
const settingsBtn = document.getElementById("settingsBtn");
const feedbackBtn = document.getElementById("feedbackBtn");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.querySelector(".close");

// Funções para abrir o modal com conteúdo específico
githubBtn.onclick = function() {
    modal.style.display = "flex";
    modalBody.innerHTML = "<h2>GitHub</h2><p>Link para o repositório GitHub</p>";
}

settingsBtn.onclick = function() {
    modal.style.display = "flex";
    modalBody.innerHTML = "<h2>Configurações</h2><p>Aqui você pode ajustar suas preferências.</p>";
}

feedbackBtn.onclick = function() {
    modal.style.display = "flex";
    modalBody.innerHTML = "<h2>Feedback</h2><p>Deixe seu feedback aqui!</p>";
}

// Função para fechar o modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Fechar o modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
