import './style.css';

export default function generateUI() {

    // Factory Function for Tab Creation
    const pages = (title, icon, link) => {
        return {title, icon, link};
    }

    // Factory Function for Form Elements
    const formElements = (camelCase, stringLabel, inputType) => {
        return {camelCase, stringLabel, inputType}
    }

    // Function for Toggle Menu
    function toggleNav() {
        document.body.classList.toggle('collapse');
    }

    // Generate Tab Page
    function generateTab() {
        document.querySelector('main').textContent = '';
        const tabContainer = document.createElement('div');
        const tabTitle = document.createElement('h2');
        tabTitle.textContent = this.title;
        const p = document.createElement('p');
        p.textContent = `This is the ${this.title} tab`;
        tabContainer.append(tabTitle, p);
        document.querySelector('main').appendChild(tabContainer);
    }

    // Generate Form
    function generateForm() {
        if (modalContainer.childElementCount == 2) {(modalContainer.firstChild.nextSibling).remove()};
        document.querySelector('.modal').classList.add('show-modal');
        const modalForm = document.createElement('form');
        modalForm.action = '#';
        modalForm.method = 'post';
        const formTitle = document.createElement('h2');
        formTitle.textContent = this.title;
        modalForm.appendChild(formTitle);

        if (this.title == 'Add Project') {this.array = newProject}
        else {this.array = newTaskArray};

        for (let element of this.array) {
            const div = document.createElement('div');
            const label = document.createElement('label');
            label.textContent = element.stringLabel;

            const input = document.createElement('input');
            input.setAttribute('required', '');
            input.type = element.inputType;
            input.name = element.camelCase;

            label.appendChild(input);
            div.appendChild(label);
            modalForm.appendChild(div);
        }

        if (this.title == 'Add New Task') {
            const div = document.createElement('div');
            const label = document.createElement('label');
            label.textContent = 'Description';
            const description = document.createElement('textarea');
            
            label.appendChild(description);
            div.appendChild(label);
            modalForm.appendChild(div);

        }

        const buttons = document.createElement('div');
        buttons.classList.add('buttons');

        const cancelBtn = document.createElement('button');
        cancelBtn.type = 'button';
        cancelBtn.textContent = "Cancel";
        cancelBtn.onclick = closeModal;

        const submitBtn = document.createElement('button');
        submitBtn.type = 'submit';
        submitBtn.textContent = "Create";

        modalForm.addEventListener('submit', function(e) {
            e.preventDefault();
            addProject();
            closeModal();
        });

        buttons.append(cancelBtn, submitBtn);
        modalForm.appendChild(buttons);
        modalContainer.appendChild(modalForm);
    }

    // Add Project Button Function
    function addProject() {
        let projectName = document.getElementsByName("projectName")[0].value;
        const newProject = pages(projectName, 'list', generateTab);
        projectsPagesArray.splice(-1, 0, newProject);

        document.querySelectorAll('#projects > .tab').forEach((node) => node.remove());

        const nodeProject = document.getElementById('projects');
        displayTabs(nodeProject, projectsPagesArray);

        const projectsList = document.querySelectorAll('#projects > .tab');

        for (let i = 0; i < projectsList.length - 1; i++) {
            const options = document.createElement('span');
            options.classList.add('material-icons-round', 'option');
            options.textContent = 'more_vert';
            options.onclick = function() {
                console.log(`Remove ${projectsList[i].firstChild.nextSibling.textContent}`)
            };
            projectsList[i].appendChild(options);
        }
    }

    // Add New Task Button Function
    function addNewTask() {

    }

    // Arrays
    const homePagesArray = [pages('Inbox', 'inbox', generateTab), pages('Today', 'today', generateTab), pages('Upcoming', 'date_range', generateTab)];
    let projectsPagesArray = [pages('Add Project', 'add', generateForm)];
    const CATEGORY = [{category: 'Home', subcategory: homePagesArray}, {category: 'Projects', subcategory: projectsPagesArray}];
    const headerArray = [pages('', 'menu', toggleNav), pages('Add New Task', 'add', generateForm)];

    // Modal Form Arrays
    const newTaskArray = [formElements('taskTitle', 'Title', 'text'), formElements('dueDate', 'Due Date', 'datetime-local')];
    const newProject = [formElements('projectName', 'Name', 'text')];
    let projectsArray = ['Inbox'];
    const selectArray = [{label: 'Priority', values: ['Low', 'Medium', 'High']}, {label: 'Projects', values: projectsArray}];

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

    document.body.append(header, menu, main, modalBg);
};