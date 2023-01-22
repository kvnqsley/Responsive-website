// var mobileMenu = document.querySelector('.navbar-toggle')
// var navBarMenu = document.querySelector('.navbar-menu');
// var navBarLinks = document.querySelectorAll('.navbar-links')
// var mobileMenuContainer= document.getElementById('mobile-menu')
// var xIcon = document.getElementsByClassName('x-icon')
// var bar =document.querySelectorAll('.bar')
// ul=document.querySelector('.navbar-item .sub1')
// item=document.querySelectorAll('.navbar-item')
// const servicesH1= document.querySelector('.services h1');
// const marquee = document.getElementById('weather');

// const close =document.createElement('button');

(function(){
   
    const app={
    
        // initialization
    init:()=>{
    app.cacheDom();
app._render();
app.bindEvent();
app.displaynav();
    },
   //cacheDom
    cacheDom:()=>{
        this.mobileMenu= document.querySelector('.navbar-toggle');
        this.navBarMenu= document.querySelector('.navbar-menu');
        this.navBarLinks= document.querySelectorAll('.navbar-links');
        this.mobileMenuContainer=document.getElementById('mobile-menu');
        this.xIcon= document.getElementsByClassName('x-icon')
        this.bar =document.querySelectorAll('.bar')
        this.ul=document.querySelector('.navbar-item .sub1')
        this.item=document.querySelectorAll('.navbar-item')
        this.servicesH1= document.querySelector('.services h1');
    this.marquee = document.getElementById('weather');
    this.close =document.createElement('button');
    this.sub1=document.querySelector("ul.sub1");
    this.sub2=document.querySelector("ul.sub2");

     this.extraUl=document.querySelector('#extra ul');
     this.extra=document.querySelector('.about')
     this.mobileMenuContainer.appendChild(close);
this.x =document.createTextNode('X');
this.closeBtn=close.appendChild(x);
this.close.setAttribute('class','close-btn')
    },

    bindEvent:()=>{
this.mobileMenu.addEventListener('click',app.displaynav.bind(this)
    );




    },
    _render:()=>{
        if (window.innerWidth<=600) {
           this.navBarLinks.forEach(element => {
                element.style.transform='translateX(-40%)';
            
    })
}
    },
    displaynav:()=>{
        this.navBarMenu.classList.toggle('display-nav');
        this.navBarMenu.classList.add('transition');
        this.bar.forEach(element => {
            element.classList.toggle("inactive")
            });
            this.close.classList.toggle('active')
    
    }
    
}
app.init()
})();

// mobileMenuContainer.appendChild(close);
// const x =document.createTextNode('X');
// closeBtn=close.appendChild(x);
// close.setAttribute('class','close-btn')

// mobileMenu.addEventListener('click',(e)=>{
//     navBarMenu.classList.toggle('display-nav');
//     navBarMenu.classList.add('transition');
 
// bar.forEach(element => {
//     element.classList.toggle("inactive")
//     });
//     close.classList.toggle('active')

// })

// var sub1=document.querySelector("ul.sub1");
// sub2=document.querySelector("ul.sub2");

//      extraUl=document.querySelector('#extra ul');
//      extra=document.querySelector('.about')


// function displayOff(e) {
//     if (window.innerWidth<=600) {
//     navBarLinks.forEach(element => {
//         element.style.transform='translateX(-40%)';
//         //element.previousElementSibling.style.display="none"
        
//     });
 
//     item.forEach(element => {
//        console.log();
//     });
// }
// }
function display2() {

    sub2.classList.remove('display')
    setTimeout(displayOff,6000)
         extraUl=document.querySelector('#extra ul');
         extra=document.querySelector('#extra')


}
const params ={
    method:'GET',
    headers:{
        'accept':'application/json'
    }
}
// window.addEventListener('load',()=>{
//     if (navigator.geolocation) {
//         showPosition =function (position) {
//             lat=  position.coords.latitude;
//             long = position.coords.longitude;
//             const base =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric/`;
//     console.log();
//     fetch(base)
//     .then((response)=>{
//         if (response.ok){
//        return response.json()  
  
        
//         }
     
//     })
//     .then((result)=>{
//         const location = result.name;
//         const {temp} = result.main
//      const {description, icon} = result.weather[0];
//      desc = description.toUpperCase();
//      marquee.innerText=`${location}
//      ${temp}
//      ${desc}
//      `
     
//     }
//     )
//     .catch((error)=>{
//       console.log('ERROR');
//     });
//            }
          
         
//           const displayPosition = navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     api ='88f292507eb3844ad475ffb3d0ae602c'
// })




// base: "stations"
// clouds: {all: 1}
// cod: 200
// coord: {lon: 3.3903, lat: 6.4474}
// dt: 1673564819
// id: 2332459
// main: {temp: 300.6, feels_like: 303, temp_min: 300.6, temp_max: 300.6, pressure: 1011, …}
// name: "Lagos"
// sys: {country: 'NG', sunrise: 1673589682, sunset: 1673632087}
// timezone: 3600
// visibility: 10000
// weather: [{…}]
// wind: {speed: 3.77, deg:


// const para=2;
// async function myPromise(resolve,reject) {
//     if (para==2) {
//         resolve('It is on')
//     }
   
    
// }
// console.log(myPromise());

