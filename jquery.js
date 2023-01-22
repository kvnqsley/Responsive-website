$(()=>{

    $(".services h1").hide();
    $(".see-text").hide();
   $(window).scroll(()=>{
       
    $(".services h1").fadeIn(8000);
   });


    $(".see-text").slideDown(2000);
    
});