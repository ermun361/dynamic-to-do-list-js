//Wait for HTML to fully load before running the setup
document.addEventListener('DOMContentLoaded',  () => {
    // 1.Select elements
    
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // 2. Define the function so it can use the variables above
    function addTask () {
        // Retrieve and trim the value
        const taskText = taskInput.value.trim();
        // Check if empty

        if(taskText === "")  {
        alert("Please enter a task");
        return;
        }
        // create list item
        const  listItem = document.createElement('li');
        listItem.textContent = taskText;

        // create Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add (remove-btn);

        // Assign onClick event to the remove button

        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append everything
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // clear input
        taskInput.value = "";

     }
    //  3.Attach Event Listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if(event.key === 'Enter') {
            addTask();
        }
    });
});

