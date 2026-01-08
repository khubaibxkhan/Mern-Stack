//create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again

const modeBtn = document.querySelector("#mode");

let mode = "light";

modeBtn.addEventListener("click" , () => {
    if(mode === "light"){
        mode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("h1").style.color = "white";
        document.querySelector("p").style.color = "white";
    }else{
        mode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("h1").style.color = "black";
        document.querySelector("p").style.color = "black";
    }
});