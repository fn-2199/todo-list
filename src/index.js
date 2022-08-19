import './style.css';
import logo from './assets/images/logo.svg'

const header = document.createElement('header');
const h1 = document.createElement('h1');
h1.textContent = "Todo List";

let logoImg = new Image();
logoImg.src = logo;

const main = document.createElement('main');

header.append(h1, logoImg);
document.body.append(header, main);