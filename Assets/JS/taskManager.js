const createTaskHtml = (names, description, assigned, date,statuses) => {
    const html = ` 
        <div class="col-6">
            <div class="card p-3">
                <div class="card-body">
                    <div class="col-md-10">
                        <h5 class="card-title font-weight-bold" id="names">${names}</h5>
                        <div class="skills html" id="status">${statuses}es</div>
                    </div>
                    <form class="row g-4">
                        <div class="col-sm-6 text-muted">
                            <h6 class="mutedfield" id="assigned">Assigned To: ${assigned} </h6>
                        </div>
                        <div class="col-sm-6 text-muted" style="text-align: right;">
                            <h6 class="mutedfield" id="date">Due Date: ${date}</h6>
                        </div>
                    </form>
                    <p class="card-text" id="description">${description}</p>
                    <div class="col-md-10">
                        <button type="button" class="btn btn-outline-success btn-md" id='done-button'>Mark As Done</button>
                        <button type="button" class="btn btn-outline-danger btn-md" id="delete-button">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    `; 
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
            statuses: 'TODO', 
        };

        this.task.push(newTask);
    }

    render() {
        tasksHtmlList = [];
        for (let i = 0; i < this.task.length; i++) {
            let newTask = this.task[i]; // is this correct?, I created a new variable to store the current task
            let dates = new Date(newTask.date) // since our id is date not dueDate that is why I did this, is this correct?
            let formattedDate = dates.getDate() + '/' + (dates.getMonth() + 1) + '/' + dates.getFullYear();
            let tasksHtml = createTaskHtml(
                newTask.names,
                newTask.description,
                newTask.assigned,
                formattedDate,
                newTask.statuses
            );
            tasksHtmlList.push(tasksHtml);
        }
        let tasksHtml = tasksHtmlList.join('\n');
        document.getElementById('tasksList').innerHTML = tasksHtml 


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


