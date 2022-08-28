let projectsArray = ['Inbox'];

const taskObject = (title, description, dueDate, priority, project) => {
    return {title, description, dueDate, priority, project};
}

let taskArray = [];

export {projectsArray, taskObject, taskArray};