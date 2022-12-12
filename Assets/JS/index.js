const taskManager = new TaskManager();
taskManager.load();
taskManager.render();


const names = document.getElementById('names');
const description = document.getElementById('description');
const assigned = document.getElementById('assigned');
const date = document.getElementById('date');
const statuses = document.getElementById('statuses');
const errorElement = document.getElementById('error');
let messages = [];


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get the values from the inputs
    const namesValue = names.value;
    const descriptionValue = description.value;
    const assignedValue = assigned.value;
    const dateValue = date.value;
    const statusesValue = statuses.value;

    if (namesValue === '') {
        setErrorFor(names, 'Name cannot be empty');
    } else {
        setSuccesFor(names);
    }
    if (descriptionValue === '') {
        setErrorFor(description, 'Description cannot be empty');
    } else {
        setSuccesFor(description);
    }
    if (assignedValue === '') {
        setErrorFor(assigned, 'Assigned To cannot be empty');
    } else {
        setSuccesFor(assigned);
    }
    if (dateValue === '') {
        setErrorFor(date, 'Date cannot be empty');
    } else {
        setSuccesFor(date);
    }
    if (statusesValue === '') {
        setErrorFor(statuses, 'Status cannot be empty');
    } else {
        setSuccesFor(statuses);
    }
    if (namesValue && descriptionValue && assignedValue && dateValue && statusesValue) {
        taskManager.addTask(namesValue, descriptionValue, assignedValue, dateValue, statusesValue);
    } console.log(taskManager);
    names.value = '';
    description.value = '';
    assigned.value = '';
    date.value = '';
    statuses.value = '';
    taskManager.render(); 
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccesFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

const tasks_List = document.querySelector('#tasksList');

tasks_List.addEventListener('click', (e) => {
    if (e.target.classList.contains('done-button')) {
        let parentTask =  e.target.parentElement.parentElement
        console.log(parentTask);
    let taskId = Number(parentTask.dataset.taskId);
    console.log(taskId); // adding this line to check
    let task = taskManager.getTaskById(taskId);
    task.statuses = 'Done'
    console.log(taskManager); // I added this console so we can see when we click Mark as Done
    taskManager.save();
    taskManager.render(); // how come this render is different from the render in line 63
    }
    if (e.target.classList.contains('delete-button')) {
        let parentTask = e.target.parentElement.parentElement
        console.log(parentTask); // adding this line to check
    let taskId = Number(parentTask.dataset.taskId);
    console.log(taskId); // adding this line to check
    taskManager.deleteTask(taskId);
    taskManager.save();
    taskManager.render();
    }
})

