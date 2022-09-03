let taskCounter = 0;

const taskObject = (title, description, dueDate, priority, project) => {
    let completed = false;
    let id = taskCounter += 1;
    return {completed, title, description, priority, dueDate, project, id};
}

let taskArray = []

let projectsArray = ['Inbox'];

export {taskCounter, projectsArray, taskObject, taskArray};