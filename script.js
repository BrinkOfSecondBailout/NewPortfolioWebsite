function toggleMenu() {
    var menu = document.getElementById('nav-links');
    var bar1 = document.getElementById('bar1');
    var bar2 = document.getElementById('bar2');
    var bar3 = document.getElementById('bar3');

    menu.classList.toggle('hidden');
    bar1.classList.toggle('opened');
    bar2.classList.toggle('opened');
    bar3.classList.toggle('opened');
}

document.getElementById('hamburger-icon').addEventListener('click', toggleMenu);