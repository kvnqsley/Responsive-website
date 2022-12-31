var mobileMenu = document.querySelector('.navbar-toggle')
var navBarMenu = document.querySelector('.navbar-menu');
var navBarLinks = document.querySelector('.navbar-links')
var mobileMenuContainer= document.getElementById('mobile-menu')
var xIcon = document.getElementsByClassName('x-icon')
var bar =document.querySelectorAll('.bar')


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


 console.log();
})
sub1=document.querySelector("ul.sub1");
sub2=document.querySelector("ul.sub2");

     ul=document.querySelector('.navbar-item .sub1')
     extraUl=document.querySelector('#extra ul');
     extra=document.querySelector('.about')
extra.addEventListener('click',()=>{

    if (window.innerWidth<=600) {
        ul.style.display="flex"
console.log('yes');
    }

})

function display1() {

    sub1.classList.remove('display')
    setTimeout(displayOff,6000)
       
}
function display2() {

    sub2.classList.remove('display')
    setTimeout(displayOff,6000)
         extraUl=document.querySelector('#extra ul');
         extra=document.querySelector('#extra')
extra.addEventListener('mouseenter',()=>{
    extraUl.style.display='inline-block'
    
})
}

function displayOff(params) {
    
    sub1.classList.add('display')
}
console.log(window.innerWidth);


