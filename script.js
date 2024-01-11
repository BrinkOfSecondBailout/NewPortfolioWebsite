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