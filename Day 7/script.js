const addBtn = document.querySelector('add-btn');
const input = document.querySelector('task-input');
const taskList = document.querySelector('task-list');

addBtn.addEventListener('click', () => {
    const taskText = input.value.trim();

    const li = document.createElement('li');
    const span = document.createElement('span');
    const delBtn = document.createElement('button');

    span.textContent = taskText;


    delBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild('span');
    li.appendChild('delBtn');
    taskList.appendChild('li');

    taskText.value = "";

});
