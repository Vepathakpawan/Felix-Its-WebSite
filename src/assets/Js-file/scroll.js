
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 1700) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.getElementById('navbar_top').style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.getElementById('navbar_top').style.paddingTop = '50';
        } 
          
        
    });
  
  }); 
