/*const TaskManager = new task
console.log(`${TaskManager.task}`)*/

const Name = document.getElementById('inputName').value;
const description = document.getElementById('description');
const assigned = document.getElementById('assigned');
const date = document.getElementById('date');
const errorElement = document.getElementById('error');
let messages = [];

/* const validFormFieldInput = (data) => {
    document.getElementById("inputName") 
} */
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
};
/*$('description').alert(function() {
    alert("The Form has been Submitted.");
 });*/




