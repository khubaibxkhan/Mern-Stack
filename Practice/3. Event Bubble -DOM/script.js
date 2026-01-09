const musicList = document.querySelector('music-list');

musicList.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        musicList.removeChild(li);
    }
});