const createTaskHtml = (id, names, description, assigned, date, statuses) => {
    const html = ` 
        <div class="col-6">
            <div class="card p-3">
                <div class="card-body" data-task-id=${id}>
                    <div class="col-md-10">
                        <h5 class="card-title font-weight-bold" id="names">${names}</h5>
                        <div class="skills html" id="status">${statuses}</div>
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
                        ${statuses === "TODO" ? '<button type="button" class="btn btn-outline-success btn-md done-button" id="done-button">Mark As Done</button>':""} 
                        <button type="button" class="btn btn-outline-danger btn-md delete-button" id="delete-button">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    return html;
}

class TaskManager {
    constructor(currentId = 0) {
        this.tasks = []
        this.currentId = currentId
    }

    addTask(names, description, assigned, date,) {
        const newTask = {
            id: this.currentId++,
            names: names,
            description: description,
            assigned: assigned,
            date: date,
            statuses: 'TODO',
        };

        this.tasks.push(newTask);
    }

    render() {
        const tasksHtmlList = [];
        for (let i = 0; i < this.tasks.length; i++) {
            let newTask = this.tasks[i]; 
            let dates = new Date(newTask.date) 
            let formattedDate = dates.getDate() + '/' + (dates.getMonth() + 1) + '/' + dates.getFullYear();
            let tasksHtml = createTaskHtml(
                newTask.id,
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
    save() {
        const tasksJson = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', tasksJson)
        const currentId = this.currentId.toString();
        localStorage.setItem('currentId', currentId)
    }
    load() {
        if (localStorage.getItem('tasks')) {
            const tasksJson = localStorage.getItem('tasks');
            this.tasks = JSON.parse(tasksJson);
        }
        if (localStorage.getItem('currentId')) {
            const currentId = localStorage.getItem('currentId')
            this.currentId = parseInt(currentId);
        }
    }
    getTaskById(taskId) {
        let foundTask;
        for (let i = 0; i < this.tasks.length; i++) {
            let task = this.tasks[i];
            if (taskId == task.id) {
                foundTask = task;
            }
        }
        return foundTask
    }
    deleteTask(taskId) {
        const newTasks = [];
        for(let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];
            if(task.id !== taskId) {
                newTasks.push(task);
            }
        }
        this.tasks = newTasks;
    }

}