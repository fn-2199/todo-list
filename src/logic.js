const taskObject = (title, description, dueDate, priority, project) => {
    return {title, description, dueDate, priority, project};
}

let taskArray = []

let projectsArray = ['Inbox'];

export {projectsArray, taskObject, taskArray};