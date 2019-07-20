const menu = document.querySelector('nav');

window.onscroll = () => {
    const top = window.pageYOffset;
    if (top > 150) {
        menu.classList.add('menu-aux');
        document.querySelector('.logo img').src = '../img/logo-puro.png';
    }
    if (top === 0) {
        menu.classList.remove('menu-aux');
        document.querySelector('.logo img').src = '../img/logo.png';
        
    }
}