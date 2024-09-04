
const url = "http://localhost:3000/netflix";

const teste = async (url) => {
    
    const teste1 = await fetch(url)
    .then(res => res.json())
    .then(res => {
        console.log(res[0]['content:encoded']);
    });
};

teste(url);

