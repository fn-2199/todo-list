import './style.css';

//Factory function for tab creation
const pages = (title, icon, link) => {
    return {title, icon, link};
}

const homePagesArray = [pages('Inbox', 'inbox', ''), pages('Today', 'today', ''), pages('Upcoming', 'date_range', '')];
let projectsPagesArray = [pages('Add Projects', 'add', '')];

const CATEGORY = [{category: 'Home', subcategory: homePagesArray}, {category: 'Projects', subcategory: projectsPagesArray}];

export default function generateHomepage() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = document.title;

    const menuImg = document.createElement('span');
    menuImg.classList.add('material-icons-round', 'md-36');
    menuImg.textContent = 'menu';
    menuImg.onclick = function() {
        document.body.classList.toggle('collapse');
    }

    const addImg = document.createElement('span');
    addImg.classList.add('material-icons-round', 'md-36');
    addImg.textContent = 'add';

    const main = document.createElement('main');
    const menu = document.createElement('nav');

    // Generate Nav/Sidebar Content
    CATEGORY.forEach((cat) => {
        const catContainer = document.createElement('div');
        catContainer.id = cat.category.toLowerCase();
        menu.appendChild(catContainer);
        const catName = document.createElement('h2');
        catName.textContent = cat.category;
        catContainer.appendChild(catName);

        for (let tab of cat.subcategory) {
            const tabKey = document.createElement('div');
            tabKey.classList.add('tab');

            const tabName = document.createElement('p');
            tabName.textContent = tab.title;

            const tabIcon = document.createElement('span');
            tabIcon.classList.add('material-icons-round');
            tabIcon.textContent = tab.icon;

            tabKey.append(tabIcon, tabName);
            catContainer.appendChild(tabKey);
        }
    })

    header.append(menuImg, h1, addImg);
    document.body.append(header, menu, main);
};