class TaskManager {
    constructor(currentId = 0) {
        this.task = []
        this.currentId = currentId
    }
    addTask(names, description, assigned, date) {
        this.names = names
        this.description = description
        this.assigned = assigned
        this.date = date
        this.currentId++
    }
    
  

};
this.task.push('names', 'description', 'assigned', 'date', 'currentId')
console.log(this.task)


