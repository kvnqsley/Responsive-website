var mobileMenu = document.querySelector('.navbar-toggle')
var navBarMenu = document.querySelector('.navbar-menu');
var navBarLinks = document.querySelectorAll('.navbar-links')
var mobileMenuContainer= document.getElementById('mobile-menu')
var xIcon = document.getElementsByClassName('x-icon')
var bar =document.querySelectorAll('.bar')
ul=document.querySelector('.navbar-item .sub1')
item=document.querySelectorAll('.navbar-item')
const servicesH1= document.querySelector('.services h1');

const close =document.createElement('button');
mobileMenuContainer.appendChild(close);
const x =document.createTextNode('X');
closeBtn=close.appendChild(x);
close.setAttribute('class','close-btn')

mobileMenu.addEventListener('click',(e)=>{
    navBarMenu.classList.toggle('display-nav');
    navBarMenu.classList.add('transition');
   
bar.forEach(element => {
    element.classList.toggle("inactive")
    });
    close.classList.toggle('active')

})
var sub1=document.querySelector("ul.sub1");
sub2=document.querySelector("ul.sub2");

     extraUl=document.querySelector('#extra ul');
     extra=document.querySelector('.about')


function displayOff(e) {
    if (window.innerWidth<=600) {
    navBarLinks.forEach(element => {
        element.style.transform='translateX(-13em)';
        //element.previousElementSibling.style.display="none"
        
    });
 
    item.forEach(element => {
       console.log();
    });
}
}
function display2() {

    sub2.classList.remove('display')
    setTimeout(displayOff,6000)
         extraUl=document.querySelector('#extra ul');
         extra=document.querySelector('#extra')


}


// var scroll =s
