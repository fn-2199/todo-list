export default const generateUI = function() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = document.title;

    const main = document.createElement('main');

    header.append(h1);
    document.body.append(header, main);
};