import './style.css';

const header = document.createElement('header');
const h1 = document.createElement('h1');
h1.textContent = "Todo List";

const logo = document.createElement('img');

const main = document.createElement('main');

header.appendChild(h1);
document.body.append(header, main);