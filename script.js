function toggleMenu() {
    var menu = document.getElementById('burger-links');
    var bar1 = document.getElementById('bar1');
    var bar2 = document.getElementById('bar2');
    var bar3 = document.getElementById('bar3');

    menu.classList.toggle('hidden');
    bar1.classList.toggle('opened');
    bar2.classList.toggle('opened');
    bar3.classList.toggle('opened');
}

document.addEventListener('DOMContentLoaded', function() {
    new Typed(".auto-typed", {
        strings: ["Full Stack Developer", "Problem Solver", "Lifelong Learner"],
        typeSpeed: 70,
        backSpeed: 40,
        loop: true
    });
});

document.getElementById('hamburger-icon').addEventListener('click', toggleMenu);

document.addEventListener('DOMContentLoaded', function () {
    function scrollToTarget(target) {
        const targetElement = document.querySelector(target);
        if (targetElement) {
            const offset = document.querySelector('.fixed').offsetHeight;

            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: 'smooth'
            });
        }
    }

    document.querySelectorAll('#burger-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = this.getAttribute('href');
            scrollToTarget(targetSection);
        });
    });

    document.querySelectorAll('#nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = this.getAttribute('href');
            scrollToTarget(targetSection);
        });
    });

    document.querySelectorAll('#top-bar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = this.getAttribute('href');
            scrollToTarget(targetSection);
        });
    });

});