const createTaskHTML = (names, description, assigned, date) => {
    const html = ` 
    <div class="col-6">
            <div class="card p-3">
                <div class="card-body">
                    <h5 class="card-title font-weight-bold" id="names">Talk about project</h5>
                    <form class="row g-4">
                        <div class="col-sm-6 text-muted">
                            <h6 id="assigned">Assigned To: My Team</h6>
                        </div>
                        <div class="col-sm-6 text-muted" style="text-align: right;">
                            <h6 id="date">Due Date: 12/16/2022</h6>
                        </div>
                    </form>
                    <p class="card-text" id="description">This will be a fun project to do!!</p>
                    <div class="col-md-10">
                        <button type="button" class="btn btn-outline-success btn-md">Mark As Done</button>
                        <button type="button" class="btn btn-outline-danger btn-md">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    `
}

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


