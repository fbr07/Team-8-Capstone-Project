const name = document.getElementById('inputName')
/*const description = document.getElementById('inpuDescription')
const assignedTo = document.getElementById('inputAssignedTo')
const dueDate = document.getElementById('inputDueDate')
const errorElement = document.getElementById('error')*/

/* const validFormFieldInput = (data) => {
    document.getElementById("inputName") 
} */
form.addEventListener('button', (e) => {
    let messages = []
    if (inputName.value === '' || inputName.value === null) {
        messages.push('Name is required')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(' , ')
    }
})
