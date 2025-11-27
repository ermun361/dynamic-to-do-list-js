//Wait for HTML to fully load before running the setup
document.addEventListener('DOMContentLoaded',  () => {
    // 1.Select DOM elements
    
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // 2. Load Tasks from Local Storage
    loadTasks();

    // 3. Define the function so it can use the variables above and Add a Task
    // Accepts the text of the Task, and a boolean 'save' (defaults to true)
    function addTask (taskText, save = true) {

        // --- DOM CREATION LOGIC---
     
        // create list item
        const  listItem = document.createElement('li');
        listItem.textContent = taskText;

        // create Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add (remove-btn);

        // Assign onClick event to the remove button
        removeButton.onclick = function() {
            // Remove from HTML
            taskList.removeChild(listItem);

            // Remove from Local Storage
            removeTaskFromStorage(taskText);
        };

        // Append everything
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // --- STORAGE LOGIC ---
        
        // If 'save' is true, update Local Storage
        if(save) {
           // Get current list or empty array
           const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
           
            // Add new task
            storedTasks.push(taskText);
           // Save back to Storage
           localStorage.setItem('tasks', JSON.stringify(storedTasks)); 
        }

     }

    //  4. Function to Load Tasks
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            // call addTask with save = false so we don't duplicate it in storage
             addTask(taskText, false);
        });
    }

    // 5. Function to Remove Task from Storage
    function removeTaskFromStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

        // Filter out the task that matches the text
        storedTasks = storedTasks.filter(task => task !== taskText);

        // update Local Storage
        localStorage.setItem('tasks',   JSON.stringify(storedTasks));
    }

    //  6.Attach Event Listeners
    
   // Logic for Button Click
   addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
     if(taskText === "")  {
        alert("Please enter a task");
        } else {
            addTask(taskText); // save defaults to true
            taskInput.value = "";

        }

   });

//    logic for Enter key
    taskInput.addEventListener('keypress', (event) => {
        if(event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if(taskText === "") {
                alert("Please enter a task");
            } else {
                addTask(taskText);
                taskInput.value = "";
            }
        }
    });
});

// //Wait for HTML to fully load before running the setup
// document.addEventListener('DOMContentLoaded',  () => {
//     // 1.Select elements
    
//     const addButton = document.getElementById('add-task-btn');
//     const taskInput = document.getElementById('task-input');
//     const taskList = document.getElementById('task-list');

//     // 2. Define the function so it can use the variables above
//     function addTask () {
//         // Retrieve and trim the value
//         const taskText = taskInput.value.trim();
//         // Check if empty

//         if(taskText === "")  {
//         alert("Please enter a task");
//         return;
//         }
//         // create list item
//         const  listItem = document.createElement('li');
//         listItem.textContent = taskText;

//         // create Remove button
//         const removeButton = document.createElement('button');
//         removeButton.textContent = "Remove";
//         removeButton.classList.add (remove-btn);

//         // Assign onClick event to the remove button
//         removeButton.onclick = function() {
//             taskList.removeChild(listItem);
//         };

//         // Append everything
//         listItem.appendChild(removeButton);
//         taskList.appendChild(listItem);

//         // clear input
//         taskInput.value = "";

//      }
//     //  3.Attach Event Listeners
//     addButton.addEventListener('click', addTask);

//     taskInput.addEventListener('keypress', (event) => {
//         if(event.key === 'Enter') {
//             addTask();
//         }
//     });
// });