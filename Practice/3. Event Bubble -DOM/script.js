const musicList = document.querySelector('music-list');

musicList.addEventListener('click', (e) => {
    if(e.target.className == "delete"){
        const li = e.target.parentElement;
        musicList.removeChild(li);
    }
})