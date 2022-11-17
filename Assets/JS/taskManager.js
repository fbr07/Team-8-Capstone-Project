const createTaskHtml = (names, description, assigned, date) => {
    const html = ` 
        <div class="col-6">
                <div class="card p-3">
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold" id="names">${names}</h5>
                        <form class="row g-4">
                            <div class="col-sm-6 text-muted">
                                <h6 id="assigned">Assigned To: ${assigned}</h6>
                            </div>
                            <div class="col-sm-6 text-muted" style="text-align: right;">
                                <h6 id="date">Due Date: ${date}</h6>
                            </div>
                        </form>
                        <p class="card-text" id="description">${description}</p>
                        <div class="col-md-10">
                            <button type="button" class="btn btn-outline-success btn-md">Mark As Done</button>
                            <button type="button" class="btn btn-outline-danger btn-md">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
    `; // we need to figure out if we need to add statuses in here and if so where?
    return html;
}

class TaskManager {
    constructor(currentId = 0) {
        this.task = []
        this.currentId = currentId
    }

    addTask(names, description, assigned, date,) {
        let newTask = {
            names: names,
            description: description,
            assigned: assigned,
            date: date,
            id: this.currentId++,
            status: 'TODO', //should this be statuses since that is what we have for our id?
        };

        this.task.push(newTask);
    }

    render() {
        tasksHtmlList = [];
        for (let i = 0; i < this.task.length; i++) {
            let newTask = this.task[i]; // is this correct?, I created a new variable to store the current task
            let dates = new Date(newTask.date) // in since our id is date not dueDate that is why I did this, is this correct?
            //let formattedDate = ;//need help with this, don't understand?
            let taskHtml = createTaskHtml(
                newTask.names,
                newTask.description,
                newTask.assigned,
                formattedDate,
                newTask.status
            );
            tasksHtmlList.push(taskHtml);
        }
        let tasksHtml = tasksHtmlList.join('\n');
        document.getElementById(/*whats our id for index.html*/).innerHTML = tasksHtml


    }

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


//     this.task.push(names);
    //     this.task.push(description);
    //     this.task.push(assigned);
    //     this.task.push(date);
    //     this.task.push(id);

    // }


// console.log(TaskManager.date);


// addTask.push('names');
// this.task.push('names', 'description', 'assigned', 'date', 'currentId')
// console.log(this.task)


