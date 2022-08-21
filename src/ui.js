import './style.css';

export default function generateUI() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = document.title;

    const menuImg = document.createElement('span');
    menuImg.classList.add('material-icons-round');
    menuImg.classList.add('md-36');
    menuImg.textContent = 'menu';

    const addImg = document.createElement('span');
    addImg.classList.add('material-icons-round');
    addImg.classList.add('md-36');
    addImg.textContent = 'add';

    const main = document.createElement('main');

    header.append(menuImg, h1, addImg);
    document.body.append(header, main);
};