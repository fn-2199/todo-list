import './style.css';
import {projectsArray, taskObject, taskArray} from './logic';

export default function generateUI() {
    // Factory Function for Tab Creation
    const pages = (title, icon, link) => {
        return {title, icon, link};
    }

    // Factory Function for Form Elements
    const formElements = (camelCase, stringLabel, element, misc) => {
        return {camelCase, stringLabel, element, misc}
    }
    // Function for Toggle Menu
    function toggleNav() {
        document.body.classList.toggle('collapse');
    }

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

        (this.title == 'Add Project') ? this.array = newProject : this.array = newTaskArray;

        // Generate Form Elements
        for (let divElement of this.array) {
            const div = document.createElement('div');
            const label = document.createElement('label');
            label.textContent = divElement.stringLabel;

            const element = document.createElement(`${divElement.element}`);
            element.setAttribute('required', '');
            element.name = divElement.camelCase;

            if (divElement.element == 'input') {
                element.type = divElement.misc;
            } else if (divElement.element == 'select') {
                for (let value of divElement.misc) {
                    const option = document.createElement('option');
                    option.value = value.toLowerCase();
                    option.textContent = value;
                    element.appendChild(option);
                }
            }

            label.appendChild(element);
            div.appendChild(label);
            modalForm.appendChild(div);
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
            (e.target.id == 'addprojectForm') ? addProject() : addNewTask();
            closeModal();
        });

        modalForm.appendChild(buttons);
        modalContainer.appendChild(modalForm);
    };

    // Add Project Button Function
    function addProject() {
        let projectName = document.getElementsByName("projectName")[0].value;
        projectsArray.push(projectName); //Push to Project Array
        const newProject = pages(projectName, 'list', generateTab); //Creates Tab Object
        projectsPagesArray.splice(-1, 0, newProject); //Appends it to Projects Category

        document.querySelectorAll('#projects > .tab').forEach((node) => node.remove()); //Refreshes Projects Category

        const nodeProject = document.getElementById('projects');
        displayTabs(nodeProject, projectsPagesArray); //Re-displays all project tabs

        // Generate More Options Icon/Function
        const projectsList = document.querySelectorAll('#projects > .tab');
        for (let i = 0; i < projectsList.length - 1; i++) {
            const options = document.createElement('span');
            options.classList.add('material-icons-round', 'option');
            options.textContent = 'more_vert';
            options.onclick = function() {console.log(`Remove ${projectsList[i].firstChild.nextSibling.textContent}`)};
            projectsList[i].appendChild(options);
        }
    }

    // Add New Task Button Function
    function addNewTask() {
        const title = document.getElementsByName("taskTitle")[0].value;
        const description = document.getElementsByName("taskDescription")[0].value;
        const dueDate = document.getElementsByName("dueDate")[0].value;
        const priority = document.getElementsByName("priority")[0].value;
        const project = document.getElementsByName("project")[0].value;

        taskArray.push(taskObject(title, description, dueDate, priority, project));
    }

    // Generate Tab Page
    function generateTab() {
        activateEffect.call(this);

        main.textContent = '';
        const tabContainer = document.createElement('div');
        const tabTitle = document.createElement('h2');
        tabTitle.textContent = this.title;
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');
        if (taskContainer.textContent == '') {taskChecker(taskContainer)};
        tabContainer.append(tabTitle, taskContainer);
        main.appendChild(tabContainer);
    }

    function activateEffect() {
        for (let tab of tabsNodeArray) (this.title == tab.firstChild.nextSibling.textContent) ? tab.classList.add('selected') : tab.classList.remove('selected');
    }

    function taskChecker(element) {
        element.textContent = "You do not have any task.";
    }

    // Arrays
    const homePagesArray = [pages('Inbox', 'inbox', generateTab), pages('Today', 'today', generateTab), pages('Upcoming', 'date_range', generateTab)];
    let projectsPagesArray = [pages('Add Project', 'add', generateForm)];
    const CATEGORY = [{category: 'Home', subcategory: homePagesArray}, {category: 'Projects', subcategory: projectsPagesArray}];
    const headerArray = [pages('Menu', 'menu', toggleNav), pages('Add New Task', 'add', generateForm)];

    // Modal Form Arrays
    const priorityArray = ['Low', 'Medium', 'High'];

    const newTaskArray = [formElements('taskTitle', 'Title', 'input', 'text'), formElements('taskDescription', 'Description', 'textarea', ''), formElements('dueDate', 'Due Date', 'input', 'datetime-local'), formElements('priority', 'Priority', 'select', priorityArray), formElements('project', 'Project', 'select', projectsArray)];
    const newProject = [formElements('projectName', 'Name', 'input', 'text')];

    // Generate Header
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = document.title;
    header.append(h1);

    // Generate Header Icons
    for (let item of headerArray) {
        const headerIcon = document.createElement('span');
        headerIcon.classList.add('material-icons-round', 'md-36');
        headerIcon.id = headerIcon.textContent = item.icon;
        headerIcon.onclick = item.link.bind(item);
        (item.icon == 'menu') ? header.insertBefore(headerIcon, h1) : header.append(headerIcon);
    }

    const main = document.createElement('main');
    const menu = document.createElement('nav');
    let tabsNodeArray = [];

    // Generate Nav/Sidebar Content
    CATEGORY.forEach((cat) => {
        const catContainer = document.createElement('ul');
        catContainer.id = cat.category.toLowerCase();
        menu.appendChild(catContainer);

        const catName = document.createElement('h2');
        catName.textContent = cat.category;
        catContainer.appendChild(catName);

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
            if(tab.title != 'Add Project') tabsNodeArray.push(tabKey);

            tabKey.append(tabIcon, tabName);
            nodeContainer.appendChild(tabKey);
        }
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
    window.addEventListener("click", function(e) {if(e.target == modalBg) closeModal()})
    function closeModal() {modalBg.classList.remove("show-modal")};

    // Generate Selected Tab Effect
    generateTab.call(homePagesArray[0]);
    
    document.body.append(header, menu, main, modalBg);
};