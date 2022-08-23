export default function generateToday() {
    const div = document.createElement('div');
    div.classList.add('mainContainer');
    div.textContent = 'This is the Today page';

    return div;
}