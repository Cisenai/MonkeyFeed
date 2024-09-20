const contentInfo = document.getElementById('contentInfo');
const feedName = document.getElementById('feedName');
const today = document.getElementById('today');

const fetchFeed = async (namePortal) => {
    const urlFeed = `http://localhost:3001/feed/${namePortal}`;
    const response = await fetch(urlFeed);  
    const data = await response.json();
    return data;
}

const showSubscriptions = async (namePortal) => {
    console.log(namePortal);

    const data = await fetchFeed(namePortal);
    
    console.log(data.data[0]);
    console.log(data.source);

    const icon = "assets/monkey-icon.png";
    
    feedName.textContent = data.source.title;
    for (let i in data.data) {
        
        const link = data.data[i].link;
        const summary = data.data[i].summary || " ";
        
        contentInfo.innerHTML += `
            <div class="noticia" onclick="window.open('${link}')">
                    <div class="noticiaImg">
                        <img src="assets/imgNews.jpg" alt="">
                    </div>
                    <div class="noticiacontent">
                        <div class="noticiaHeader">
                            <img src="${icon}" alt="">
                            <span class="noticiaTitle" >${data.data[i].title}</span>
                        </div>
                        <div class="noticiaText">${summary}</div>
                    </div>
                </div>
        `
    };
    
}

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('portalName')) {
        showSubscriptions(e.target.textContent);
    };
});

const showToday = async () => {
    console.log(user);

    for (let sub in user.subscriptions) {
        const portalName = user.subscriptions[sub].nome;
        // console.log(portalName);

        const data = await fetchFeed(portalName);
        // console.log(data);

        for (let i in data.data) {

            const dataPubli = data.data[i].isoDate;
            const dataToday = new Date();
            const dataComparada = new Date(dataPubli);
            
            if (dataComparada.toDateString() === dataToday.toDateString()) {
                console.log('A data está no dia de hoje!');
                console.log(dataPubli);
            };
        };
    };
};

today.addEventListener('click', showToday());