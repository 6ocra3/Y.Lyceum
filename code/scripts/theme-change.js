let img = document.querySelector('.theme-img')
let themeButton = document.querySelector('.theme')
let theme = document.querySelector('#theme-link')
let menu = document.querySelector('.menu-img')
let user = document.querySelector('.user-img')
let skills = document.querySelector('.skills-img')
let letter = document.querySelector('.letter-img')

themeButton.onclick = function () {
    if (img.getAttribute('src') === 'img/dark-moon.png'){
        img.src = 'img/moon-light.png';
        menu.src = 'img/menu-light.png';
        user.src = 'img/user-light.png';
        skills.src = 'img/skills-light.png';
        letter.src = 'img/letter-light.png';
        theme.href="styles/light-theme.css";


    }
    else{
        img.src = 'img/dark-moon.png';
        menu.src = 'img/menu-dark.png';
        user.src = 'img/user-dark.png';
        skills.src = 'img/skills-dark.png';
        letter.src = 'img/letter-dark.png';
        theme.href="styles/dark-theme.css"

    }
}