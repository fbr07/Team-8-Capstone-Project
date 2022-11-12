/*const TaskManager = new task
console.log(`${TaskManager.task}`)*/

/*const Name = document.getElementById('inputName').value;
const description = document.getElementById('description');
const assigned = document.getElementById('assigned');
const date = document.getElementById('date');
const errorElement = document.getElementById('error');
let messages = [];*/

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
const form = document.getElementById('form');
const names = document.getElementById('names');
const description = document.getElementById('description');
const assigned = document.getElementById('assigned');
const date = document.getElementById('date');
console.log("hello");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs () {
    // get the values from the inputs
    const namesValue = names.value;
    const descriptionValue = description.value;
    const assignedValue = assigned.value;
    const dateValue = date.value;

    if (namesValue === '') {
        setErrorFor(names, 'Name cannot be empty');
    } else {
        setSuccesFor(names);
    }
    if(descriptionValue === '') {
        setErrorFor(description, 'Description cannot be empty');
    } else {
        setSuccesFor(description);
    }
    if (assignedValue === '') {
        setErrorFor(assigned,'Assigned To cannot be empty');
    } else {
        setSuccesFor(assigned);
    }
    if (dateValue === '') {
        setErrorFor(date, 'Date cannot be empty');
    } else {
        setSuccesFor(date);
    }
 }

 function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
 }

 function setSuccesFor(input) {
    const formControl = input.parentElement;
    formControl.className='form-control success';
 }
