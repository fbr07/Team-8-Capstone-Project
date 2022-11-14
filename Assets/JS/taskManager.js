class TaskManager {
    constructor(currentId = 0) {
        this.task = []
        this.currentId = currentId
    }
    // get names(){
    //     return this.names
    // }
    // get description(){
    //     return this.description
    // }
    // get assigned(){
    //     return this.assigned
    // }
    // get date(){
    //     return this.date
    // }
    // get id(){
    //     return this.id
    // }

    addTask(names, description, assigned, date,) {
        let newTask = {
            names: names,
            description: description,
            assigned: assigned,
            date: date,
            id: this.currentId++,
            status: 'TODO',
        };

        this.task.push(newTask);

    }
    //     this.task.push(names);
    //     this.task.push(description);
    //     this.task.push(assigned);
    //     this.task.push(date);
    //     this.task.push(id);

    // }
}


// console.log(TaskManager.date);


// addTask.push('names');
// this.task.push('names', 'description', 'assigned', 'date', 'currentId')
// console.log(this.task)


