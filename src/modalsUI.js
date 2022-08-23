const formElements = (camelCase, stringLabel, inputType) => {
    return {camelCase, stringLabel, inputType}
}

const newTaskArray = [formElements('taskTitle', 'Title', 'text'), formElements('dueDate', 'Due Date', 'datetime-local'), formElements('priority', 'Priority', 'radio')];
const newProject = [formElements('name', 'Name', 'text')];

export default function generateModal() {
    const modalBg = document.createElement('div');
    modalBg.classList.add('modal');

    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-content');

    const exitBtn = document.createElement('span');
    exitBtn.classList.add('close-button');
    exitBtn.textContent = '×';

    const modalForm = document.createElement('form');
    const formTitle = document.createElement('h2');

    formTitle.textContent = "Add New Project";
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
    submitBtn.textContent = "Add Project"

    modalForm.appendChild(submitBtn);

    exitBtn.addEventListener("click", closeModal);
    window.addEventListener("click", function(e) {if(e.target == modalBg) closeModal()})
    function closeModal() {modalBg.classList.remove("show-modal")};

    modalContainer.append(exitBtn, modalForm);
    modalBg.append(modalContainer);

    return modalBg;
}