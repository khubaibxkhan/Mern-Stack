const addBtn = document.querySelector('#add-btn');
const input = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');

addBtn.addEventListener('click', () => {

    const taskText = input.value.trim();
    if (taskText === "") return;

    const li = document.createElement('li');
    const span = document.createElement('span');
    const delBtn = document.createElement('button');

    delBtn.className = "delete-btn";

    span.textContent = taskText;
    delBtn.textContent = "Delete";


    delBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);

    input.value = "";

});

input.addEventListener('keydown', (e) =>{
    if (e.key === "Enter"){
        addBtn.click();
    }
})
