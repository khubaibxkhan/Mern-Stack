const btns = document.querySelectorAll("#playlist .delete");

Array.from(btns).forEach(function(btn){
    btn.addEventListener('click' , function(e){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    });
});

const resetBtn = document.querySelector("#reset");

resetBtn.addEventListener('click' , () => {
    location.reload(true);
});