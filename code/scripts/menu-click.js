let menuButton = document.querySelector('.menu')
let navList = document.querySelector('.navigation-list')
let menuImg = document.querySelector('.menu-img')

menuButton.onclick = function(){
    navList.classList.toggle('hidden');
    console.log(navList.classList.contains('hidden'));
}