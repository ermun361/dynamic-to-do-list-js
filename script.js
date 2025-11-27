//Wait for HTML to fully load before running the setup
document.addEventListener('DOMContentLoaded',  () => {
    // console.log ('HTML is fully loaded and ready')
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if(event.key === 'Enter') {
            addTask();
        }
    })
});

function addTask () {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const taskText = taskInput.value.trim();

    if(taskText === "")  {
        alert("Please enter a task");
        return;
    }
    const  listItem = document.createElement('li');
    listItem.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.className = "remove-btn";

    removeButton.onclick = function() {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    taskInput.value = "";

    }
 