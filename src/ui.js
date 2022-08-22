import './style.css';

export default function generateUI() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = document.title;

    const menuImg = document.createElement('span');
    menuImg.classList.add('material-icons-round');
    menuImg.classList.add('md-36');
    menuImg.textContent = 'menu';
    menuImg.onclick = function() {
        if (menu.hasAttribute("hidden")) {
            menu.removeAttribute('hidden');
            main.classList.toggle('stretch');
        } else {
            menu.setAttribute('hidden', '');
            main.classList.toggle('stretch');
        }
    }

    const addImg = document.createElement('span');
    addImg.classList.add('material-icons-round');
    addImg.classList.add('md-36');
    addImg.textContent = 'add';

    const main = document.createElement('main');
    main.textContent = 'This is the main'
    const menu = document.createElement('nav');
    menu.textContent = 'This is the menu.'

    header.append(menuImg, h1, addImg);
    document.body.append(header, menu, main);
};