const contentInfo = document.getElementById('contentInfo');
const feedName = document.getElementById('feedName');

const redirectWeb = (link) => {
    // window.location.href = link;
    window.open(link)
    console.log("ok ok ok");
}

const showSubscriptions = async (namePortal) => {
    console.log(namePortal);

    const urlFeed = `http://localhost:3001/feed/${namePortal}`;
    const response = await fetch(urlFeed);  
    const data = await response.json();
    
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
    // console.log(e.target);
    if (e.target.classList.contains('portalName')) {
        showSubscriptions(e.target.textContent);
    };
});