const name = document.getElementById('inputName')
const description = document.getElementById('description')
const assigned = document.getElementById('assigned')
const date = document.getElementById('date')
const errorElement = document.getElementById('error')

/* const validFormFieldInput = (data) => {
    document.getElementById("inputName") 
} */
form.addEventListener('submit', (e) => {
    let messages = []
    if (inputName.value === '' || inputName.value === null) {
        messages.push('Name is required')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})
