var mobileMenu = document.querySelector('.navbar-toggle')
var navBarMenu = document.querySelector('.navbar-menu');
var mobileMenuContainer= document.getElementById('mobile-menu')
var xIcon = document.getElementsByClassName('x-icon')

mobileMenu.addEventListener('click',(e)=>{
    navBarMenu.classList.toggle('inactive');
    navBarMenu.classList.add('transition');
 
})

console.log(mobileMenu);