const taskObject = (title, description, dueDate, priority, project) => {
    let completed = false;
    return {title, description, dueDate, priority, project, completed};
}

let taskArray = []

let projectsArray = ['Inbox'];

export {projectsArray, taskObject, taskArray};