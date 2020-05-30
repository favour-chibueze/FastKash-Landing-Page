    function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}
    document.querySelector('.Navbar__Link-toggle').addEventListener('click', classToggle);

   function myFunction() {
       let element = document.body;
       element.classList.toggle("dark-mode");
       if(element.className === 'dark-mode'){
        localStorage.setItem('mode', 'dark');
       } else{localStorage.setItem('mode','light')}
       
   }

   
   if (localStorage.getItem('mode') === 'dark')
   {
    let element = document.body;
    element.classList.toggle("dark-mode");
   } else{let element = document.body; element.classList.toggle('')}
 
   
    window.onscroll = function() {
       myNavbar()
   };

   const navbar = document.getElementById("main-navbar");
   const sticky = navbar.offsetTop;

    function myNavbar() {
       if (window.pageYOffset >= sticky) {
           navbar.classList.add("sticky")
       } else {
           navbar.classList.remove("sticky");
       }
   }

    window.onscroll = function() {scrollFunction()};

   function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("main-navbar").style.boxShadow = "0px 0px 12px 0px rgba(0, 0, 0, 0.23)";
    document.getElementById("logo").style.marginTop = "34px";
    } else {
    document.getElementById("main-navbar").style.boxShadow = "none";
    document.getElementById("logo").style.marginTop = "34px";
}
}

