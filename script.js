// Dark Mode button
let isDarkMode = false;

const toggleDarkModeButtonXl = document.getElementById('toggleDarkModeXl');
const modeIconXl = document.getElementById('mode-icon-xl');
const toggleDarkModeButtonLg = document.getElementById('toggleDarkModeLg');
const modeIconLg = document.getElementById('mode-icon-lg');
const toggleDarkModeButtonSm = document.getElementById('toggleDarkModeSm');
const modeIconSm = document.getElementById('mode-icon-sm');


const body = document.body;
const danny = document.getElementById('danny');
const topBars = document.querySelectorAll('.top-bar-div');
const allPills = document.querySelectorAll('.pill-button');
const whiteBoxes = document.querySelectorAll('.white-box');
const resumeButtons = document.querySelectorAll('.resume-button');
const contact = document.getElementById('contact-form');

const whiteBackgrounds = document.querySelectorAll('.white-bg');
const lightIconLg = document.getElementById('light-mode-icons-lg');
const darkIconLg = document.getElementById('dark-mode-icons-lg');
const lightIconMd = document.getElementById('light-mode-icons-md');
const darkIconMd = document.getElementById('dark-mode-icons-md');

toggleDarkModeButtonXl.addEventListener('click', () => {
    isDarkMode = !isDarkMode;

    isDarkMode ? modeIconXl.src='assets/light-mode.png' : modeIconXl.src='assets/dark-mode.png';

    toggleDarkMode();
});

toggleDarkModeButtonLg.addEventListener('click', () => {
    isDarkMode = !isDarkMode;

    isDarkMode ? modeIconLg.src='assets/light-mode.png' : modeIconLg.src='assets/dark-mode.png';

    toggleDarkMode();
});

toggleDarkModeButtonSm.addEventListener('click', () => {
    isDarkMode = !isDarkMode;

    isDarkMode ? modeIconSm.src='assets/light-mode.png' : modeIconSm.src='assets/dark-mode.png';

    toggleDarkMode();
});

function toggleDarkMode() {
    body.classList.toggle('light');
    body.classList.toggle('dark');
    danny.classList.toggle('text-blue-400');
    topBars.forEach(bar => {
        bar.classList.toggle('skyblue');
        bar.classList.toggle('dark-top-bar');
    })
    allPills.forEach(pill => {
        pill.classList.toggle('text-black');
    })
    resumeButtons.forEach(button => {
        button.classList.toggle('text-black');
    })
    whiteBoxes.forEach(box => {
        box.classList.toggle('white-shadow');
    })
    whiteBackgrounds.forEach(bg => {
        bg.classList.toggle('white-bg');
        bg.classList.toggle('black-bg');
    })

    contact.classList.toggle('bg-white');
    contact.classList.toggle('bg-gray-400');
    contact.classList.toggle('text-white');

    lightIconLg.classList.toggle('lg:flex');
    darkIconLg.classList.toggle('lg:flex');
    lightIconMd.classList.toggle('flex');
    lightIconMd.classList.toggle('hidden');
    darkIconMd.classList.toggle('flex');
    darkIconMd.classList.toggle('hidden');
}

// Toggle Hamburger Menu

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

document.getElementById('hamburger-icon').addEventListener('click', toggleMenu);

// Type Animation in Home Page

document.addEventListener('DOMContentLoaded', function() {
    new Typed(".auto-typed", {
        strings: ["Full Stack Developer", "Problem Solver", "Lifelong Learner"],
        typeSpeed: 70,
        backSpeed: 40,
        loop: true
    });
});


// Smooth Scroll

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

    const contactLink = document.getElementById('contact-link');
    contactLink.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = '#contact';
        scrollToTarget(targetSection);
    });

    const contactLink2 = document.getElementById('contact-link2');
    contactLink2.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = '#contact';
        scrollToTarget(targetSection);
    });

});

// for Technical Project page, toggle description and testimony

document.addEventListener('DOMContentLoaded', function () {
    const descriptionLink = document.getElementById('description-link');
    const testimonyLink = document.getElementById('testimony-link');
    const descriptionDiv = document.getElementById('description');
    const testimonyDiv = document.getElementById('testimony');

    descriptionLink.addEventListener('click', function () {
        toggleVisibility(descriptionDiv, testimonyDiv, testimonyLink, descriptionLink);
    });

    testimonyLink.addEventListener('click', function () {
        toggleVisibility(testimonyDiv, descriptionDiv, descriptionLink, testimonyLink);
    });

    function toggleVisibility(showDiv, hideDiv, showLink, hideLink) {
        showDiv.classList.remove('hidden');
        hideDiv.classList.add('hidden');
        showLink.classList.remove('hidden');
        hideLink.classList.add('hidden');
    }
});

// For Contact Form

const liveEndPoint = '/.netlify/functions';
// const liveEndPoint = 'http://localhost:3000'

const contactForm = document.querySelector('#contact-form');

let inputName = document.getElementById('name');
let inputPhone = document.getElementById('phone');
let inputEmail = document.getElementById('email');
let inputCompany = document.getElementById('company');
let inputMessage = document.getElementById('message');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    let formData = {
        name: inputName.value,
        phone: inputPhone.value,
        email: inputEmail.value,
        company: inputCompany.value,
        message: inputMessage.value,
    };

    console.log(formData);

    try {
        const response = await axios.post(`${liveEndPoint}/contact`, formData);

        console.log(response.data);

        if(response.data.message === 'success') {
            alert('Email sent! Thank you for your inquiry!');
            inputName.value = '';
            inputPhone.value = '';
            inputEmail.value = '';
            inputCompany.value = '';
            inputMessage.value = '';
        } else {
            alert('Something went wrong... please try again later');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong... please try again later');
    }
});








// for Personal Project page, toggle description

// document.addEventListener('DOMContentLoaded', function () {
//     const bargainDescLink = document.getElementById('bargain-desc-link')
//     const bargainDiv = document.getElementById('bargainhunt')
//     const bargainDescDiv = document.getElementById('bargain-description')

//     bargainDescLink.addEventListener('click', function () {
//         toggleVisibility(bargainDescDiv, bargainDiv);
//     })

//     const bargainBackLink = document.getElementById('bargain-back-link');

//     bargainBackLink.addEventListener('click', function () {
//         toggleVisibility(bargainDiv, bargainDescDiv);
//     })

//     const loveBirdDescLink = document.getElementById('lovebird-description-link');
//     const loveBirdDiv = document.getElementById('lovebird');
//     const loveBirdDescDiv = document.getElementById('lovebird-description');

//     loveBirdDescLink.addEventListener('click', function () {
//         toggleVisibility(loveBirdDescDiv, loveBirdDiv);
//     })

//     const loveBirdBackLink = document.getElementById('lovebird-back-link');
    
//     loveBirdBackLink.addEventListener('click', function () {
//         toggleVisibility(loveBirdDiv, loveBirdDescDiv);
//     })

//     const foodhubDescLink = document.getElementById('foodhub-desc-link');
//     const foodhubDiv = document.getElementById('foodhub');
//     const foodHubDescDiv = document.getElementById('foodhub-description');

//     foodhubDescLink.addEventListener('click', function () {
//         toggleVisibility(foodHubDescDiv, foodhubDiv);
//     })

//     const foodhubBackLink = document.getElementById('foodhub-back-link');

//     foodhubBackLink.addEventListener('click', function () {
//         toggleVisibility(foodhubDiv, foodHubDescDiv)
//     })



//     function toggleVisibility(showDiv, hideDiv) {
//         showDiv.classList.remove('hidden');
//         hideDiv.classList.add('hidden');
//     }
// });