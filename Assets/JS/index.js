/*const TaskManager = new task
console.log(`${TaskManager.task}`)*/

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
    taskManager.render(); // is this correct, meaning where I insert it. 
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
        //console.log(parentTask);
    let taskId = Number(parentTask.dataset.taskId);
    console.log(taskId);
    let task = taskManager.getTaskById(taskId);
    task.statuses = 'Done'
    console.log(taskManager); // I added this console so we can see when we click Mark as Done
    taskManager.save();
    taskManager.render(); // how come this render is different from the render in line 63
    }
})






// Creating taskHTML variable to Test your Code T6 Step 1 Test your Code
/* const taskHTML = (createTaskHTML) => {
}
console.log(taskHTML('Generation USA', 'Final Project', 'Team 8', '12/12/2022')); */












//  const TaskManager1 = new TaskManager();
//  TaskManager1.name = 'Felipe';
//  TaskManager1.description = 'Hello team, we got this';
//  console.log(TaskManager1)

// Rough Draft Ideas on Task 5 Part 4 (Felipe)

/* const validFormFieldInput = (data) => {
    document.getElementById("inputName")
}
function form () {
  console.log('test')
    if (Name === '' || null) {
        alert('Name is required')
    }
  // else if (description.value.length <= 5) {
  //      alert('Description must be longer than 5 characters')
 //   }

  //  if (messages.length > 0) {
//        e.preventDefault()
    //    errorElement.innerText = messages.join(', ')
   // }
$('description').alert(function() {
    alert("The Form has been Submitted.");
 });*/


// Function Starts
/*const form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault() // prevents the form from autosubmitting 
    const names = document.getElementById('names').value;
    console.log('names');
    const description = document.getElementById('description').value;
    const assigned = document.getElementById('assigned').value;
    const date = document.getElementById('date').value;*/
