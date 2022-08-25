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
        // Refresh content
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
        // Refresh content
        if (modalContainer.childElementCount == 2) {(modalContainer.firstChild.nextSibling).remove()};

        document.querySelector('.modal').classList.add('show-modal');

        const modalForm = document.createElement('form');

        const formTitle = document.createElement('h2');
        formTitle.textContent = this.title;
        modalForm.append(formTitle);

        for (let element of newProject) {
            const label = document.createElement('label');
            label.textContent = element.stringLabel;

            const input = document.createElement('input');
            input.setAttribute('required', '');
            input.type = element.inputType;
            input.name = element.camelCase;

            label.appendChild(input);
            modalForm.append(label);
        }

        const submitBtn = document.createElement('button');
        submitBtn.textContent = "Create";

        modalForm.addEventListener('submit', function(e) {
            e.preventDefault();
            addProject();
            closeModal();
        });

        modalForm.appendChild(submitBtn);
        modalContainer.appendChild(modalForm);
    }

    function addProject() {
        let projectName = document.getElementsByName("name")[0].value;
        const newProject = pages(projectName, 'list', generateTab);
        projectsPagesArray.splice(-1, 0, newProject);
    }

    // Arrays
    const homePagesArray = [pages('Inbox', 'inbox', generateTab), pages('Today', 'today', generateTab), pages('Upcoming', 'date_range', generateTab)];
    let projectsPagesArray = [pages('Add Project', 'add', generateForm)];
    const CATEGORY = [{category: 'Home', subcategory: homePagesArray}, {category: 'Projects', subcategory: projectsPagesArray}];
    const headerArray = [pages('', 'menu', toggleNav), pages('Add New Task', 'add', generateForm)];

    // Modal Form Arrays
    const newTaskArray = [formElements('taskTitle', 'Title', 'text'), formElements('dueDate', 'Due Date', 'datetime-local'), formElements('priority', 'Priority', 'radio')];
    const newProject = [formElements('name', 'Name', 'text')];

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

        for (let tab of cat.subcategory) {
            const tabKey = document.createElement('li');
            tabKey.classList.add('tab');

            const tabName = document.createElement('p');
            tabName.textContent = tab.title;

            const tabIcon = document.createElement('span');
            tabIcon.classList.add('material-icons-round');
            tabIcon.textContent = tab.icon;

            tabKey.onclick = tab.link.bind(tab);

            tabKey.append(tabIcon, tabName);
            catContainer.appendChild(tabKey);
        }
    })

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