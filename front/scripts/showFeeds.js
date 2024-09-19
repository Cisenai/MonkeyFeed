
const showSubscriptions = (namePortal) => {
    console.log(namePortal);
}

document.addEventListener('click', function(e) {
    // console.log(e.target);
    if (e.target.classList.contains('portalName')) {
        showSubscriptions(e.target.textContent);
    };
});