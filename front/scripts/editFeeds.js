const sendFormSub = document.getElementById("sendFormSub");
const deletePortal = document.querySelectorAll(".deletePortal");

sendFormSub.addEventListener('submit', async () => {
    event.preventDefault();

    const link = `${sendFormSub.url.value}/feed`;

    const data = {
        idClient: user.id,
        link: link,
        nome: sendFormSub.title.value
    };
    console.log(data);

    const response = await fetch('http://localhost:3001/subs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const data2 = await response.json();
    console.log(data2);

    if (data2) {
        portais.innerHTML += `
            <div class="portal">
                <img src="assets/portal.png" alt="">
                <span class="portalName">${data2.nome}</span>
                <button class="deletePortal">X</button>
            </div>
        `;
    
        feedAddModal.style.display = "none";
    };

    // window.location.reload();
});





deletePortal.forEach((portal) => {
    portal.target.addEventListener('click', async (event) => {
        try {
            const portalName = document.querySelector('.portalName').textContent;
            
            console.log(portalName);
        } catch (error) {
            console.error(error);
        }
    });
});