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
    contentInfo.innerHTML = "";

    const data = await fetchFeed(namePortal);

    const icon = "assets/monkey-icon.png";
    
    console.log(data.source.title);
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
    
};

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('portalName')) {
        showSubscriptions(e.target.textContent);
    };
});

const showToday = async () => {
    contentInfo.innerHTML = "";
    feedName.textContent = "Today";

    for (let sub in user.subscriptions) {
        const portalName = user.subscriptions[sub].nome;
        // console.log(portalName);

        const data = await fetchFeed(portalName);
        // console.log(data);

        const icon = "assets/monkey-icon.png";
        for (let i in data.data) {

            const dataPubli = data.data[i].isoDate;
            const dataToday = new Date();
            const dataComparada = new Date(dataPubli);
            
            if (dataComparada.toDateString() === dataToday.toDateString()) {
                // console.log(dataPubli);

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
        };
    };
};

today.addEventListener('click', showToday); 