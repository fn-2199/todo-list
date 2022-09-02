const taskObject = (title, description, dueDate, priority, project) => {
    let completed = false;
    return {completed, title, description, priority, dueDate, project};
}

let taskArray = []

let projectsArray = ['Inbox'];

export {projectsArray, taskObject, taskArray};