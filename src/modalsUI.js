export default function generateModal() {
    const modalBg = document.createElement('div');
    modalBg.classList.add('modal');

    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-content');

    const exitBtn = document.createElement('span');
    exitBtn.classList.add('close-button');
    exitBtn.textContent = '×';

    exitBtn.addEventListener("click", closeModal);
    function closeModal() {
        modalBg.classList.remove("show-modal")
    };

    const modalContent = document.createElement('div');
    modalContent.textContent = "This is a modal";

    modalContainer.append(exitBtn, modalContent);
    modalBg.append(modalContainer);

    return modalBg;
}