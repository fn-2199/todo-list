import './style.css';
import {projectsArray, taskObject, taskArray} from './logic';
import {eachDayOfInterval, format, addDays} from 'date-fns';

export default function generateUI() {
    const pages = (title, icon, link) => {
        return {title, icon, link};
    }

    const formElements = (camelCase, stringLabel, element, misc) => {
        return {camelCase, stringLabel, element, misc}
    }

    function toggleNav() {
        document.body.classList.toggle('collapse');
    }

    function changeStatus() {
        taskArray.find((task) => task.id == this.parentNode.id).completed = this.checked;
    }

    function selectedTab() {
        for (let tab of tabsNodeList) (this.title == tab.firstChild.nextSibling.textContent) ? tab.classList.add('selected') : tab.classList.remove('selected');
    }

    // Arrays
    const homePagesArray = [pages('Inbox', 'inbox', generateTab), pages('Today', 'today', generateTab), pages('Upcoming', 'date_range', generateTab)];
    let projectsPagesArray = [pages('Add Project', 'add', generateForm)];
    const CATEGORY = [{category: 'Home', subcategory: homePagesArray}, {category: 'Projects', subcategory: projectsPagesArray}];
    const headerArray = [pages('Menu', 'menu', toggleNav), pages('Add New Task', 'add', generateForm)];

    // Modal Form Arrays
    const priorityArray = ['Low', 'Medium', 'High'];
    const newTaskArray = [formElements('taskTitle', 'Title', 'input', 'text'), formElements('taskDescription', 'Description', 'textarea', ''), formElements('dueDate', 'Due Date', 'input', 'date'), formElements('priority', 'Priority', 'select', priorityArray), formElements('project', 'Project', 'select', projectsArray)];
    const newProject = [formElements('projectName', 'Name', 'input', 'text')];

    // Node References
    let tabsNodeList = [];
    let categoryNodeList = [];
    let addProjectNode;
    let taskContainerNode;

    let noTaskMsg = "You do not have any task."
    const sevenDaysArray = (eachDayOfInterval({ start: addDays(new Date(), 1), end: addDays(new Date(), 7) })).map((date) => format(date, 'yyyy-MM-dd'));

    // Generate Main Layout Components
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = document.title;
    header.append(h1);
    const main = document.createElement('main');
    const menu = document.createElement('nav');

    // Generate Header Icons
    for (let item of headerArray) {
        const headerIcon = document.createElement('span');
        headerIcon.classList.add('material-icons-round', 'md-36');
        headerIcon.id = headerIcon.textContent = item.icon;
        headerIcon.onclick = item.link.bind(item);
        (item.icon == 'menu') ? header.insertBefore(headerIcon, h1) : header.append(headerIcon);
    }

    // Generate Nav/Sidebar Content
    CATEGORY.forEach((cat) => {
        const catContainer = document.createElement('ul');
        catContainer.id = cat.category.toLowerCase();
        menu.appendChild(catContainer);
        const catName = document.createElement('h2');
        catName.textContent = cat.category;
        catContainer.appendChild(catName);
        categoryNodeList.push(catContainer);
        displayTabs(catContainer, cat.subcategory);
    })

    // Generate Tabs
    function displayTabs(nodeContainer, array) {
        for (let tab of array) {
            const tabKey = document.createElement('li');
            tabKey.classList.add('tab');
            const tabName = document.createElement('p');
            tabName.textContent = tab.title;
            const tabIcon = document.createElement('span');
            tabIcon.classList.add('material-icons-round');
            tabIcon.textContent = tab.icon;
            tabKey.onclick = tab.link.bind(tab);
            tabKey.append(tabIcon, tabName);

            (tab.icon == 'add') ? addProjectNode = tabKey : tabsNodeList.push(tabKey);

            if (nodeContainer.contains(addProjectNode)) {
                generateDelete(tabKey); 
                nodeContainer.insertBefore(tabKey, addProjectNode);
            } else {nodeContainer.appendChild(tabKey)};
        }
    }

    // Generate Tab's Delete Button
    function generateDelete(node) {
        const deleteContainer = document.createElement('span');
        deleteContainer.classList.add('delete');
        const deleteBtn = document.createElement('span');
        deleteBtn.classList.add('material-icons-round');
        deleteBtn.textContent = 'close';
        deleteBtn.onclick = deleteProject;
        deleteContainer.appendChild(deleteBtn);
        node.appendChild(deleteContainer);
    }

    // Delete Function
    function deleteProject(e) {
        e.stopPropagation();

        // Remove logically
        const deletedTab = e.target.parentNode.previousSibling.textContent;
        projectsArray.splice(projectsArray.indexOf(deletedTab), 1); // Removes from projectsArray
        projectsPagesArray.splice(projectsPagesArray.findIndex((projectObj) => projectObj.title == deletedTab), 1); // Removes from projectsPagesArray
        for (let i = 0; i < taskArray.length; i++) { //Removes all associated task
            if (taskArray[i].project == deletedTab) {taskArray.splice(i, 1)}
        }
        // Remove project display
        (tabsNodeList.find((tabNode) => tabNode == e.target.parentNode.parentNode)).remove();
        // Redirect to Today Tab
        generateTab.call(homePagesArray[1]);
    }

    // Generate Tab Page
    function generateTab() {
        selectedTab.call(this);
        main.textContent = '';
        const tabTitle = document.createElement('h2');
        tabTitle.textContent = this.title;
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');
        taskContainerNode = taskContainer;

        const tabArray = (this.title == 'Today') ? taskArray.filter((task) => task.dueDate == format(new Date(), 'yyyy-MM-dd')) :
        (this.title == 'Upcoming') ? taskArray.filter((task) => sevenDaysArray.includes(task.dueDate)) : taskArray.filter((task) => task.project == this.title);

        displayTaskUI(taskContainer, tabArray);

        if (taskContainer.textContent == '') {taskContainer.textContent = noTaskMsg};
        main.append(tabTitle, taskContainer);
    }

    function displayTaskUI(nodeContainer, tabArray) {
        for (let task of tabArray) {
            const div = document.createElement('div');
            div.classList.add('task-div');
            for (let [key, value] of Object.entries(task)) {
                switch (key) {
                    case 'project':
                        let deleteBtn = document.createElement('span');
                        deleteBtn.classList.add('material-icons-round', 'delete-btn');
                        deleteBtn.textContent = 'delete';
                        deleteBtn.onclick = deleteTask;
                        div.appendChild(deleteBtn);
                        break;
                    case 'description':
                        let detailsBtn = document.createElement('span');
                        detailsBtn.classList.add('material-icons-round', 'details-btn');
                        detailsBtn.textContent = 'read_more';
                        detailsBtn.onclick = function() {console.log('Details')};
                        div.appendChild(detailsBtn);
                        break;
                    case 'id':
                        div.id = value;
                        break;
                    case 'priority':
                        div.style.borderLeft = (value == 'High') ? 'thick solid var(--secondary-color)' : (value == 'Medium') ? 'thick solid var(--main-color)' : 'thick solid green';
                        break;
                    case 'completed':
                        const checkBox = document.createElement('input');
                        checkBox.setAttribute('type', 'checkbox');
                        checkBox.checked = value;
                        checkBox.classList.add(`${key}`);
                        checkBox.addEventListener('change', changeStatus);
                        div.appendChild(checkBox);
                        break;
                    default:
                        const span = document.createElement('span');
                        span.textContent = value;
                        span.classList.add(`${key}`);
                        div.appendChild(span);
                }
            }
            nodeContainer.appendChild(div);
        }
    }

    function deleteTask() {
        // Remove logically
        taskArray.splice(taskArray.findIndex((task) => task.id == this.parentNode.id), 1);
        // Remove display
        (this.parentNode).remove();
        // Display Message
        if (taskContainerNode.textContent == '') taskContainerNode.textContent = noTaskMsg;
    }

    // Generate Modal
    const modalBg = document.createElement('div');
    modalBg.classList.add('modal');
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-content');
    const exitBtn = document.createElement('span');
    exitBtn.classList.add('close-button');
    exitBtn.textContent = '×';
    modalContainer.append(exitBtn);
    modalBg.append(modalContainer);

    // Exit Modal Function
    exitBtn.addEventListener("click", closeModal);
    window.addEventListener("click", function(e) {if (e.target == modalBg) closeModal()})
    function closeModal() {modalBg.classList.remove("show-modal")};

    // Generate Form
    function generateForm() {
        if (modalContainer.childElementCount == 2) {(modalContainer.firstChild.nextSibling).remove()};
        document.querySelector('.modal').classList.add('show-modal');

        // Initialize Form
        const modalForm = document.createElement('form');
        modalForm.action = '#';
        modalForm.method = 'post';
        modalForm.id = (this.title.replace(/\s/g, '')).toLowerCase() + 'Form';
        const formTitle = document.createElement('h2');
        formTitle.textContent = this.title;
        modalForm.appendChild(formTitle);

        const formArray = (this.title == 'Add Project') ? newProject : newTaskArray;

        // Generate Form Elements
        for (let widget of formArray) {
            const widgetContainer = document.createElement('div');
            const label = document.createElement('label');
            label.textContent = widget.stringLabel;
            const element = document.createElement(`${widget.element}`);
            element.name = widget.camelCase;

            if (widget.misc == 'text') element.setAttribute('required', '');
            if (widget.camelCase == 'projectName') element.oninput = checkProjectName;

            if (widget.element == 'input') {
                element.type = widget.misc;
            } else if (widget.element == 'select') {
                for (let value of widget.misc) {
                    const option = document.createElement('option');
                    option.value = value;
                    option.textContent = value;
                    element.appendChild(option);
                }
            }

            label.appendChild(element);
            widgetContainer.appendChild(label);
            modalForm.appendChild(widgetContainer);
        }

        // Generate Buttons
        const buttons = document.createElement('div');
        buttons.classList.add('buttons');
        [{type: 'button', text: 'Cancel'}, {type: 'submit', text: `${this.title}`}].forEach((btn) => {
            const button = document.createElement('button');
            button.type = btn.type;
            button.textContent = btn.text;
            if (btn.type == 'button') {button.onclick = closeModal};
            buttons.appendChild(button);
        });

        // Submit Button Function
        modalForm.addEventListener('submit', function(e) {
            e.preventDefault();
            (e.target.id == 'addprojectForm') ? addProject() : addNewTask.call(main);
            closeModal();
        });

        modalForm.appendChild(buttons);
        modalContainer.appendChild(modalForm);
    };

    function checkProjectName() {
        (projectsArray.includes(this.value)) ? this.setCustomValidity("Project name already exist.") : this.setCustomValidity("");
    }

    // Add Project Button Function
    function addProject() {
        const projectName = document.getElementsByName("projectName")[0].value;
        // Append project logically
        projectsArray.push(projectName);
        projectsPagesArray.push(pages(projectName, 'list', generateTab));
        // Display project UI
        displayTabs(categoryNodeList[1], [projectsPagesArray[projectsPagesArray.length - 1]]);
    }

    // Add New Task Button Function
    function addNewTask() {
        const title = document.getElementsByName("taskTitle")[0].value;
        const description = document.getElementsByName("taskDescription")[0].value;
        const dueDate = (document.getElementsByName("dueDate")[0].value) ? document.getElementsByName("dueDate")[0].value : 'No Due Date';
        const priority = document.getElementsByName("priority")[0].value;
        const project = document.getElementsByName("project")[0].value;
        // Append task logically
        taskArray.push(taskObject(title, description, dueDate, priority, project));
        if (project == this.firstChild.textContent) {
            // Remove Message
            if (taskContainerNode.textContent == noTaskMsg) taskContainerNode.textContent = '';
             // Display task UI
            displayTaskUI(taskContainerNode, [taskArray[taskArray.length - 1]])
        };
    }

    // Generate Main Tab
    generateTab.call(homePagesArray[0]);
    
    document.body.append(header, menu, main, modalBg);
};