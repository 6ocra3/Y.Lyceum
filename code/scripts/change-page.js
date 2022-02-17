let biographyButton = document.querySelector('.b-biography');
let skillsButton = document.querySelector('.b-skills');
let letterButton = document.querySelector('.b-letter');
let pageTitle = document.querySelector('.page-title');

biographyButton.onclick = function() {
    let activeLi = document.querySelector('.activate');
    let activePage = document.querySelector('.active-page');
    let biographyLi = document.querySelector('.biography');
    let profilePage = document.querySelector('.profile-page')
    activePage.classList.toggle('hidden');
    activePage.classList.toggle('active-page')
    pageTitle.textContent = 'Кто я?';
    profilePage.classList.toggle('hidden')
    profilePage.classList.toggle('active-page')
    activeLi.classList.toggle('activate');
    biographyLi.classList.toggle('activate');
};

skillsButton.onclick = function () {
    let activeLi = document.querySelector('.activate');
    let activePage = document.querySelector('.active-page');
    let skillsLi = document.querySelector('.skills');
    let skillsPage = document.querySelector('.skills-page')
    activePage.classList.toggle('hidden');
    activePage.classList.toggle('active-page')
    pageTitle.textContent = 'Что я умею?';
    skillsPage.classList.toggle('hidden')
    skillsPage.classList.toggle('active-page')
    activeLi.classList.toggle('activate');
    skillsLi.classList.toggle('activate');
};

letterButton.onclick = function () {
    let activeLi = document.querySelector('.activate');
    let activePage = document.querySelector('.active-page');
    let letterLi = document.querySelector('.letter');
    let letterPage = document.querySelector('.letter-page')
    activePage.classList.toggle('hidden');
    activePage.classList.toggle('active-page')
    pageTitle.textContent = 'Почему вы должны меня взять?';
    letterPage.classList.toggle('active-page')
    letterPage.classList.toggle('hidden')
    activeLi.classList.toggle('activate');
    letterLi.classList.toggle('activate');
};
