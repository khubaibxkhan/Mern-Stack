const paragraph = document.querySelector("p");
const button = document.querySelector("button");
const div = document.querySelector("div");

paragraph.textContent = "This text is changed using JavaScript";

div.style.backgroundColor = "lightgray";

button.addEventListener("click" , () => {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "Hello this is me Khubaib welcome to day 6 of my mern stack journey";
    div.appendChild(newParagraph);
});

