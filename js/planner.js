let tasks = [];

window.onload = function () {

    let savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {

        tasks = JSON.parse(savedTasks);

        displayTasks();

    }

};

function addTask() {

    let input = document.getElementById("taskInput");

    let task = input.value.trim();

    if (task === "") {

        alert("Please enter a task.");

        return;

    }

    tasks.push({

        text: task,

        completed: false

    });

    input.value = "";

    saveTasks();

    displayTasks();

}

function displayTasks() {

    let list = document.getElementById("taskList");

    list.innerHTML = "";

    let completed = 0;

    for (let i = 0; i < tasks.length; i++) {

        let li = document.createElement("li");

        if (tasks[i].completed) {

            li.classList.add("completed");

            completed++;

        }

        li.innerHTML = `

${tasks[i].text}

<div class="task-buttons">

<button onclick="completeTask(${i})">

Complete

</button>

<button onclick="deleteTask(${i})">

Delete

</button>

</div>

`;

        list.appendChild(li);

    }

    document.getElementById("totalTasks").innerHTML = tasks.length;

    document.getElementById("completedTasks").innerHTML = completed;

}

function completeTask(index) {

    tasks[index].completed = !tasks[index].completed;

    saveTasks();

    displayTasks();

}

function deleteTask(index) {

    tasks.splice(index, 1);

    saveTasks();

    displayTasks();

}

function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));

}