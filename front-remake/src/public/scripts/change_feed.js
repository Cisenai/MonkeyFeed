const changeFeed = (id) => {
    fetch('http://localhost:3000/feed', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ feed: id }),
    }).catch((err) => console.error(err));
}